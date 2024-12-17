import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Room = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/rooms') 
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error('Error fetching rooms:', error));
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-stretch" style={{ gap: '50px', padding: '20px' }}>
      {rooms.map((room) => (
        <div key={room.id} className="card" style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
          <img
              src={room.imageUrl || 'default-image.jpg'} 
              className="card-img-top"
              alt={room.name}
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{room.name}</h5>
            <p className="card-text">{room.description}</p>
            <Link to={`/room/${room.id}`} className="btn btn-dark mt-auto">View More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Room;
