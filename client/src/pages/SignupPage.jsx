// SignupPage — registration form with inline validation
// Fields: full name, email, password, confirm password
// On success, redirects to /onboarding

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function FieldError({ message }) {
  if (!message) return null;
  return <p className="text-xs mt-1" style={{ color: '#C4714A' }}>{message}</p>;
}

export default function SignupPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!form.email.trim()) errs.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "That doesn't look like a valid email address.";
    if (!form.password) errs.password = 'Please choose a password.';
    else if (form.password.length < 8) errs.password = 'Password must be at least 8 characters.';
    if (!form.confirm) errs.confirm = 'Please confirm your password.';
    else if (form.password !== form.confirm) errs.confirm = "Passwords don't match.";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const errs = validate();
    if (Object.keys(errs).length) { setFieldErrors(errs); return; }
    setLoading(true);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Signup failed. Please try again.');

      login(data.user);
      navigate('/onboarding');
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
            Create your account — it only takes a minute.
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
            Welcome — let’s get started
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
              <label className="label" htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className={`input${fieldErrors.name ? ' border-terracotta' : ''}`}
                placeholder="e.g. Sarah Ahmed"
                value={form.name}
                onChange={handleChange}
              />
              <FieldError message={fieldErrors.name} />
            </div>

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
                autoComplete="new-password"
                className={`input${fieldErrors.password ? ' border-terracotta' : ''}`}
                placeholder="At least 8 characters"
                value={form.password}
                onChange={handleChange}
              />
              <FieldError message={fieldErrors.password} />
            </div>

            <div>
              <label className="label" htmlFor="confirm">Confirm password</label>
              <input
                id="confirm"
                name="confirm"
                type="password"
                autoComplete="new-password"
                className={`input${fieldErrors.confirm ? ' border-terracotta' : ''}`}
                placeholder="Type your password again"
                value={form.confirm}
                onChange={handleChange}
              />
              <FieldError message={fieldErrors.confirm} />
            </div>

            <button
              type="submit"
              className="btn-primary w-full mt-2"
              disabled={loading}
            >
              {loading ? 'Creating your account…' : 'Create my account'}
            </button>
          </form>

          <p className="text-center text-sm mt-6" style={{ color: '#7A6A5A' }}>
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium hover:underline"
              style={{ color: '#C4714A' }}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
