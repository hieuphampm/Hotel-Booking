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
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      {step === 1 && (
        <form onSubmit={handleEmailSubmit}>
          <label htmlFor="email">Enter your email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@domain.com"
            required
          />
          <button type="submit" className="btn">Send Reset Email</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleCodeSubmit}>
          <label htmlFor="verificationCode">Enter the 6-digit code:</label>
          <input
            type="text"
            id="verificationCode"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter code"
            maxLength="6"
            required
          />
          <button type="submit" className="btn">Verify Code</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handlePasswordSubmit}>
          <label htmlFor="newPassword">Enter your new password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            required
          />
          <button type="submit" className="btn">Reset Password</button>
        </form>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;