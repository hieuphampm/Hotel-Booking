import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../imgs/img1.jpg';
import './style.css';
import Navbar from './Navbar';
import Footer from './Footer';

const API_URL = process.env.REACT_APP_API_URL ;

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      localStorage.setItem('token', data.token);
      alert('Login successful!');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="page">
        <div className="left-section d-flex align-items-center justify-content-center">
          <div className="form-container p-4 border rounded shadow">
            <h2 className="text-center mb-4">Welcome Back</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 text-end">
                <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
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
