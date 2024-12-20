import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img2 from '../imgs/img2.jpg';
import './style.css';
import Footer from './Footer';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.email.includes('@')) {
      formErrors.email = 'Invalid email format.';
    }

    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phonePattern.test(formData.phone)) {
      formErrors.phone = 'Phone must be in xxx-xxx-xxxx format.';
    }

    if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long.';
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert('Registration successful!');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className="page">
        <div className="left-section d-flex align-items-center justify-content-center">
          <div className="form-container p-4 border rounded shadow">
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  placeholder="xxx-xxx-xxxx"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              <button type="submit" className="btn btn-dark w-100">Register</button>
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