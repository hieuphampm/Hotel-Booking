import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../style.css";
import img10 from "../../imgs/img10.jpg";
import img11 from "../../imgs/img11.jpg";
import img12 from "../../imgs/img12.jpg";
import img13 from "../../imgs/img13.jpg";

const DeluxeRoom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Submitted! Name: ${name}`);
  };

  return (
    <div className="container-fluid p-0">
      <Navbar />

      {/* Hero Section */}
      <div
        className="text-white text-center py-5"
        style={{
          background: `url(${img10}) center/cover no-repeat`,
          height: "50vh",
          position: "relative",
        }}
      >
        <div
          className="h-100 d-flex flex-column justify-content-center align-items-center"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="display-4 fw-bold">Deluxe Room</h1>
          <p className="lead mb-0">Perfect for large groups and families</p>
        </div>
      </div>

      {/* Room Details */}
      <section className="my-5 container">
        <div className="row align-items-center">
          {/* Image Carousel */}
          <div className="col-md-6">
            <div id="dormCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#dormCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#dormCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#dormCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img11} className="d-block w-100" alt="Deluxe Rooms view 1" />
                </div>
                <div className="carousel-item">
                  <img src={img12} className="d-block w-100" alt="Deluxe Rooms view 2" />
                </div>
                <div className="carousel-item">
                  <img src={img13} className="d-block w-100" alt="Deluxe Rooms view 3" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#dormCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#dormCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </div>
          </div>

          {/* Room Info */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">Deluxe Room</h2>
            <p className="text-muted">
              Our spacious Deluxe room is ideal for groups, students, and families looking
              for a budget-friendly, fun, and comfortable stay.
            </p>
            <ul className="list-unstyled">
              <li>
                <strong>Price:</strong> $100 per night/person
              </li>
              <li>
                <strong>Max Guests:</strong> 4 people
              </li>
              <li>
                <strong>Check-in:</strong> 1:00 PM
              </li>
              <li>
                <strong>Check-out:</strong> 12:00 AM
              </li>
              <li>
                <strong>Amenities:</strong> Shared kitchen, lounge area, high-speed Wi-Fi
              </li>
              <li>
                <strong>Room Service:</strong> On demand
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-light py-5">
        <div className="container">
          <h3 className="text-center fw-bold mb-4">Book Your Stay</h3>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="check-in" className="form-label">
                Check-in Date
              </label>
              <input
                type="date"
                id="check-in"
                className="form-control"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="check-out" className="form-label">
                Check-out Date
              </label>
              <input
                type="date"
                id="check-out"
                className="form-control"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="guests" className="form-label">
                Number of Guests
              </label>
              <input
                type="number"
                id="guests"
                className="form-control"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="10"
                required
              />
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary btn-lg">
                Submit Booking
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeluxeRoom;
