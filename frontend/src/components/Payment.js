import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Payment = () => {
  const styles = {
    page: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f4f4',
    },
    infoContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      maxWidth: '600px',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formContainer: {
      width: '100%',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    formFloating: {
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      fontSize: '16px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '12px 16px',
      fontSize: '16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    link: {
      display: 'block',
      textAlign: 'center',
      marginTop: '20px',
      fontSize: '16px',
      color: '#007BFF',
      textDecoration: 'none',
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.page}>
        <div style={styles.infoContainer}>
          <div style={styles.formContainer}>
            <h2 style={styles.heading}>Payment</h2>
            <form>
              <div style={styles.formFloating}>
                <input
                  type="text"
                  id="cardholderName"
                  required
                  placeholder="John Doe"
                  style={styles.input}
                />
              </div>
              <div style={styles.formFloating}>
                <input
                  type="text"
                  id="cardNumber"
                  pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                  required
                  placeholder="1234-5678-9012-3456"
                  style={styles.input}
                />
              </div>
              <div style={styles.formFloating}>
                <input
                  type="text"
                  id="expirationDate"
                  pattern="(0[1-9]|1[0-2])/[0-9]{2}"
                  required
                  placeholder="MM/YY"
                  style={styles.input}
                />
              </div>
              <div style={styles.formFloating}>
                <input
                  type="number"
                  id="amount"
                  min="0.01"
                  step="0.01"
                  required
                  placeholder="100.00"
                  style={styles.input}
                />
              </div>
              <button type="submit" style={styles.button}>Pay Now</button>
            </form>
            <p style={styles.link}>
              <Link to="/">Go back to Home</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;