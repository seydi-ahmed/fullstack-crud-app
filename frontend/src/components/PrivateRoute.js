import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const PrivateRoute = ({ children }) => {
  const currentUser = AuthService.getCurrentUser();
  return currentUser ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;