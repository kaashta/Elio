// Mentor routes — list mentors, request/view sessions

import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import auth from '../middleware/auth.js';

const router = Router();
const prisma = new PrismaClient();

// GET /api/mentors — all available mentors
router.get('/', auth, async (req, res) => {
  try {
    const mentors = await prisma.mentor.findMany({
      where: { available: true },
      include: {
        user: { select: { id: true, name: true, photo: true } },
      },
    });
    res.json({ mentors });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch mentors' });
  }
});

// POST /api/mentors/:id/request — request a mentoring session
router.post('/:id/request', auth, async (req, res) => {
  const { notes } = req.body;

  try {
    const mentor = await prisma.mentor.findUnique({ where: { id: req.params.id } });
    if (!mentor) return res.status(404).json({ error: 'Mentor not found' });

    // Prevent requesting a session with yourself
    if (mentor.userId === req.user.id) {
      return res.status(400).json({ error: 'You cannot request a session with yourself' });
    }

    const session = await prisma.mentoringSession.create({
      data: {
        mentorId: req.params.id,
        menteeId: req.user.id,
        notes: notes || null,
      },
    });
    res.status(201).json({ session });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not request session' });
  }
});

// GET /api/mentors/my-sessions — sessions for the current user (as mentee)
router.get('/my-sessions', auth, async (req, res) => {
  try {
    const sessions = await prisma.mentoringSession.findMany({
      where: { menteeId: req.user.id },
      orderBy: { requestedAt: 'desc' },
      include: {
        mentor: {
          include: {
            user: { select: { id: true, name: true, photo: true } },
          },
        },
      },
    });
    res.json({ sessions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch sessions' });
  }
});

export default router;
