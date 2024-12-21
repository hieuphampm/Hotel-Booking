import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.svg"; 
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/">
            <img src={logo} alt="Serenity Hotel Logo" className="footer-logo" />
          </a>
        </div>

        <div className="footer-links">
          <Link to="/about-us" className="footer-link">About Us</Link>
          <Link to="/#room" className="footer-link">Rooms</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/gallery" className="footer-link">Gallery</Link>
        </div>

        <div className="footer-contact">
          <p>Phone: +84-085-186-189</p>
          <p>Email: contact@the_biggest_hotel.com</p>
          <p>Address: 123 Cat Lat Street</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;