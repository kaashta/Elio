// Demo router — serves all API endpoints with static fixture data.
// Activated when DEMO_MODE=true in .env. No database required.

import { Router } from 'express';
import jwt from 'jsonwebtoken';
import {
  DEMO_USER,
  paths,
  moduleDetail,
  circles,
  getPostsForCircle,
  mentors,
  jobs,
  employers,
} from './data.js';

const router = Router();

// ── Auth ──────────────────────────────────────────────────────────────────────

// Issue a demo JWT and set the cookie (same shape as the real auth route)
const issueDemoToken = (res) => {
  const token = jwt.sign(
    { id: DEMO_USER.id, name: DEMO_USER.name, email: DEMO_USER.email },
    process.env.JWT_SECRET || 'demo-secret',
    { expiresIn: '7d' }
  );
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

// POST /api/auth/signup  — just logs in as demo user
router.post('/auth/signup', (req, res) => {
  issueDemoToken(res);
  res.status(201).json({ user: { ...DEMO_USER } });
});

// POST /api/auth/login  — any credentials, returns demo user
router.post('/auth/login', (req, res) => {
  issueDemoToken(res);
  res.json({ user: { ...DEMO_USER } });
});

// POST /api/auth/logout
router.post('/auth/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
});

// GET /api/auth/me
router.get('/auth/me', (req, res) => {
  res.json({ user: { ...DEMO_USER } });
});

// ── Users ─────────────────────────────────────────────────────────────────────

// GET /api/users/me
router.get('/users/me', (req, res) => {
  res.json({ user: { ...DEMO_USER } });
});

// PATCH /api/users/me  — accept but return unchanged demo profile
router.patch('/users/me', (req, res) => {
  res.json({ user: { ...DEMO_USER, ...req.body } });
});

// POST /api/users/me/onboard  — mark onboarding done
router.post('/users/me/onboard', (req, res) => {
  res.json({ user: { ...DEMO_USER, onboarded: true } });
});

// ── Dashboard ────────────────────────────────────────────────────────────────

// GET /api/dashboard/summary
router.get('/dashboard/summary', (_req, res) => {
  const totalModules = paths.reduce((acc, p) => acc + p.modules.length, 0);
  const firstPath = paths[0];
  const nextModule = firstPath?.modules?.[0]
    ? { ...firstPath.modules[0], pathTitle: firstPath.title }
    : null;
  res.json({
    progress: {
      total: totalModules,
      completed: 0,
      percent: 0,
      pathTitle: firstPath?.title ?? null,
    },
    nextModule,
  });
});

// ── Learning ──────────────────────────────────────────────────────────────────

// GET /api/learn/paths
router.get('/learn/paths', (req, res) => {
  res.json({ paths });
});

// GET /api/learn/modules/:id
router.get('/learn/modules/:id', (req, res) => {
  const mod = moduleDetail[req.params.id];
  if (!mod) return res.status(404).json({ error: 'Module not found' });
  res.json({ module: mod });
});

// POST /api/learn/modules/:id/complete  — pretend success
router.post('/learn/modules/:id/complete', (req, res) => {
  res.json({
    progress: {
      userId: DEMO_USER.id,
      moduleId: req.params.id,
      completed: true,
      completedAt: new Date().toISOString(),
    },
  });
});

// POST /api/learn/modules/:id/quiz  — always respond with a pass
router.post('/learn/modules/:id/quiz', (req, res) => {
  const mod = moduleDetail[req.params.id];
  const total = mod?.quiz?.length ?? 3;
  res.json({ score: total, total, passed: true });
});

// ── Community ─────────────────────────────────────────────────────────────────

// GET /api/community/circles
router.get('/community/circles', (req, res) => {
  res.json({ circles });
});

// GET /api/community/circles/:id/posts
router.get('/community/circles/:id/posts', (req, res) => {
  const posts = getPostsForCircle(req.params.id);
  res.json({ posts });
});

// POST /api/community/circles/:id/posts  — echo back as a new post
router.post('/community/circles/:id/posts', (req, res) => {
  const post = {
    id: `demo-post-${Date.now()}`,
    circleId: req.params.id,
    author: { id: DEMO_USER.id, name: DEMO_USER.name, photo: DEMO_USER.photo },
    content: req.body.content,
    createdAt: new Date().toISOString(),
    replies: [],
    likes: [],
    _count: { likes: 0, replies: 0 },
  };
  res.status(201).json({ post });
});

// POST /api/community/posts/:id/replies
router.post('/community/posts/:id/replies', (req, res) => {
  const reply = {
    id: `demo-reply-${Date.now()}`,
    postId: req.params.id,
    author: { id: DEMO_USER.id, name: DEMO_USER.name, photo: DEMO_USER.photo },
    content: req.body.content,
    createdAt: new Date().toISOString(),
  };
  res.status(201).json({ reply });
});

// POST /api/community/posts/:id/like
router.post('/community/posts/:id/like', (req, res) => {
  res.json({ liked: true });
});

// DELETE /api/community/posts/:id/like
router.delete('/community/posts/:id/like', (req, res) => {
  res.json({ liked: false });
});

// ── Mentors ───────────────────────────────────────────────────────────────────

// GET /api/mentors
router.get('/mentors', (req, res) => {
  res.json({ mentors: mentors.filter((m) => m.available) });
});

// GET /api/mentors/my-sessions
router.get('/mentors/my-sessions', (req, res) => {
  res.json({ sessions: [] });
});

// POST /api/mentors/:id/request
router.post('/mentors/:id/request', (req, res) => {
  res.status(201).json({
    session: {
      id: `demo-session-${Date.now()}`,
      mentorId: req.params.id,
      menteeId: DEMO_USER.id,
      status: 'pending',
      requestedAt: new Date().toISOString(),
      notes: req.body.notes || null,
    },
  });
});

// ── Opportunities ─────────────────────────────────────────────────────────────

// GET /api/opportunities/jobs
router.get('/opportunities/jobs', (req, res) => {
  const { location, type, skillArea } = req.query;
  let filtered = jobs;
  if (location) filtered = filtered.filter((j) => j.location.toLowerCase().includes(location.toLowerCase()));
  if (type)     filtered = filtered.filter((j) => j.type === type);
  if (skillArea) filtered = filtered.filter((j) => j.skillArea === skillArea);
  res.json({ jobs: filtered });
});

// GET /api/opportunities/employers
router.get('/opportunities/employers', (req, res) => {
  res.json({ employers });
});

export default router;
