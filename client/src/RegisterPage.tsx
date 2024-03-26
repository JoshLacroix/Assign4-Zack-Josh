import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RegisterPage.css';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [genre, setGenre] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value);
  };

  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAgreed(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validation
    if (!email || !password || !confirmPassword || !genre || !termsAgreed) {
      toast.error('All fields are required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Invalid email format');
      return;
    }

    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      toast.error('Password must contain at least 8 characters, one special character, one lowercase letter, and one uppercase letter');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Success
    toast.success('Registration successful');
    // Reset form fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setGenre('');
    setTermsAgreed(false);
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input id="confirmPassword" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Favorite Movie Genre:</label>
          <select id="genre" value={genre} onChange={handleGenreChange}>
            <option value="">Select Genre</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Animation">Animation</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" checked={termsAgreed} onChange={handleTermsChange} />
            &nbsp; I agree to the terms and conditions
          </label>
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
      <Link to="/" className="back-to-login">I already have an account</Link> {/* Link to the login page */}
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
