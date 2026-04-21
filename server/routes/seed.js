// Seed route — only available in development mode
// GET /api/seed → runs the seed script programmatically

import { Router } from 'express';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (_req, res) => {
  const seedPath = path.join(__dirname, '..', 'prisma', 'seed.js');

  exec(`node ${seedPath}`, { cwd: path.join(__dirname, '..') }, (err, stdout, stderr) => {
    if (err) {
      console.error('Seed error:', stderr);
      return res.status(500).json({ error: 'Seed failed', detail: stderr });
    }
    console.log(stdout);
    res.json({ message: 'Database seeded successfully', output: stdout });
  });
});

export default router;
