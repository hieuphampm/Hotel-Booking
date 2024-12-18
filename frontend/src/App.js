import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import DeluxeRoom from './components/Rooms/DeluxeRoom';
import DormitoryRoom from './components/Rooms/DormitoryRoom';
import FamilyRoom from './components/Rooms/FamilyRoom';
import PresidentialSuite from './components/Rooms/PresidentialSuite';
import StandardRoom from './components/Rooms/StandardRoom';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Booking from './components/Booking';


export class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/standard-room" element={<StandardRoom />} />
          <Route path="/deluxe-room" element={<DeluxeRoom />} />
          <Route path="/family-room" element={<FamilyRoom />} />
          <Route path="/dormitory-room" element={<DormitoryRoom />} />
          <Route path="/presidential-suite" element={<PresidentialSuite />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
