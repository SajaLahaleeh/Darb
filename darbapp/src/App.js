import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Search from "./Components/Search";
import BookingHotel from "./Components/BookingHotel";
import Rooms from "./Components/Rooms";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

import CarSearch from "./CarComponents/Search";
import BookingCar from "./CarComponents/BookingCar";
import OneCar from "./Components/OneCar";
import HomePageCar from "./CarComponents/HomePageCar";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/booking' component={BookingHotel} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />

        <Route exact path='/cars/search' component={CarSearch} />
        <Route exact path='/cars/booking' component={BookingCar} />
        <Route exact path='/cars' component={HomePageCar} />
        <Route exact path='/cars/details' component={OneCar} />
      </Router>
    );
  }
}

export default App;
