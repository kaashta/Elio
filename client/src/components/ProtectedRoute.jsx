// ProtectedRoute — redirects to /login if the user is not authenticated
// Shows nothing while the session is being verified (loading state)

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from './LoadingSpinner';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <LoadingSpinner message="Getting things ready…" />;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}
