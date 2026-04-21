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
    <div className="min-h-screen flex flex-col" style={{ background: '#FAF6F0' }}>

      {/* ── Hero — full viewport ──────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ minHeight: '100svh' }}
      >
        {/* Warm radial glow — top right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 60% 40%, rgba(196,113,74,0.18) 0%, transparent 70%)',
          }}
        />
        {/* Soft glow — bottom left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 w-[440px] h-[440px] rounded-full"
          style={{
            background:
              'radial-gradient(circle at 40% 60%, rgba(232,220,200,0.55) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <p
          className="font-heading font-bold mb-12 tracking-wide"
          style={{ fontSize: '1.6rem', color: '#C4714A' }}
        >
          elio
        </p>

        {/* Headline */}
        <h1
          className="font-heading font-bold leading-tight mb-6"
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            color: '#5C3D2E',
            maxWidth: '760px',
          }}
        >
          Your next chapter{' '}
          <span style={{ color: '#C4714A' }}>starts here.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="leading-relaxed mb-10"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#7A6A5A',
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
          style={{ color: '#7A6A5A' }}
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
      <section className="w-full px-6 py-20" style={{ background: '#FAF6F0' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-heading font-semibold text-center mb-12"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#5C3D2E' }}
          >
            Everything you need, in one place
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ emoji, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center gap-4 rounded-card transition-shadow duration-300 hover:shadow-card-hover"
                style={{
                  background: '#FFFDF9',
                  border: '1px solid #E8DCC8',
                  padding: '2.5rem 2rem',
                  boxShadow: '0 4px 20px rgba(92,61,46,0.07)',
                }}
              >
                <span style={{ fontSize: '2.4rem', lineHeight: 1 }}>{emoji}</span>
                <h3
                  className="font-heading font-semibold"
                  style={{ fontSize: '1.2rem', color: '#5C3D2E' }}
                >
                  {title}
                </h3>
                <p style={{ color: '#7A6A5A', lineHeight: 1.65, fontSize: '0.97rem' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial strip ─────────────────────────── */}
      <section className="w-full py-16 px-6" style={{ background: '#E8DCC8' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="font-heading italic leading-relaxed mb-5"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#5C3D2E' }}
          >
            "I didn't know where to start. Elio gave me a safe place to figure it
            out — and a community who cheered me on every step of the way."
          </p>
          <p style={{ color: '#7A6A5A', fontWeight: 500, fontSize: '0.9rem' }}>
            — Cora T., Elio member
          </p>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────── */}
      <section className="w-full px-6 py-24 text-center" style={{ background: '#FAF6F0' }}>
        <h2
          className="font-heading font-semibold mb-4"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#5C3D2E' }}
        >
          Ready to begin?
        </h2>
        <p className="mb-8" style={{ color: '#7A6A5A', fontSize: '1.05rem' }}>
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
        style={{ background: '#5C3D2E' }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <span
            className="font-heading font-bold"
            style={{ fontSize: '1.4rem', color: '#C4714A' }}
          >
            elio
          </span>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map(({ label }) => (
              <a
                key={label}
                href="#"
                style={{
                  color: 'rgba(232,220,200,0.65)',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E8DCC8')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(232,220,200,0.65)')
                }
              >
                {label}
              </a>
            ))}
          </nav>

          <p style={{ color: 'rgba(232,220,200,0.4)', fontSize: '0.8rem' }}>
            © 2026 Elio
          </p>
        </div>
      </footer>
    </div>
  );
}


const features = [
  {
    icon: '📚',
    title: 'Learn',
    description:
      'Practical courses built for real life. Go at your own pace, start anywhere, and celebrate every step forward.',
  },
  {
    icon: '🤝',
    title: 'Connect',
    description:
      'A warm, judgement-free community of women who get it. Share, support, and grow together.',
  },
  {
    icon: '💼',
    title: 'Work',
    description:
      'Job opportunities with employers who see your potential — not just your past.',
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* ── Navbar (public) ──────────────────────────── */}
      <header className="bg-off-white border-b border-sand shadow-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <span className="font-heading text-2xl font-bold text-terracotta">Elio</span>
          <div className="flex items-center gap-3">
            <Link to="/login" className="btn-ghost text-sm">
              Sign in
            </Link>
            <Link to="/signup" className="btn-primary text-sm">
              Create your account
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(135deg, #FAF6F0 0%, #E8DCC8 50%, #C4714A22 100%)',
          }}
        />

        {/* Decorative circle */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full -z-10"
          style={{ background: 'radial-gradient(circle, #C4714A18, transparent 70%)' }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-36 text-center">
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-warm-brown leading-tight mb-6">
            Your next chapter
            <br />
            <span className="text-terracotta">starts here.</span>
          </h1>
          <p className="text-xl text-muted-text max-w-2xl mx-auto leading-relaxed mb-10">
            Elio is a community-first platform for women who are ready to rebuild,
            retrain, and reconnect — on their own terms, at their own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="btn-primary text-base px-8 py-4">
              Create your account
            </Link>
            <Link to="/login" className="btn-secondary text-base px-8 py-4">
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* ── Feature tiles ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="font-heading text-3xl font-semibold text-warm-brown text-center mb-12">
          Everything you need, in one place
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="card flex flex-col items-center text-center gap-4 hover:shadow-card-hover transition-shadow duration-300"
            >
              <span className="text-4xl">{icon}</span>
              <h3 className="font-heading text-xl font-semibold text-warm-brown">{title}</h3>
              <p className="text-muted-text leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonial strip ─────────────────────────── */}
      <section className="bg-sand py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-heading text-2xl text-warm-brown italic leading-relaxed mb-6">
            "I didn't know where to start. Elio gave me a safe place to figure it
            out — and a community who cheered me on every step of the way."
          </p>
          <p className="text-muted-text font-medium">— Cora T., Elio member</p>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="font-heading text-3xl font-semibold text-warm-brown mb-4">
          Ready to begin?
        </h2>
        <p className="text-muted-text mb-8 text-lg">
          It's free, it's warm, and you deserve it.
        </p>
        <Link to="/signup" className="btn-primary text-base px-10 py-4">
          Join Elio today
        </Link>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className="bg-warm-brown text-sand py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-heading text-xl font-bold text-terracotta">Elio</span>
          <div className="flex gap-6 text-sm text-sand/70">
            <a href="#" className="hover:text-sand transition-colors">About</a>
            <a href="#" className="hover:text-sand transition-colors">Privacy</a>
            <a href="#" className="hover:text-sand transition-colors">Contact</a>
            <a href="#" className="hover:text-sand transition-colors">Partners</a>
          </div>
          <p className="text-sm text-sand/50">© 2026 Elio</p>
        </div>
      </footer>
    </div>
  );
}
