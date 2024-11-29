import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../imgs/img2.jpg';
import './style.css';
import Navbar from './Navbar';

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="info-container">
          <div className="form-container">
            <h2>Register</h2>
            <div className="form-floating">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" placeholder="name@example.com" />
            </div>
            <div className="form-floating">
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            </div>
            <div className="form-floating">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn">Register</button>
            <p className="link">
              Have an account? 
                <Link to="/log-in"> Login here!</Link>
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src={img2} alt="Cover" />
        </div>
      </div>
    </>
  );
};

export default Register;