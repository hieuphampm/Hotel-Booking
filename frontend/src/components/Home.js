import React from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import Room from './Room';
import './style.css'; 

const Home = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="content">
        {/* Add main content here */}
        <h1>Welcome to Serenity Hotel</h1>
        <p>Your gateway to luxury and relaxation.</p>
      </main>
      <Room />
      <Footer />
    </div>
  );
};

export default Home;
