import React from 'react';
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import Footer from './Footer';
import './style.css';

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-container">
        
        <div className="about-us-header">
          <h1>About The Biggest Hotel</h1>
          <p>Your perfect getaway destination</p>
        </div>

        <div className="about-us-section">
          <h2>Our Story: The Need for The Biggest Hotel</h2>
          <p>
            In today's fast-paced world, people face increasing stress, fatigue, and burnout. Whether it's the pressure of 
            work, the chaos of city life, or the need to escape routine, many individuals struggle to find time and space 
            for relaxation. At <strong>The Biggest Hotel</strong>, we saw this need and envisioned a sanctuary where comfort and 
            tranquility meet.
          </p>
        </div>

        <div className="about-us-section">
          <h2>Why We Built The Biggest Hotel</h2>
          <p>
            Our journey began with a simple observation: the lack of affordable yet luxurious options for those seeking 
            peace and rejuvenation. Many hotels catered either to high-end luxury or bare-bones affordability, leaving 
            travelers with limited choices. We founded The Biggest Hotel with a mission to bridge this gap, offering an 
            extraordinary experience at a reasonable price.
          </p>
        </div>

        <div className="about-us-section">
          <h2>Challenges and How We Overcame Them</h2>
          <p>
            Starting The Biggest Hotel was not without its hurdles. From sourcing ideal locations surrounded by nature to 
            designing world-class facilities, we faced financial, logistical, and operational challenges. However, through 
            perseverance, teamwork, and a commitment to quality, we turned our vision into reality. Today, The Biggest Hotel
            stands as a testament to overcoming adversity with innovation and dedication.
          </p>
        </div>

        <div className="about-us-section">
          <h2>Our Achievements</h2>
          <p>
            Over the years, The Biggest Hotel has become a preferred destination for travelers worldwide. Some of our key 
            milestones include:
          </p>
          <ul>
            <li>Welcoming over <strong>50,000 guests</strong> since our grand opening.</li>
            <li>Receiving the <strong>"Top Luxury Retreat Award"</strong> in 2024.</li>
            <li>Expanding to <strong>three breathtaking locations</strong> across the country.</li>
          </ul>
        </div>

        <div className="about-us-section">
          <h2>Our Vision for the Future</h2>
          <p>
            Looking ahead, our mission remains steadfast: to create unforgettable experiences that nourish the mind, body, 
            and soul. We plan to expand to new destinations, integrate sustainable practices into our operations, and 
            continue setting new standards for hospitality. At The Biggest Hotel, we believe that everyone deserves a place 
            to pause, breathe, and reconnect with themselves and nature.
          </p>
        </div>

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
      <Footer />
    </div>
  );
};

export default AboutUs;
