// Landing page — the public-facing home page of Elio
// Hero + three feature tiles + CTA buttons + footer

import { Link } from 'react-router-dom';

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
