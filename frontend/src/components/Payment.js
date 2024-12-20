import React, { useState } from 'react';
import './style.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState(''); // Quản lý giá trị email
  const [message, setMessage] = useState(''); // Thông báo trạng thái

  // Hàm xử lý khi form được submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn reload trang

    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    // Giả sử gửi yêu cầu đến API
    console.log(`Sending password reset email to: ${email}`);
    setMessage('Password reset link has been sent to your email.');
    setEmail(''); // Reset trường input
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@domain.com"
          required
        />
        <button type="submit" className="btn">Reset Password</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
