import React from 'react'
import './Style.css'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div className='wrapper'
    initial={{ x: '15vw', opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: '-100vw', opacity: 0 }}
    transition={{ type: 'tween', duration: 0.7 }}>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="email" placeholder='Email ID' required/>
                <i className="pi pi-envelope icon" style={{ fontSize: '1rem' }}></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <i className="pi pi-lock icon" style={{ fontSize: '1rem' }}></i>
            </div>
            <div className="remember-forget">
                <label><input type='checkbox' />Remember Me</label>
                <a href="/"><Link className="nav-link" to="/forgotpassword">Forget Password ?</Link></a>
            </div>
        <center><Button className='submit-btn' label="Login" /></center>
        <div className="register">
            <p>Don't have an Account? <a href="/"><Link className="nav-link" to="/signup">Register</Link></a></p>
        </div>
        </form>
    </motion.div>
  )
}

export default Login