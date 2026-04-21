// Elio server — main entry point
// Initialises Express, Socket.io, and all routes
//
// IMPORTANT: Route files are loaded via dynamic import AFTER dotenv.config()
// so that DATABASE_URL and DEMO_MODE are available before any Prisma client
// is instantiated.

import express from 'express';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env variables BEFORE any route module is imported (Prisma reads DATABASE_URL at instantiation)
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);

// Socket.io setup for real-time community features
const io = new SocketServer(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  },
});

// ── Middleware ──────────────────────────────────────────────
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Serve uploaded files (profile photos) as static assets
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ── Routes (dynamic imports so dotenv runs first) ───────────
if (process.env.DEMO_MODE === 'true') {
  console.log('🎭 Running in DEMO MODE — no database required');
  const { default: demoRouter } = await import('./demo/router.js');
  app.use('/api', demoRouter);
} else {
  const { default: authRoutes }          = await import('./routes/auth.js');
  const { default: userRoutes }          = await import('./routes/users.js');
  const { default: learnRoutes }         = await import('./routes/learn.js');
  const { default: communityRoutes }     = await import('./routes/community.js');
  const { default: opportunitiesRoutes } = await import('./routes/opportunities.js');
  const { default: mentorRoutes }        = await import('./routes/mentors.js');

  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/learn', learnRoutes);
  app.use('/api/community', communityRoutes);
  app.use('/api/opportunities', opportunitiesRoutes);
  app.use('/api/mentors', mentorRoutes);

  if (process.env.NODE_ENV === 'development') {
    const { default: seedRoutes } = await import('./routes/seed.js');
    app.use('/api/seed', seedRoutes);
  }
}

// ── Socket.io — real-time community ─────────────────────────
io.on('connection', (socket) => {
  console.log(`Socket connected: ${socket.id}`);

  // Join a circle room so messages are scoped per circle
  socket.on('join-circle', (circleId) => {
    socket.join(`circle-${circleId}`);
  });

  socket.on('leave-circle', (circleId) => {
    socket.leave(`circle-${circleId}`);
  });

  // Broadcast new post to everyone in the circle
  socket.on('new-post', (data) => {
    io.to(`circle-${data.circleId}`).emit('post-created', data);
  });

  // Broadcast new reply
  socket.on('new-reply', (data) => {
    io.to(`circle-${data.circleId}`).emit('reply-created', data);
  });

  socket.on('disconnect', () => {
    console.log(`Socket disconnected: ${socket.id}`);
  });
});

// Make io accessible to route handlers via app locals
app.set('io', io);

// ── Serve client build (production) ─────────────────────────
// In production, Express serves the Vite-built React app.
// API requests (/api/*) are handled above; everything else gets index.html.
if (process.env.NODE_ENV === 'production') {
  const clientBuild = path.join(__dirname, '..', 'client', 'dist');
  app.use(express.static(clientBuild));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(clientBuild, 'index.html'));
  });
}

// ── Start ────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Elio server running on http://localhost:${PORT}`);
});
