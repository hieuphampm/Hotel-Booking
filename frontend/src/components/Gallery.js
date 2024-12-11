import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import './style.css';

const images = [
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showImage = (index) => {
    if (index < 0) {
      setCurrentImageIndex(images.length - 1);
    } else if (index >= images.length) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(index);
    }
  };

  const changeImage = (image) => {
    setCurrentImageIndex(images.indexOf(image));
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Serenity Hotel Gallery</h1>
      <div className="gallery">
        <button className="prev" onClick={() => showImage(currentImageIndex - 1)}>
          ◁
        </button>
        <div className="image-container">
          <img id="galleryImage" src={images[currentImageIndex]} alt="Gallery" />
        </div>
        <button className="next" onClick={() => showImage(currentImageIndex + 1)}>
          ▷
        </button>
      </div>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            className="thumbnail"
            src={image}
            alt={`Thumbnail for ${image}`}
            onClick={() => changeImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
