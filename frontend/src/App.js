import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Deluxe_Room from './components/Rooms/DeluxeRoom';
import Dormitory_Room from './components/Rooms/DormitoryRoom';
import Family_Room from './components/Rooms/FamilyRoom';
import Presidential_Suite from './components/Rooms/PresidentialSuite';
import Standard_Room from './components/Rooms/StandardRoom';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Payment from './components/Payment';
import ForgotPassword from './components/ForgotPassword';
import Navbar from './components/Navbar';

export class App extends Component {
  state = {
    isLoggedIn: false,
  };

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar isLoggedIn={this.state.isLoggedIn} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="log-in"
            element={<LogIn onLogin={this.handleLogin} />}
          />
          <Route exact path="register" element={<Register />} />
          <Route exact path="standard-room" element={<Standard_Room />} />
          <Route exact path="deluxe-room" element={<Deluxe_Room />} />
          <Route exact path="family-room" element={<Family_Room />} />
          <Route exact path="dormitory-room" element={<Dormitory_Room />} />
          <Route exact path="presidential-suite" element={<Presidential_Suite />} />
          <Route exact path="contact" element={<ContactUs />} />
          <Route exact path="about-us" element={<AboutUs />} />
          <Route exact path="gallery" element={<Gallery />} />
          <Route exact path="booking" element={<Booking />} />
          <Route exact path="payment" element={<Payment />} />
          <Route exact path="forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
