import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: "auto" }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" className="navbar-logo" />
        </a>

        <div className="footer-links">
          <Link to="/about-us" className="footer-link">About Us</Link>
          <Link to="/#room" className="footer-link">Rooms</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/gallery" className="footer-link">Gallery</Link>
        </div>

        <div className="ml-auto">
          {!isLoggedIn && (
            <Link to="/log-in" className="btn btn-outline-light login-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;