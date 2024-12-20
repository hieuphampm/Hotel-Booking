import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Payment = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-light">
        <div className="card p-4 shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
          <h2 className="text-center mb-4 text-dark">Payment</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="cardholderName" className="form-label">Cardholder Name</label>
              <input
                type="text"
                id="cardholderName"
                className="form-control"
                required
                placeholder="Peter"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                className="form-control"
                pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                required
                placeholder="1234-5678-9012-3456"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="expirationDate" className="form-label">Expiration Date</label>
              <input
                type="text"
                id="expirationDate"
                className="form-control"
                pattern="(0[1-9]|1[0-2])/[0-9]{2}"
                required
                placeholder="MM/YY"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="amount" className="form-label">Amount</label>
              <input
                type="number"
                id="amount"
                className="form-control"
                min="0.01"
                step="0.01"
                required
                placeholder="100.00"
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-dark w-50">Pay Now</button>
            </div>
          </form>

          <p className="text-center mt-3">
            <Link to="/" className="text-primary text-decoration-none">Go back to Home</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
