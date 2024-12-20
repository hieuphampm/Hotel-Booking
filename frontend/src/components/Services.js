import React from 'react';
import './style.css';
import SpaIcon from '@mui/icons-material/Spa';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PoolIcon from '@mui/icons-material/Pool';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import Camping from '@mui/icons-material/Cabin';

const servicesData = [
  { id: 1, name: "Luxury Spa", icon: <SpaIcon /> },
  { id: 2, name: "Fine Dining", icon: <RestaurantIcon /> },
  { id: 3, name: "Infinity Pool", icon: <PoolIcon /> },
  { id: 4, name: "Private Beach", icon: <BeachAccessIcon /> },
  { id: 5, name: "Fitness Center", icon: <FitnessCenterIcon /> },
  { id: 6, name: "Airport Transfer", icon: <FlightIcon /> },
  { id: 7, name: "Car Rental", icon: <DirectionsCar /> },
  { id: 8, name: "Camping", icon: <Camping /> },
];

const Services = () => {
    return (
      <div className="services-carousel-container">
        <div className="services-carousel">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Services;
