// Dashboard routes — aggregated summary for the dashboard page

import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import auth from '../middleware/auth.js';

const router = Router();
const prisma = new PrismaClient();

// GET /api/dashboard/summary — everything the dashboard needs in one request
router.get('/summary', auth, async (req, res) => {
  try {
    const [paths, completedCount, totalCount] = await Promise.all([
      prisma.learningPath.findMany({
        orderBy: { order: 'asc' },
        include: {
          modules: {
            orderBy: { order: 'asc' },
            include: {
              userProgress: { where: { userId: req.user.id } },
            },
          },
        },
      }),
      prisma.userModuleProgress.count({
        where: { userId: req.user.id, completed: true },
      }),
      prisma.module.count(),
    ]);

    // Find current path (first with any incomplete module) and next module
    let currentPath = null;
    let nextModule = null;
    for (const path of paths) {
      const incomplete = path.modules.find((m) => !m.userProgress?.[0]?.completed);
      if (incomplete) {
        currentPath = path;
        nextModule = { ...incomplete, pathTitle: path.title };
        break;
      }
    }

    res.json({
      progress: {
        total: totalCount,
        completed: completedCount,
        percent: totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0,
        pathTitle: currentPath?.title ?? null,
      },
      nextModule,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not load dashboard summary' });
  }
});

export default router;
