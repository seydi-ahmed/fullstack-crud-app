// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/auth.service';

export default function PrivateRoute({ children }) {
  return authService.getCurrentUser() ? children : <Navigate to="/login" />;
}