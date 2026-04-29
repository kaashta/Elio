// Landing page — public-facing home page of Elio

import { Link } from 'react-router-dom';

const features = [
  {
    emoji: '🌱',
    title: 'Learn',
    description: 'Structured learning paths built around real skills',
  },
  {
    emoji: '🤝',
    title: 'Connect',
    description: 'A community that gets it, and gets you',
  },
  {
    emoji: '💼',
    title: 'Work',
    description: 'Opportunities with employers who want you to succeed',
  },
];

const footerLinks = [
  { label: 'About' },
  { label: 'Privacy' },
  { label: 'Contact' },
  { label: 'Partners' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#FAF7FF' }}>

      {/* ── Hero — full viewport ──────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ minHeight: '100svh' }}
      >
        {/* Lilac radial glow — top right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 60% 40%, rgba(139,92,246,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Green glow — bottom left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 w-[440px] h-[440px] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 40% 60%, rgba(5,150,105,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <p
          className="font-heading font-bold mb-12 tracking-wide"
          style={{ fontSize: '1.6rem', color: '#8B5CF6' }}
        >
          elio
        </p>

        {/* Headline */}
        <h1
          className="font-heading font-bold leading-tight mb-6"
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            color: '#2E1065',
            maxWidth: '760px',
          }}
        >
          Your next chapter{' '}
          <span style={{ color: '#8B5CF6' }}>starts here.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="leading-relaxed mb-10"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#7C6A99',
            maxWidth: '560px',
          }}
        >
          Elio is a place to learn, grow, and find your people —&nbsp;on your
          terms, at your pace.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            to="/signup"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '0.85rem 2.2rem' }}
          >
            Create your account
          </Link>
          <Link
            to="/login"
            className="btn-secondary"
            style={{ fontSize: '1rem', padding: '0.85rem 2.2rem' }}
          >
            Sign in
          </Link>
        </div>

        {/* Scroll nudge */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
          style={{ color: '#7C6A99' }}
        >
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em' }}>
            SCROLL
          </span>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path
              d="M8 1v14M1 9l7 8 7-8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ── Feature tiles ─────────────────────────────── */}
      <section className="w-full px-6 py-20" style={{ background: '#FAF7FF' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-heading font-semibold text-center mb-12"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#2E1065' }}
          >
            Everything you need, in one place
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ emoji, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center gap-4 rounded-card transition-shadow duration-300 hover:shadow-card-hover"
                style={{
                  background: '#FDFBFF',
                  border: '1px solid #EDE5F5',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 4px 20px rgba(46,16,101,0.07)',
                }}
              >
                <span style={{ fontSize: '2.4rem', lineHeight: 1 }}>{emoji}</span>
                <h3
                  className="font-heading font-semibold"
                  style={{ fontSize: '1.2rem', color: '#2E1065' }}
                >
                  {title}
                </h3>
                <p style={{ color: '#7C6A99', lineHeight: 1.65, fontSize: '0.97rem' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial strip ─────────────────────────── */}
      <section className="w-full py-16 px-6" style={{ background: '#EDE5F5' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="font-heading italic leading-relaxed mb-5"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#2E1065' }}
          >
            "I didn't know where to start. Elio gave me a safe place to figure it
            out — and a community who cheered me on every step of the way."
          </p>
          <p style={{ color: '#7C6A99', fontWeight: 500, fontSize: '0.9rem' }}>
            — Cora T., Elio member
          </p>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────── */}
      <section className="w-full px-6 py-24 text-center" style={{ background: '#FAF7FF' }}>
        <h2
          className="font-heading font-semibold mb-4"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#2E1065' }}
        >
          Ready to begin?
        </h2>
        <p className="mb-8" style={{ color: '#7C6A99', fontSize: '1.05rem' }}>
          It&rsquo;s free, it&rsquo;s warm, and you deserve it.
        </p>
        <Link
          to="/signup"
          className="btn-primary"
          style={{ fontSize: '1rem', padding: '0.85rem 2.5rem' }}
        >
          Join Elio today
        </Link>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer
        className="mt-auto py-10 px-6"
        style={{ background: '#2E1065' }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <span
            className="font-heading font-bold"
            style={{ fontSize: '1.4rem', color: '#8B5CF6' }}
          >
            elio
          </span>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(({ label }) => (
              <a
                key={label}
                href="#"
                style={{
                  color: 'rgba(237,229,245,0.65)',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#EDE5F5')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(237,229,245,0.65)')
                }
              >
                {label}
              </a>
            ))}
          </nav>

          <p style={{ color: 'rgba(237,229,245,0.4)', fontSize: '0.8rem' }}>
            © 2026 Elio
          </p>
        </div>
      </footer>
    </div>
  );
}
