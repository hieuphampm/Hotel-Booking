import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Payment = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="info-container">
          <div className="form-container">
            <h2>Payment</h2>
            <div className="form-floating">
              <label htmlFor="cardholderName">Cardholder Name</label>
              <input type="text" id="cardholderName" placeholder="John Doe" />
            </div>
            <div className="form-floating">
              <label htmlFor="cardNumber">Card Number</label>
              <input type="text" id="cardNumber" placeholder="xxxx-xxxx-xxxx-xxxx" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" />
            </div>
            <div className="form-floating">
              <label htmlFor="expirationDate">Expiration Date</label>
              <input type="text" id="expirationDate" placeholder="MM/YY" pattern="(0[1-9]|1[0-2])/[0-9]{2}" />
            </div>
            <div className="form-floating">
              <label htmlFor="amount">Amount</label>
              <input type="number" id="amount" placeholder="$0.00" />
            </div>
            <button type="submit" className="btn">Pay Now</button>
            <p className="link">
              <Link to="/">Go back to Home</Link>
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src="../imgs/payment.jpg" alt="Payment" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
