import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../imgs/img2.jpg';
import './style.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="left-section d-flex align-items-center justify-content-center">
          <div className="form-container p-4 border rounded shadow">
            <h2 className="text-center mb-4">Register</h2>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  placeholder="xxx-xxx-xxxx"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
            <p className="text-center mt-3">
              Have an account? <Link to="/log-in">Login here!</Link>
            </p>
          </div>
        </div>

        <div className="right-section">
          <img src={img2} alt="Cover" className="img-cover" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
