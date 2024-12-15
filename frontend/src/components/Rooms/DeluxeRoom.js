import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import '../style.css';
import img11 from "../../imgs/img11.jpg";
import img12 from "../../imgs/img12.jpg";
import img13 from "../../imgs/img13.jpg";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const DeluxeRoom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Submitted!");
  };

  return (
    <div className="container-fluid p-0">
      <Navbar />

      <div
        className="text-white text-center py-5"
        style={{
          background: `url(${img11}) center/cover no-repeat`,
          height: "50vh",
          position: "relative",
        }}
      >
        <div
          className="h-100 d-flex flex-column justify-content-center align-items-center"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <h1 className="display-4 fw-bold">Deluxe Room</h1>
          <p className="lead mb-4">Experience luxury at its finest</p>
        </div>
      </div>

      <section className="my-5 container">
        <div className="row">
          <div className="col-md-6">
            {/* Carousel with indicators */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={img11} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={img12} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={img13} alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div className="col-md-4 ms-auto ps-4">
            <h2 className="fw-bold mb-3">Special Offers</h2>
            <p className="text-muted">10% off for bookings of 3 nights or more!</p>
            <ul className="list-unstyled">
              <li><strong>Price:</strong> $150 per night</li>
              <li><strong>Max Guests:</strong> 2 Adults, 1 Child</li>
              <li><strong>Check-in:</strong> 2:00 PM</li>
              <li><strong>Check-out:</strong> 11:00 AM</li>
              <li><strong>Room Size:</strong> 30 m²</li>
              <li><strong>Bed Type:</strong> King-size bed</li>
              <li><strong>Amenities:</strong> Smart TV, Mini Bar, Coffee Machine</li>
              <li><strong>View:</strong> Ocean view</li>
              <li><strong>Free Wi-Fi:</strong> Included</li>
              <li><strong>Room Service:</strong> Available 24/7</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="booking-section" className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center fw-bold mb-4">Book Your Stay</h3>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Full Name</label>
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
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="invalid-feedback">Please enter a valid email address.</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="check-in" className="form-label">Check-in Date</label>
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
              <label htmlFor="check-out" className="form-label">Check-out Date</label>
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
              <label htmlFor="guests" className="form-label">Guests</label>
              <input
                type="number"
                id="guests"
                className="form-control"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
                min="1"
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

      <section className="container my-5">
        <h3 className="text-center fw-bold mb-4">What Our Guests Say</h3>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <p>"The Deluxe Room was simply amazing! Highly recommend to everyone."</p>
              <h5>Peter Bao</h5>
            </div>
            <div className="carousel-item text-center">
              <p>"Fantastic amenities and wonderful staff. Best stay ever!"</p>
              <h5>Khoa</h5>
            </div>
            <div className="carousel-item text-center">
              <p>"Everything was perfect, from check-in to check-out. A++ service."</p>
              <h5>Hieu Pahm</h5>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      <section className="container my-5">
        <h3 className="text-center fw-bold mb-4">Guest Reviews</h3>
        <div className="row">
          <div className="col-md-3 text-center">
            <p>Staff</p>
            <h5>4.8/5</h5>
          </div>
          <div className="col-md-3 text-center">
            <p>Cleanliness</p>
            <h5>4.9/5</h5>
          </div>
          <div className="col-md-3 text-center">
            <p>Comfort</p>
            <h5>4.7/5</h5>
          </div>
          <div className="col-md-3 text-center">
            <p>Amenities</p>
            <h5>4.6/5</h5>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeluxeRoom;
