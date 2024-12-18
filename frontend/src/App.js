import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import LogIn from './components/LogIn';
import Register from './components/Register';
import Deluxe_Room from './components/Rooms/DeluxeRoom'
import Dormitory_Room from './components/Rooms/DormitoryRoom'
import Family_Room from './components/Rooms/FamilyRoom'
import Presidential_Suite from './components/Rooms/PresidentialSuite'
import Standard_Room from './components/Rooms/StandardRoom'
// import useSWR from 'swr';
// const fetcher = (...args) => fetch(...args).then(res => res.json());

// var api = "http://localhost:8080";
// const { data, error, isLoading } = useSWR(api, fetcher);

export class App extends Component {
  
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="log-in" element={<LogIn />} />
            <Route exact path="register" element={<Register />} />
            <Route exact path="standard-room" element={<Standard_Room />} />
            <Route exact path="deluxe-room" element={<Deluxe_Room />} />
            <Route exact path="family-room" element={<Family_Room />} />
            <Route exact path="dormitory-room" element={<Dormitory_Room />} />
            <Route exact path="presidential-suite" element={<Presidential_Suite />} />
          </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
