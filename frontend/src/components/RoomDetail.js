import React from 'react';
import './RoomDetail.css';

const RoomDetail = ({ room }) => {
  return (
    <div className="room-detail">
      <h2>{room.name}</h2>
      <p>{room.description}</p>
      <img src={room.imageUrl} alt={room.name} />
    </div>
  );
};

export default RoomDetail;