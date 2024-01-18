import React, { useState, useEffect } from "react";
import "./Style.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
    let isValid = true;
    const newFormErrors = { ...formErrors };

    // Validate name
    if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newFormErrors.name = "⚠ Name should only contain characters";
      isValid = false;
    } else {
      newFormErrors.name = "";
    }


    if (formData.email.trim() === "") {
      newFormErrors.email = "⚠ Email is required";
      isValid = false;
    } else {
      newFormErrors.email = "";
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newFormErrors.email = "⚠ Invalid email address";
      isValid = false;
    } else {
      newFormErrors.email = "";
    }

    
    if (formData.password.length < 8) {
        newFormErrors.password = "⚠ Password must be at least 8 characters long";
        isValid = false;
    } else if (!uppercaseRegex.test(formData.password)) {
        newFormErrors.password = "⚠ Password must contain at least 1 uppercase character";
        isValid = false;
    } else if (!lowercaseRegex.test(formData.password)) {
        newFormErrors.password = "⚠ Password must contain at least 1 lowercase character";
        isValid = false;
    } else if (!numberRegex.test(formData.password)) {
        newFormErrors.password = "⚠ Password must contain at least 1 number";
        isValid = false;
    } else if (!specialCharRegex.test(formData.password)) {
        newFormErrors.password = "⚠ Password must contain at least 1 special character";
        isValid = false;
    }else {
       newFormErrors.password = '';
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
      setFormErrors({ name: "" }); // Set the error message to an empty string after 2 seconds
    }, 2400);

    // Clear the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timeoutId);
  }, [formErrors.name]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFormErrors({ password: "" }); // Set the error message to an empty string after 2 seconds
    }, 2400);

    // Clear the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timeoutId);
  }, [formErrors.password]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFormErrors({ email: "" }); // Set the error message to an empty string after 2 seconds
    }, 2400);

    // Clear the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timeoutId);
  }, [formErrors.email]);
  return (
    <motion.div
      className="wrapper"
      initial={{ x: "-20vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100vw", opacity: 0 }}
      transition={{ type: "tween", duration: 0.7 }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <i className="pi pi-user icon" style={{ fontSize: "1rem" }}></i>
        </div>
        <center>
          <div className="errordisplay">{formErrors.name}</div>
        </center>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email ID"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <i className="pi pi-envelope icon" style={{ fontSize: "1rem" }}></i>
        </div>
        <center>
          <div className="errordisplay">{formErrors.email}</div>
        </center>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <i className="pi pi-lock icon" style={{ fontSize: "1rem" }}></i>
        </div>
        <center>
          <div className="errordisplay">{formErrors.password}</div>
        </center>
        <center>
          <Button type="submit" className="submit-btn" label="Sign Up" />
        </center>
        <div className="register">
          <p>
            Already have an Account?{" "}
            <a href="/">
              <Link className="nav-link" to="/">
                Login
              </Link>
            </a>
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default Signup;
