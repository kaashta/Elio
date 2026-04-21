// Navbar — appears on every authenticated page
// Shows the Elio logo, nav links, and the current user's name

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  { to: '/dashboard', label: 'Home' },
  { to: '/learn', label: 'Learn' },
  { to: '/community', label: 'Community' },
  { to: '/opportunities', label: 'Opportunities' },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="bg-off-white border-b border-sand sticky top-0 z-50 shadow-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/dashboard" className="font-heading text-2xl font-bold text-terracotta tracking-tight">
          Elio
        </Link>

        {/* Nav links — hidden on mobile, visible on md+ */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`tab ${pathname.startsWith(to) ? 'tab-active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* User + logout */}
        <div className="flex items-center gap-3">
          {user?.photo ? (
            <img
              src={`/uploads/${user.photo}`}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover border-2 border-sand"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-warm-brown text-sm font-semibold">
              {user?.name?.[0] || '?'}
            </div>
          )}
          <span className="hidden sm:block text-sm text-muted-text">{user?.name}</span>
          <button onClick={handleLogout} className="btn-ghost text-sm">
            Sign out
          </button>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="md:hidden flex border-t border-sand">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex-1 text-center py-2 text-xs font-medium transition-colors duration-150
              ${pathname.startsWith(to) ? 'text-terracotta bg-cream' : 'text-muted-text'}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
