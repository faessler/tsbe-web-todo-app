import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthContext from './useAuthContext';

const RequireAuth = ({ children }) => {
  const auth = useAuthContext();
  const location = useLocation();

  if (!auth.token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
