import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';


const DeluxeRoom = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Submitted!');
  };

  return (
    <div className="deluxe-room-container">
      <Navbar />

      <div className="deluxe-room-content">
        <h1 className="room-title text-center">Deluxe Room</h1>

        <div className="room-details">
          <div className="room-image-wrapper">
            <img
              src="img10.jpg"
              alt="Deluxe Room"
              className="room-image"
            />
          </div>

          <div className="room-info">
            <div className="rating text-center">
              <h2>Rating: <span className="highlight">4.5/5</span></h2>
            </div>

            <div className="voucher">
              <h3 className="voucher-title">Special Offers</h3>
              <p className="voucher-info">10% off for bookings of 3 nights or more!</p>
            </div>

            <ul className="room-highlights text-center">
              <li>
                <span className="highlight">$150</span> per night
              </li>
              <li>Max Guests: <span className="highlight">2 Adults, 1 Child</span></li>
              <li>
                <span className="highlight">Available Rooms: 5</span>
              </li>
            </ul>

            <div className="availability">
              <h4>Availability:</h4>
              <p>Check-in: <span className="highlight">2:00 PM</span></p>
              <p>Check-out: <span className="highlight">11:00 AM</span></p>
            </div>
          </div>
        </div>

        <div className="location">
          <h3>Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.95592301531695!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779da1c42a44c5!2sDeluxe%20Hotel!5e!3m2!1sen!2sus!4v1675030608754"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        <div className="reviews text-center">
          <h3>Guest Reviews</h3>
          <ul>
            <li>
              <strong>Staff:</strong> 4.8/5
            </li>
            <li>
              <strong>Cleanliness:</strong> 4.9/5
            </li>
            <li>
              <strong>Comfort:</strong> 4.7/5
            </li>
            <li>
              <strong>Amenities:</strong> 4.6/5
            </li>
          </ul>
        </div>

        <div className="description text-center">
          <h3>Services and Features</h3>
          <ul>
            <li>Strong Wi-Fi</li>
            <li>Swimming Pool</li>
            <li>Non-smoking Rooms</li>
            <li>24/7 Room Service</li>
            <li>Gym and Spa</li>
          </ul>
        </div>

        <div className="booking-form">
          <h3>Book Now</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="check-in">Check-in Date</label>
              <input
                type="date"
                id="check-in"
                name="check-in"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="check-out">Check-out Date</label>
              <input
                type="date"
                id="check-out"
                name="check-out"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Booking
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DeluxeRoom;
