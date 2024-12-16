import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import Room from './Room';
import './style.css'; 

const Home = () => {
  useEffect(() => {
    if (window.location.hash === '#room') {
      document.getElementById('room').scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      <main className="content">
        <h1>Welcome to Serenity Hotel</h1>
        <p>Your gateway to luxury and relaxation.</p>
      </main>
      <div id="room">
        <Room />
      </div>
      <Footer />
    </div>
  );
};

export default Home;