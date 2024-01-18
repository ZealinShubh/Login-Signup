import React, { useState } from 'react';
import './Style.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form (you can add your logic here)
      console.log('Form submitted:', formData);
    }
  };

  return (
    <motion.div
      className='wrapper'
      initial={{ x: '15vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100vw', opacity: 0 }}
      transition={{ type: 'tween', duration: 0.7 }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='input-box'>
          <input
            type='email'
            name='email'
            placeholder='Email ID'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <i className='pi pi-envelope icon' style={{ fontSize: '1rem' }}></i>
          {errors.email && <span className='error'>{errors.email}</span>}
        </div>
        <div className='input-box'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <i className='pi pi-lock icon' style={{ fontSize: '1rem' }}></i>
          {errors.password && <span className='error'>{errors.password}</span>}
        </div>
        <div className='remember-forget'>
          <label>
            <input type='checkbox' />
            Remember Me
          </label>
          <Link className='nav-link' to='/forgotpassword'>
            Forget Password ?
          </Link>
        </div>
        <center>
          <Button className='submit-btn' label='Login' />
        </center>
        <div className='register'>
          <p>
            Don't have an Account?{' '}
            <Link className='nav-link' to='/signup'>
              Register
            </Link>
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default Login;
