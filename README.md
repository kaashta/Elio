# Elio — Training, Mentoring & Community Platform

> A warm, stigma-free space for women rebuilding their lives.

---

## What is Elio?

Elio is a full-stack web platform that gives women access to practical learning, peer community, mentoring, and job opportunities — all in one place, at their own pace.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite + TailwindCSS 3 |
| Backend | Node.js + Express |
| Database | PostgreSQL + Prisma ORM |
| Auth | JWT in httpOnly cookies |
| File uploads | Multer |
| Real-time | Socket.io |

---

## Folder Structure

```
/elio
  /client               ← React frontend (Vite)
    /src
      /components       ← Reusable UI: Navbar, Avatar, ProgressBar, etc.
      /context          ← AuthContext (user session)
      /hooks            ← useApi helper
      /pages            ← One file per page/route
      /styles           ← global.css (Tailwind + CSS variables)
  /server               ← Express backend
    /middleware         ← auth.js (JWT), upload.js (Multer)
    /prisma             ← schema.prisma + seed.js
    /routes             ← auth, users, learn, community, mentors, opportunities
    index.js            ← Entry point + Socket.io setup
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL running locally (default port 5432)

---

### 1. Clone & install

```bash
# Server
cd elio/server
npm install

# Client
cd ../client
npm install
```

### 2. Configure the database

Copy the example env file and fill in your PostgreSQL credentials:

```bash
cd elio/server
copy .env.example .env
```

Edit `.env`:
```
DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/elio"
JWT_SECRET="pick-a-long-random-secret"
PORT=3001
CLIENT_URL="http://localhost:5173"
NODE_ENV="development"
```

### 3. Set up the database

```bash
cd elio/server
npx prisma db push       # creates all tables
node prisma/seed.js      # populates with sample data
```

Or use the in-app seed route (dev only):
```
GET http://localhost:3001/api/seed
```

### 4. Run the app

Open two terminals:

```bash
# Terminal 1 — backend
cd elio/server
npm run dev

# Terminal 2 — frontend
cd elio/client
npm run dev
```

Visit **http://localhost:5173**

---

## Demo accounts (after seeding)

| Name | Email | Password |
|---|---|---|
| Alice M. | alice@example.com | password123 |
| Beatrice O. | bea@example.com | password123 |
| Cora T. | cora@example.com | password123 |

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/signup` | Create account |
| `/login` | Sign in |
| `/onboarding` | 3-step profile setup |
| `/dashboard` | Home screen with progress + feed |
| `/learn` | Learning paths & modules |
| `/learn/module/:id` | Module detail with quiz |
| `/community` | Circles + Mentoring tabs |
| `/opportunities` | Jobs + Employers tabs |

---

## Design System

All colours are defined as CSS custom properties in `src/styles/global.css` and mirrored as Tailwind theme extensions in `tailwind.config.js`:

| Token | Hex |
|---|---|
| `--cream` | `#FAF6F0` |
| `--sand` | `#E8DCC8` |
| `--terracotta` | `#C4714A` |
| `--rust` | `#A0522D` |
| `--sage` | `#7A9E7E` |
| `--warm-brown` | `#5C3D2E` |
| `--off-white` | `#FFFDF9` |
| `--muted-text` | `#7A6A5A` |

Headings use **Playfair Display**, body text uses **Inter**.

---

## Key decisions

- **No component libraries** — every UI element is built from scratch with Tailwind utilities so the code is fully readable and learnable.
- **httpOnly cookies** for JWT — prevents XSS token theft.
- **Socket.io** scoped per circle room — real-time posts/replies only go to users inside that circle.
- **Seed file** provides realistic placeholder content from day one.
- **Module locking** — each module unlocks only after the previous one is completed, encouraging linear progression.
