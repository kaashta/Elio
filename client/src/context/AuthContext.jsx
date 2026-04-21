// Auth context — provides the current user to all components
// and exposes login / logout / updateUser helpers

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // true while we verify the session

  // On mount, ask the server if we have a valid cookie session
  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.user) setUser(data.user);
      })
      .catch(() => {}) // silently fail — user just isn't logged in
      .finally(() => setLoading(false));
  }, []);

  // Called after a successful login or signup response
  const login = (userData) => setUser(userData);

  // Called after the logout endpoint clears the cookie
  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    setUser(null);
  };

  // Merge partial updates into the current user object (e.g. after onboarding)
  const updateUser = (partial) => setUser((prev) => ({ ...prev, ...partial }));

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook — use this in every component that needs the current user
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
