import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        console.log('Login successful. Token:', token);
        localStorage.setItem('token', token);
        window.location.href = '/movies';
      } else {
        console.error('Login failed');
        const errorData = await response.json();
        toast.error('The email or password is wrong')
        console.error('Error:', errorData.error);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('The email or password is wrong')
    }

    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <Link to="/register" className="register-link">Register here</Link>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
