import React, { useState, useEffect } from 'react';
import './style.css';
import img3 from '../imgs/img3.jpg';
import img4 from '../imgs/img4.jpg';
import img5 from '../imgs/img5.jpg';
import img6 from '../imgs/img6.jpg';
import img7 from '../imgs/img7.jpg';
import Footer from './Footer';

const hotels = [
  {
    image: img3,
    name: "The Biggest Hotel Resort",
    location: "Phu Quoc, Vietnam",
    price: "4,800,000 VND/night",
    rating: "4.8/5",
    description: "A modern resort with a private beach and premium facilities.",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Restaurant", "Spa Service"],
    contact: "Hotline: +84 123 456 789",
  },
  {
    image: img4,
    name: "Sunrise The Biggest Hotel",
    location: "Nha Trang, Vietnam",
    price: "3,600,000 VND/night",
    rating: "4.5/5",
    description: "Beachfront villa with stunning sunset views.",
    amenities: ["Free Parking", "Near the Beach", "Free Breakfast"],
    contact: "Hotline: +84 987 654 321",
  },
  {
    image: img5,
    name: "The Biggest Hotel Mountain Retreat",
    location: "Da Lat, Vietnam",
    price: "2,880,000 VND/night",
    rating: "4.2/5",
    description:
      "Nestled in nature with a peaceful atmosphere, an ideal place to chill.",
    amenities: ["Quiet Space", "Beautiful Mountain Views", "Free Bicycles"],
    contact: "Hotline: +84 456 123 789",
  },
  {
    image: img6,
    name: "The Biggest Hotel",
    location: "Hanoi, Vietnam",
    price: "4,320,000 VND/night",
    rating: "4.7/5",
    description:
      "A luxurious hotel in the heart of the capital city.",
    amenities: ["Near Old Quarter", "Gym", "International Restaurant"],
    contact: "Hotline: +84 123 789 456",
  },
  {
    image: img7,
    name: "The Biggest Hotel Ocean Paradise",
    location: "Hanoi, Vietnam",
    price: "5,280,000 VND/night",
    rating: "4.9/5",
    description:
      "A beachfront hotel with a million-dollar view of Ha Long Bay.",
    amenities: ["Private Yacht", "Rooftop Bar", "Infinity Pool"],
    contact: "Hotline: +84 789 456 123",
  },
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotels.length);
    }, 3000); // 3000ms = 3 giây
    return () => clearInterval(interval);
  }, []);

  const showImage = (index) => {
    if (index < 0) {
      setCurrentImageIndex(hotels.length - 1);
    } else if (index >= hotels.length) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(index);
    }
  };

  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <div className="gallery-container">
        <h1 className="gallery-title">Serenity Hotel Gallery</h1>
        <div className="gallery">
          <button className="prev" onClick={() => showImage(currentImageIndex - 1)}>
            ◁
          </button>
          <div className="image-container">
            <img
              id="galleryImage"
              src={hotels[currentImageIndex].image}
              alt={hotels[currentImageIndex].name}
            />
          </div>
          <button className="next" onClick={() => showImage(currentImageIndex + 1)}>
            ▷
          </button>
        </div>
        <div className="details">
          <h2>{hotels[currentImageIndex].name}</h2>
          <p><strong>Location:</strong> {hotels[currentImageIndex].location}</p>
          <p><strong>Price:</strong> {hotels[currentImageIndex].price}</p>
          <p><strong>Rating:</strong> {hotels[currentImageIndex].rating}</p>
          <p><strong>Description:</strong> {hotels[currentImageIndex].description}</p>
          <p><strong>Amenities:</strong> {hotels[currentImageIndex].amenities.join(", ")}</p>
          <p><strong>Contact:</strong> {hotels[currentImageIndex].contact}</p>
        </div>
        <div className="thumbnail-container">
          {hotels.map((hotel, index) => (
            <img
              key={index}
              className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              src={hotel.image}
              alt={`Thumbnail for ${hotel.name}`}
              onClick={() => changeImage(index)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
