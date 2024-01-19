import React, { useState,useEffect } from 'react'
import './Style.css'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Forgotpass = () => {
    const [formData, setFormData] = useState({
        email: "",
      });
    
      const [formErrors, setFormErrors] = useState({});

      const validateForm = () => {
        let isValid = true;
        const newFormErrors = { ...formErrors };
    
        // Validate email
        if (formData.email.trim() === '') {
          newFormErrors.email = 'Email is required';
          isValid = false;
        } else {
          newFormErrors.email = '';
        }
    
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newFormErrors.email = '⚠ Invalid email address';
          isValid = false;
        } else {
          newFormErrors.email = '';
        }
    
        // Update the formErrors state
        setFormErrors(newFormErrors);
    
        return isValid;
      };
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation before submitting the form
        if (validateForm()) {
          // Submit the form data
          console.log("Form submitted:", formData);
        } else {
          console.log("Form validation failed");
        }
      };

      useEffect(() => {
        const timeoutId = setTimeout(() => {
          setFormErrors({ email: "" }); // Set the error message to an empty string after 2 seconds
        }, 2400);
    
        // Clear the timeout if the component unmounts before the timeout completes
        return () => clearTimeout(timeoutId);
      }, [formErrors.email]);

    return (
        <motion.div className='wrapper'
        initial={{ x: '0vw', opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100vw', opacity: 0 }}
        transition={{ type: 'tween', duration: 1 }}>
            <form onSubmit={handleSubmit}>
                <h1>Forget Password</h1>
                <div className="input-box">
                    <input type="email" placeholder='Enter Recovery Email' name="email" value={formData.email} onChange={handleInputChange} required/>
                    <i className="pi pi-envelope icon" style={{ fontSize: '1rem' }}></i>
                </div>
                <center>
                    <div className="errordisplay">{formErrors.email}</div>
                </center>
            <center><Button className='submit-btn' label="Send OTP" /></center>
            <div className="register">
            <p>Back to Login Page? <a href="/"><Link className="nav-link" to="/">Go Back</Link></a></p>
        </div>
            </form>
        </motion.div>
      )
}

export default Forgotpass
