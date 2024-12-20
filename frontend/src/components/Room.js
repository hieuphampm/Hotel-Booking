import React from 'react';
import { Link } from 'react-router-dom';
import standardRoom from '../imgs/room_background/standard-room.jpg';
import deluxedRoom from '../imgs/room_background/deluxe-room.jpg';
import familyRoom from '../imgs/room_background/family-room.jpg';
import dormitoryRoom from '../imgs/room_background/Dormitory-Room.jpg';
import presidentialRoom from '../imgs/room_background/Presidential-Suite-Room.jpg';

const Room = () => {
  const rooms = [
    {
      title: 'Standard Room',
      image: standardRoom,
      link: '/standard-room',
      description: 'A cozy room perfect for solo travelers.',
    },
    {
      title: 'Deluxed Room',
      image: deluxedRoom,
      link: '/deluxe-room',
      description: 'Enjoy a luxurious stay with premium facilities.',
    },
    {
      title: 'Family Room',
      image: familyRoom,
      link: '/family-room',
      description: 'Spacious and comfortable for families.',
    },
    {
      title: 'Dormitory Room',
      image: dormitoryRoom,
      link: '/dormitory-room',
      description: 'Affordable and convenient for groups.',
    },
    {
      title: 'Presidential Room',
      image: presidentialRoom,
      link: '/presidential-suite',
      description: 'Experience luxury like never before.',
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {rooms.map((room, index) => (
          <div className="col" key={index}>
            <div className="card h-100 text-center">
              <img src={room.image} className="card-img-top" alt={room.title} style={{ objectFit: 'cover', height: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">{room.title}</h5>
                <p className="card-text">{room.description}</p>
                <Link to={room.link} className="btn btn-dark">View more</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;