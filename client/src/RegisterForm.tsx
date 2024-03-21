import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Optionally, you can clear the form fields after submission

    //1. validate email format    
    const regex = new RegExp(`password`)
    const regex2 = /abd/ //example
    const emailRegex = /[A-Za-z0-9_-]+@[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/
    const emailTest = emailRegex.test(email)
    console.log('emailtest', emailTest);

    //2. validate size of password/characters used 
    const passwordSizeRegex = /.{6,}/
    const passworldSpecCharRegex = /[^A-Za-z0-9]+/
    const passwordTest = passwordSizeRegex.test(password) && passworldSpecCharRegex.test(password)
    console.log('passwordtest', passwordTest);

    if (emailTest && passwordTest){
      //success
      toast('Register is a success')
      setEmail('');
      setPassword('');
    }
    else{
      //error
      toast.error('Error validating the password or email')
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            // type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default RegisterForm;