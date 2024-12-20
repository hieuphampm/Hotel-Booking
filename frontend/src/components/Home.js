import React from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import Room from './Room';
import './style.css';
import img7 from '../imgs/img7.jpg'
import Services from './Services';

const Home = () => {
  return (
    <div className="page-container">
      <Navbar />

      <div className="banner position-relative text-center text-white">
        <img
          src={img7}
          className="img-fluid w-100"
          alt="Luxury Hotel"
          style={{ height: '900px', objectFit: 'cover' }}
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="display-4 fw-bold"
            style={{ color: '#40E0D0' }}
            >Welcome to The Biggest Hotel</h1>
          
          <a href="#services-section" className="btn btn-dark mt-3 w-50">
            Discover More
          </a>
        </div>
      </div>

      <div id="services-section" className="services py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <Services />
        </div>
      </div>
      
      <div className='discover_room'>
        <h2 className="text-center mb-4">Discover Us Room</h2>
        <Room />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
