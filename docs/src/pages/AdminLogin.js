
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        // Decode token to check role (simplified for now, proper role check needed)
        // For this MVP, we are using a hardcoded admin login in backend
        // In a real app, the token would contain user role
        // For now, we assume successful login with admin credentials means admin role
        navigate('/admin/dashboard');
      } else {
        setMessage(data.msg || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Server error');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Admin Login</h1>
        <form className="admin-login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {message && <p className="profile-message error">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
