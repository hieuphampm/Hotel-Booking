import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Navbar from './Navbar';

const Payment = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="info-container">
          <div className="form-container">
            <h2>Payment</h2>
            <form>
              <div className="form-floating">
                <input
                  type="text"
                  id="cardholderName"
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  id="cardNumber"
                  pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                  required
                  placeholder="1234-5678-9012-3456"
                />
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  id="expirationDate"
                  pattern="(0[1-9]|1[0-2])/[0-9]{2}"
                  required
                  placeholder="MM/YY"
                />
              </div>
              <div className="form-floating">
                <input
                  type="number"
                  id="amount"
                  min="0.01"
                  step="0.01"
                  required
                  placeholder="100.00"
                />
              </div>
              <button type="submit" className="btn">Pay Now</button>
            </form>
            <p className="link">
              <Link to="/">Go back to Home</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
