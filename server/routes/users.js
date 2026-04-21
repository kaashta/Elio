// User routes — profile updates, onboarding, photo upload

import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import auth from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = Router();
const prisma = new PrismaClient();

// PATCH /api/users/profile — update name, bio, goals, interests
router.patch('/profile', auth, async (req, res) => {
  const { name, bio, goals, interests } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        ...(name && { name }),
        ...(bio !== undefined && { bio }),
        ...(goals && { goals }),
        ...(interests && { interests }),
      },
      select: { id: true, name: true, email: true, photo: true, bio: true, goals: true, interests: true, onboarded: true },
    });
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not update profile' });
  }
});

// POST /api/users/onboarding — complete the multi-step onboarding flow
router.post('/onboarding', auth, async (req, res) => {
  const { name, bio, goals, interests } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        ...(name && { name }),
        ...(bio !== undefined && { bio }),
        ...(goals && { goals }),
        ...(interests && { interests }),
        onboarded: true,
      },
      select: { id: true, name: true, email: true, photo: true, bio: true, goals: true, interests: true, onboarded: true },
    });
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not complete onboarding' });
  }
});

// POST /api/users/photo — upload profile photo via Multer
router.post('/photo', auth, upload.single('photo'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const user = await prisma.user.update({
      where: { id: req.user.id },
      data: { photo: req.file.filename },
      select: { id: true, name: true, photo: true },
    });
    res.json({ user, photoUrl: `/uploads/${req.file.filename}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not save photo' });
  }
});

export default router;
