import React from 'react'
import './Style.css'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Forgotpass = () => {
    return (
        <motion.div className='wrapper'
        initial={{ x: '0vw', opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100vw', opacity: 0 }}
        transition={{ type: 'tween', duration: 1 }}>
            <form action="">
                <h1>Forget Password</h1>
                <div className="input-box">
                    <input type="email" placeholder='Enter Recovery Email' required/>
                    <i className="pi pi-envelope icon" style={{ fontSize: '1rem' }}></i>
                </div>
            <center><Button className='submit-btn' label="Send OTP" /></center>
            <div className="register">
            <p>Back to Login Page? <a href="/"><Link className="nav-link" to="/">Go Back</Link></a></p>
        </div>
            </form>
        </motion.div>
      )
}

export default Forgotpass
