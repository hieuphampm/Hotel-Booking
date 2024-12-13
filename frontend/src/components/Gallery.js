import React, { useState, useEffect } from 'react';
import './style.css';
import img3 from '../imgs/img3.jpg';
import img4 from '../imgs/img4.jpg';
import img5 from '../imgs/img5.jpg';
import img6 from '../imgs/img6.jpg';
import img7 from '../imgs/img7.jpg';

const hotels = [
  {
    image: img3,
    name: "Serenity Resort",
    location: "Phú Quốc, Việt Nam",
    price: "$200/night",
    rating: "4.8/5",
    description: "Khu nghỉ dưỡng hiện đại với bãi biển riêng và các tiện nghi cao cấp.",
    amenities: ["Wi-Fi miễn phí", "Hồ bơi", "Nhà hàng", "Dịch vụ spa"],
    contact: "hotline: +84 123 456 789",
  },
  {
    image: img4,
    name: "Sunrise Serenity",
    location: "Nha Trang, Việt Nam",
    price: "$150/night",
    rating: "4.5/5",
    description: "Biệt thự ven biển với cảnh hoàng hôn tuyệt đẹp.",
    amenities: ["Bãi đỗ xe miễn phí", "Gần biển", "Bữa sáng miễn phí"],
    contact: "hotline: +84 987 654 321",
  },
  {
    image: img5,
    name: "Serenity Mountain Retreat",
    location: "Đà Lạt, Việt Nam",
    price: "$120/night",
    rating: "4.2/5",
    description: "Ẩn mình trong thiên nhiên với không gian yên bình, là một nơi lí tưởng để trở thành chill guys/girls.",
    amenities: ["Không gian yên tĩnh", "Cảnh núi đẹp", "Xe đạp miễn phí"],
    contact: "hotline: +84 456 123 789",
  },
  {
    image: img6,
    name: "Senerity Hotel",
    location: "Hà Nội, Việt Nam",
    price: "$180/night",
    rating: "4.7/5",
    description: "Khách sạn sang trọng ngây ngất lòng người giữa lòng thủ đô.",
    amenities: ["Gần phố cổ", "Phòng gym", "Nhà hàng quốc tế"],
    contact: "hotline: +84 123 789 456",
  },
  {
    image: img7,
    name: "Serenity Ocean Paradise",
    location: "Hà nội, Việt Nam",
    price: "$220/night",
    rating: "4.9/5",
    description: "Khách sạn ven biển với view trịu đô ở vịnh Hạ Long tuyệt đẹp.",
    amenities: ["Du thuyền riêng", "Quán bar trên sân thượng", "Hồ bơi vô cực"],
    contact: "hotline: +84 789 456 123",
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
  );
};

export default Gallery;
