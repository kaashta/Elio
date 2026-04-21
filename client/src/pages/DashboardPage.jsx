// Dashboard — the main home screen after login
// Shows: greeting, learning progress, quick links, upcoming module, community feed

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import ProgressBar from '../components/ProgressBar';
import LoadingSpinner from '../components/LoadingSpinner';

// Returns the right time-of-day greeting
function timeGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

const quickLinks = [
  { to: '/learn', label: 'My Journey', emoji: '📚', desc: 'Continue your learning path' },
  { to: '/community', label: 'Community', emoji: '🤝', desc: 'Connect and share with others' },
  { to: '/opportunities', label: 'Opportunities', emoji: '💼', desc: 'Jobs and employers for you' },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const [progress, setProgress] = useState(null);
  const [nextModule, setNextModule] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dashboard/summary', { credentials: 'include' })
      .then((r) => r.json())
      .then((data) => {
        setProgress(data.progress);
        setNextModule(data.nextModule);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const progressPercent = progress?.percent ?? 0;

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="page-container">
        {/* ── Greeting ──────────────────────────────────── */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-warm-brown">
            {timeGreeting()}, {user?.name?.split(' ')[0]} 👋
          </h1>
          <p className="text-muted-text mt-1">
            Here's where things stand today.
          </p>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-col gap-6">
            {/* ── Progress card ─────────────────────────── */}
            <div className="card">
              <h2 className="font-heading text-lg font-semibold text-warm-brown mb-1">
                Your learning progress
              </h2>
              {progress?.pathTitle && (
                <p className="text-sm font-medium mb-4" style={{ color: '#C4714A' }}>
                  {progress.pathTitle}
                </p>
              )}
              <ProgressBar
                percent={progressPercent}
                label={`${progress?.completed || 0} of ${progress?.total || 0} modules complete`}
              />
              <div className="flex justify-between text-sm text-muted-text mt-3">
                <span>Keep going — you're doing great.</span>
                <Link to="/learn" className="text-terracotta font-medium hover:underline">
                  Continue learning →
                </Link>
              </div>
            </div>

            {/* ── Next module ───────────────────────────── */}
            {nextModule && (
              <div className="card bg-terracotta/5 border border-terracotta/20">
                <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-2">
                  Up next
                </p>
                <h3 className="font-heading text-lg font-semibold text-warm-brown mb-1">
                  {nextModule.title}
                </h3>
                <p className="text-muted-text text-sm mb-4">{nextModule.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-text">⏱ {nextModule.duration}</span>
                  <Link
                    to={`/learn/module/${nextModule.id}`}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    Start module →
                  </Link>
                </div>
              </div>
            )}

            {/* ── Quick links ───────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickLinks.map(({ to, label, emoji, desc }) => (
                <Link
                  key={to}
                  to={to}
                  className="card flex flex-col gap-2 hover:shadow-card-hover transition-shadow duration-300 group"
                >
                  <span className="text-3xl">{emoji}</span>
                  <h3 className="font-heading text-base font-semibold text-warm-brown group-hover:text-terracotta transition-colors">
                    {label}
                  </h3>
                  <p className="text-sm text-muted-text flex-1">{desc}</p>
                  <span className="text-terracotta text-sm font-medium mt-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
              ))}
            </div>

            {/* ── Community feed placeholder ────────────── */}
            <div className="card">
              <h2 className="font-heading text-lg font-semibold text-warm-brown mb-4">
                Recent community activity
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { author: 'Cora T.', circle: 'Job Hunting', text: 'Just had my first interview in years. Nervous but I did it! 🌱' },
                  { author: 'Bea O.', circle: 'Money & Budgeting', text: 'Shared the 50/30/20 rule with my sister and she loved it.' },
                  { author: 'Alice M.', circle: 'New Beginnings', text: 'Reminder: every small step still counts as progress.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-cream rounded-card">
                    <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-warm-brown font-semibold text-sm flex-shrink-0">
                      {item.author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-warm-brown">
                        {item.author}{' '}
                        <span className="font-normal text-muted-text">in {item.circle}</span>
                      </p>
                      <p className="text-sm text-warm-brown/80 mt-0.5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/community" className="text-sm text-terracotta font-medium hover:underline">
                  Visit the community →
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
