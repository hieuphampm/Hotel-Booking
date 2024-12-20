import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }
    console.log(`Sending password reset email to: ${email}`);
    setMessage('Password reset link has been sent to your email.');
    setStep(2);
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (!verificationCode || verificationCode.length !== 6) {
      setMessage('Please enter the 6-digit code sent to your email.');
      return;
    }
    console.log(`Verifying code: ${verificationCode}`);
    setMessage('Verification successful. Please set your new password.');
    setStep(3); 
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      setMessage('Password must be at least 6 characters long.');
      return;
    }
    console.log(`Setting new password for email: ${email}`);
    setMessage('Password reset successful! You can now log in with your new password.');
    setStep(1);
    setTimeout(() => {
      navigate('/log-in');
    }, 2000);
  };

  return (
    <div id="root">
      <div className="container mt-5 d-flex align-items-center justify-content-center">
        <div className="card mx-auto p-4 shadow" style={{ maxWidth: '400px' }}>
          <h1 className="text-center mb-4">Forgot Password</h1>
          
          {step === 1 && (
            <form onSubmit={handleEmailSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Enter your email address:</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@domain.com"
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">Send Reset Email</button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleCodeSubmit}>
              <div className="mb-3">
                <label htmlFor="verificationCode" className="form-label">Enter the 6-digit code:</label>
                <input
                  type="text"
                  id="verificationCode"
                  className="form-control"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Enter code"
                  maxLength="6"
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">Verify Code</button>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handlePasswordSubmit}>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">Enter your new password:</label>
                <input
                  type="password"
                  id="newPassword"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-dark w-100">Reset Password</button>
            </form>
          )}

          {message && <p className="text-success mt-3 text-center">{message}</p>}
        </div> 
      </div>
    </div>
  );
};

export default ForgotPassword;