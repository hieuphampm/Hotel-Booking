import React from 'react';
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import './style.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Header */}
      <div className="about-us-header">
        <h1>About Serenity Hotel</h1>
        <p>Your perfect getaway destination</p>
      </div>

      {/* Introduction */}
      <div className="about-us-section">
        <h2>Our Story: The Need for Serenity</h2>
        <p>
          In today's fast-paced world, people face increasing stress, fatigue, and burnout. Whether it's the pressure of 
          work, the chaos of city life, or the need to escape routine, many individuals struggle to find time and space 
          for relaxation. At <strong>Serenity Hotel</strong>, we saw this need and envisioned a sanctuary where comfort and 
          tranquility meet.
        </p>
      </div>

      {/* Problem and Inspiration */}
      <div className="about-us-section">
        <h2>Why We Built Serenity Hotel</h2>
        <p>
          Our journey began with a simple observation: the lack of affordable yet luxurious options for those seeking 
          peace and rejuvenation. Many hotels catered either to high-end luxury or bare-bones affordability, leaving 
          travelers with limited choices. We founded Serenity Hotel with a mission to bridge this gap, offering an 
          extraordinary experience at a reasonable price.
        </p>
      </div>

      {/* Challenges and Solutions */}
      <div className="about-us-section">
        <h2>Challenges and How We Overcame Them</h2>
        <p>
          Starting Serenity Hotel was not without its hurdles. From sourcing ideal locations surrounded by nature to 
          designing world-class facilities, we faced financial, logistical, and operational challenges. However, through 
          perseverance, teamwork, and a commitment to quality, we turned our vision into reality. Today, Serenity Hotel 
          stands as a testament to overcoming adversity with innovation and dedication.
        </p>
      </div>

      {/* Achievements */}
      <div className="about-us-section">
        <h2>Our Achievements</h2>
        <p>
          Over the years, Serenity Hotel has become a preferred destination for travelers worldwide. Some of our key 
          milestones include:
        </p>
        <ul>
          <li>Welcoming over <strong>50,000 guests</strong> since our grand opening.</li>
          <li>Receiving the <strong>"Top Luxury Retreat Award"</strong> in 2023.</li>
          <li>Expanding to <strong>three breathtaking locations</strong> across the country.</li>
        </ul>
      </div>

      {/* Vision and Future */}
      <div className="about-us-section">
        <h2>Our Vision for the Future</h2>
        <p>
          Looking ahead, our mission remains steadfast: to create unforgettable experiences that nourish the mind, body, 
          and soul. We plan to expand to new destinations, integrate sustainable practices into our operations, and 
          continue setting new standards for hospitality. At Serenity Hotel, we believe that everyone deserves a place 
          to pause, breathe, and reconnect with themselves and nature.
        </p>
      </div>

      {/* Footer */}
      <div className="about-us-footer">
        <p>Follow us on social media:</p>
        <a
          href="https://www.facebook.com/thaibao.vo.56211"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Icon icon={facebook} size={24} /> Facebook
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
