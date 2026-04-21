// Learning routes — paths, modules, quiz submission, progress tracking

import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import auth from '../middleware/auth.js';

const router = Router();
const prisma = new PrismaClient();

// GET /api/learn/paths — all learning paths with modules and user's progress
router.get('/paths', auth, async (req, res) => {
  try {
    const paths = await prisma.learningPath.findMany({
      orderBy: { order: 'asc' },
      include: {
        modules: {
          orderBy: { order: 'asc' },
          include: {
            userProgress: {
              where: { userId: req.user.id },
            },
          },
        },
      },
    });
    res.json({ paths });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch learning paths' });
  }
});

// GET /api/learn/modules/:id — single module detail
router.get('/modules/:id', auth, async (req, res) => {
  try {
    const module = await prisma.module.findUnique({
      where: { id: req.params.id },
      include: {
        path: { select: { id: true, title: true } },
        userProgress: { where: { userId: req.user.id } },
      },
    });

    if (!module) return res.status(404).json({ error: 'Module not found' });
    res.json({ module });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch module' });
  }
});

// POST /api/learn/modules/:id/complete — mark a module as complete
router.post('/modules/:id/complete', auth, async (req, res) => {
  try {
    const progress = await prisma.userModuleProgress.upsert({
      where: { userId_moduleId: { userId: req.user.id, moduleId: req.params.id } },
      update: { completed: true, completedAt: new Date() },
      create: { userId: req.user.id, moduleId: req.params.id, completed: true, completedAt: new Date() },
    });
    res.json({ progress });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not mark module complete' });
  }
});

// GET /api/learn/progress — overall progress summary for the dashboard
router.get('/progress', auth, async (req, res) => {
  try {
    const totalModules = await prisma.module.count();
    const completedModules = await prisma.userModuleProgress.count({
      where: { userId: req.user.id, completed: true },
    });
    res.json({ total: totalModules, completed: completedModules });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch progress' });
  }
});

export default router;
