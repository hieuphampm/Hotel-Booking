import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../imgs/img1.jpg';
import './style.css';
import Navbar from './Navbar';
import Footer from './Footer';

const LogIn = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="left-section d-flex align-items-center justify-content-center">
          <div className="form-container p-4 border rounded shadow">
            <h2 className="text-center mb-4">Welcome Back</h2>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Example@email.com"
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
              <div className="mb-3 text-end">
                <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <p className="text-center mt-3">
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>

        <div className="right-section">
          <img src={img1} alt="Decoration" className="img-cover" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LogIn;
