import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/rooms/${id}`)
      .then((response) => response.json())
      .then((data) => setRoom(data))
      .catch((error) => console.error('Error fetching room:', error));
  }, [id]);

  if (!room) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{room.name}</h1>
      <img src={room.imageUrl} alt={room.name} style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
      <p>{room.description}</p>
      <p>Price: {room.price} VND</p>
    </div>
  );
};

export default RoomDetail;
