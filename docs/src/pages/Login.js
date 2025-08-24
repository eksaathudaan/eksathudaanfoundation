import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>User Login</h1>
        <button className="google-btn">Continue with Google</button>
        <button className="phone-btn">Continue with Phone</button>
      </div>
    </div>
  );
};

export default Login;