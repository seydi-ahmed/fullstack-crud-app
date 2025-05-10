// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/auth.service';

export default function Navbar() {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <nav>
      {user ? (
        <>
          <Link to="/products">Products</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}