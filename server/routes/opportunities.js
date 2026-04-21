// Opportunities routes — job listings and partner employers

import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import auth from '../middleware/auth.js';

const router = Router();
const prisma = new PrismaClient();

// GET /api/opportunities/jobs — all job listings with optional filters
// Query params: location, type, skillArea
router.get('/jobs', auth, async (req, res) => {
  const { location, type, skillArea } = req.query;

  const where = {
    ...(location && { location: { contains: location, mode: 'insensitive' } }),
    ...(type && { type }),
    ...(skillArea && { skillArea }),
  };

  try {
    const jobs = await prisma.jobListing.findMany({
      where,
      orderBy: [{ isPartner: 'desc' }, { createdAt: 'desc' }],
    });
    res.json({ jobs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch jobs' });
  }
});

// GET /api/opportunities/employers — partner employer cards (derived from partner jobs)
router.get('/employers', auth, async (req, res) => {
  try {
    // Group partner job listings by company to build employer cards
    const partnerJobs = await prisma.jobListing.findMany({
      where: { isPartner: true },
    });

    const employerMap = partnerJobs.reduce((acc, job) => {
      if (!acc[job.company]) {
        acc[job.company] = { company: job.company, jobCount: 0, roles: [] };
      }
      acc[job.company].jobCount += 1;
      acc[job.company].roles.push(job.title);
      return acc;
    }, {});

    const employers = Object.values(employerMap);
    res.json({ employers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch employers' });
  }
});

export default router;
