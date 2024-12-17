import React, { useState } from 'react';
import './style.css';
import Navbar from '../components/Navbar';
import Footer from './Footer';

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    contact: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', formData);
    alert('Hotel Booking Successful!');
  };

  return (
    <>
      <Navbar />
      <div className="booking-container">
        <h1 className="booking-title">Hotel Booking Form</h1>
        <form onSubmit={handleSubmit} className="booking-form">
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Room Type:
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Room Type --</option>
              <option value="Single">Single Room</option>
              <option value="Double">Double Room</option>
              <option value="Suite">Suite</option>
            </select>
          </label>

          <label>
            Check-In Date:
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Check-Out Date:
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Number of Guests:
            <input
              type="number"
              name="guests"
              value={formData.guests}
              min="1"
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Contact Number:
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="submit-button">
            Book Now
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
