// One-time script — clears all videoUrl fields on Module records.
// Run from the server directory: node scripts/clearVideoUrls.js

import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const prisma = new PrismaClient();

const { count } = await prisma.module.updateMany({
  where: { videoUrl: { not: null } },
  data: { videoUrl: null },
});

console.log(`✅ Cleared videoUrl on ${count} module(s).`);
await prisma.$disconnect();
