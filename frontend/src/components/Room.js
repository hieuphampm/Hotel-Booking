import React from 'react';
import img1 from '../imgs/img1.jpg';

const Room = () => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-dark">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Room;
