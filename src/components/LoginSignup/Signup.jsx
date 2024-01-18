import React from 'react'
import './Style.css'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <motion.div className='wrapper'
    initial={{ x: '-20vw', opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: '100vw', opacity: 0 }}
    transition={{ type: 'tween', duration: 0.7 }}>
        <form action="">
            <h1>Sign Up</h1>
            <div className="input-box">
                <input type="text" placeholder='Name' required/>
                <i className="pi pi-user icon" style={{ fontSize: '1rem' }}></i>
            </div>
            <div className="input-box">
                <input type="email" placeholder='Email ID' required/>
                <i className="pi pi-envelope icon" style={{ fontSize: '1rem' }}></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <i className="pi pi-lock icon" style={{ fontSize: '1rem' }}></i>
            </div>
        <center><Button className='submit-btn' label="Sign Up" /></center>
        <div className="register">
            <p>Already have an Account? <a href="/"><Link className="nav-link" to="/">Login</Link></a></p>
        </div>
        </form>
    </motion.div>
  )
}

export default Signup
