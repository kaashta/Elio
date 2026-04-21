// LoginPage — email / password sign-in form with inline validation
// On success, redirects to /dashboard (or /onboarding if not yet onboarded)

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function FieldError({ message }) {
  if (!message) return null;
  return <p className="text-xs mt-1" style={{ color: '#C4714A' }}>{message}</p>;
}

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = 'Please enter your email address.';
    if (!form.password) errs.password = 'Please enter your password.';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const errs = validate();
    if (Object.keys(errs).length) { setFieldErrors(errs); return; }
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Incorrect email or password.');

      login(data.user);
      navigate(data.user.onboarded ? '/dashboard' : '/onboarding');
    } catch (err) {
      setServerError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: '#FAF6F0' }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="font-heading font-bold"
            style={{ fontSize: '1.8rem', color: '#C4714A', textDecoration: 'none' }}
          >
            elio
          </Link>
          <p className="mt-2" style={{ color: '#7A6A5A', fontSize: '0.95rem' }}>
            Good to have you back.
          </p>
        </div>

        <div
          className="rounded-card"
          style={{
            background: '#FFFDF9',
            border: '1px solid #E8DCC8',
            padding: '2rem',
            boxShadow: '0 4px 24px rgba(92,61,46,0.09)',
          }}
        >
          <h1
            className="font-heading font-semibold mb-6"
            style={{ fontSize: '1.4rem', color: '#5C3D2E' }}
          >
            Sign in to your account
          </h1>

          {serverError && (
            <div
              className="rounded-btn mb-4 px-4 py-3 text-sm"
              style={{ background: '#FDF0EA', color: '#A0522D', border: '1px solid #E8C4AC' }}
            >
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div>
              <label className="label" htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={`input${fieldErrors.email ? ' border-terracotta' : ''}`}
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
              <FieldError message={fieldErrors.email} />
            </div>

            <div>
              <label className="label" htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className={`input${fieldErrors.password ? ' border-terracotta' : ''}`}
                placeholder="Your password"
                value={form.password}
                onChange={handleChange}
              />
              <FieldError message={fieldErrors.password} />
            </div>

            <button
              type="submit"
              className="btn-primary w-full mt-2"
              disabled={loading}
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <p className="text-center text-sm mt-6" style={{ color: '#7A6A5A' }}>
            New here?{' '}
            <Link
              to="/signup"
              className="font-medium hover:underline"
              style={{ color: '#C4714A' }}
            >
              Create your account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}


export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');

      login(data.user);
      // Route based on onboarding status
      navigate(data.user.onboarded ? '/dashboard' : '/onboarding');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="font-heading text-3xl font-bold text-terracotta">
            Elio
          </Link>
          <p className="text-muted-text mt-2">Good to have you back.</p>
        </div>

        <div className="card">
          <h1 className="font-heading text-2xl font-semibold text-warm-brown mb-6">
            Sign in to your account
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="label" htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="label" htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input"
                placeholder="Your password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <ErrorMessage message={error} />

            <button type="submit" className="btn-primary w-full mt-2" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <p className="text-center text-sm text-muted-text mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-terracotta font-medium hover:underline">
              Create one for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
