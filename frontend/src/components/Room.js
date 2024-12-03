import React from 'react';
import { Link } from 'react-router-dom';  
import img1 from '../imgs/img1.jpg';

const Room = () => {
  return (
    <div
      className="d-flex flex-wrap justify-content-center align-items-stretch"
      style={{ gap: '50px', padding: '20px' }}
    >
      <div className="card" style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
        <img
          src={img1}
          className="card-img-top"
          alt="Standard Room"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Standard Room</h5>
          <p className="card-text">
            Comfortable and affordable stay with essential amenities for solo travelers or business guests.
          </p>
          <Link to="/standard-room" className="btn btn-dark mt-auto">
            View More
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
        <img
          src={img1}
          className="card-img-top"
          alt="Deluxe Room"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Deluxe Room</h5>
          <p className="card-text">
            Extra space and stylish furnishings, perfect for those seeking a more luxurious and relaxing experience.
          </p>
          <Link to="/deluxe-room" className="btn btn-dark mt-auto">
            View More
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
        <img
          src={img1}
          className="card-img-top"
          alt="Family Room"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Family Room</h5>
          <p className="card-text">
            Designed for families, offering spacious accommodations and convenient amenities for a memorable stay.
          </p>
          <Link to="/family-room" className="btn btn-dark mt-auto">
            View More
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
        <img
          src={img1}
          className="card-img-top"
          alt="Dormitory Room"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Dormitory Room</h5>
          <p className="card-text">
            Budget-friendly shared accommodations, ideal for backpackers and group travelers.
          </p>
          <Link to="/dormitory-room" className="btn btn-dark mt-auto">
            View More
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
        <img
          src={img1}
          className="card-img-top"
          alt="Presidential Suite"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Presidential Suite</h5>
          <p className="card-text">
            The ultimate in luxury with expansive living space and exclusive services for a truly indulgent experience.
          </p>
          <Link to="/presidential-suite" className="btn btn-dark mt-auto">
            View More
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Room;
