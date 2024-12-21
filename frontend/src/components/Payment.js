import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Payment = () => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false); // State to handle success message
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate payment process
    setPaymentSuccessful(true);

    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <>
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-light">
        <div className="card p-4 shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
          {!paymentSuccessful ? (
            <>
              <h2 className="text-center mb-4 text-dark">Payment</h2>
              <form onSubmit={handleSubmit}>
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
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-success">Payment Successful!</h2>
              <p className="text-secondary">Redirecting to the home page...</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
