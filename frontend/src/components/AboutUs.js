import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import './style.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Serenity Hotel</h1>
        <p>Your perfect getaway destination</p>
      </div>
      <div className="about-us-content">
        <p>
          Welcome to Serenity Hotel, where luxury meets comfort. Nestled in the heart of breathtaking landscapes,
          Serenity Hotel offers an unparalleled experience of relaxation and adventure. From exquisite dining to
          state-of-the-art facilities, we strive to provide the best for our guests.
        </p>
        <p>
          Our mission is to create memorable stays with exceptional hospitality. Whether you are here for leisure or
          business, Serenity Hotel is your home away from home.
        </p>
      </div>
      <div className="about-us-footer">
        <p>Follow us on social media:</p>
        <Link to="https://facebook.com/serenityhotel" target="_blank" className="social-link">
          <Icon icon={facebook} size={24} /> Facebook
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;