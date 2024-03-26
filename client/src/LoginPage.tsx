import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import CSS for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2> {/* Login text placed outside the form */}
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <Link to="/register" className="register-link">Register here</Link> {/* Link to the registration page */}
    </div>
  );
};

export default LoginPage;
