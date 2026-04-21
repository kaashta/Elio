// Community routes — circles, posts, replies, likes

import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import auth from '../middleware/auth.js';

const router = Router();
const prisma = new PrismaClient();

// GET /api/community/circles — all circles
router.get('/circles', auth, async (req, res) => {
  try {
    const circles = await prisma.circle.findMany({
      include: { _count: { select: { posts: true } } },
    });
    res.json({ circles });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch circles' });
  }
});

// GET /api/community/circles/:id/posts — posts in a circle with replies and likes
router.get('/circles/:id/posts', auth, async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: { circleId: req.params.id },
      orderBy: { createdAt: 'desc' },
      include: {
        author: { select: { id: true, name: true, photo: true } },
        replies: {
          orderBy: { createdAt: 'asc' },
          include: { author: { select: { id: true, name: true, photo: true } } },
        },
        likes: true,
        _count: { select: { likes: true, replies: true } },
      },
    });
    res.json({ posts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch posts' });
  }
});

// POST /api/community/circles/:id/posts — create a post
router.post('/circles/:id/posts', auth, async (req, res) => {
  const { content } = req.body;
  if (!content?.trim()) return res.status(400).json({ error: 'Post content cannot be empty' });

  try {
    const post = await prisma.post.create({
      data: { circleId: req.params.id, authorId: req.user.id, content: content.trim() },
      include: {
        author: { select: { id: true, name: true, photo: true } },
        replies: [],
        likes: [],
        _count: { select: { likes: true, replies: true } },
      },
    });

    // Emit real-time event through Socket.io (accessed via app.get('io'))
    req.app.get('io')?.to(`circle-${req.params.id}`).emit('post-created', post);

    res.status(201).json({ post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not create post' });
  }
});

// POST /api/community/posts/:id/replies — reply to a post
router.post('/posts/:id/replies', auth, async (req, res) => {
  const { content } = req.body;
  if (!content?.trim()) return res.status(400).json({ error: 'Reply cannot be empty' });

  try {
    const post = await prisma.post.findUnique({ where: { id: req.params.id } });
    if (!post) return res.status(404).json({ error: 'Post not found' });

    const reply = await prisma.reply.create({
      data: { postId: req.params.id, authorId: req.user.id, content: content.trim() },
      include: { author: { select: { id: true, name: true, photo: true } } },
    });

    req.app.get('io')?.to(`circle-${post.circleId}`).emit('reply-created', { ...reply, circleId: post.circleId });

    res.status(201).json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not add reply' });
  }
});

// POST /api/community/posts/:id/like — toggle like on a post
router.post('/posts/:id/like', auth, async (req, res) => {
  try {
    const existing = await prisma.like.findUnique({
      where: { postId_userId: { postId: req.params.id, userId: req.user.id } },
    });

    if (existing) {
      await prisma.like.delete({ where: { id: existing.id } });
      return res.json({ liked: false });
    }

    await prisma.like.create({ data: { postId: req.params.id, userId: req.user.id } });
    res.json({ liked: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not toggle like' });
  }
});

export default router;
