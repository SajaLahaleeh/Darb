import React, { Component } from "react";

import Header from "../../CommonComponents/Header";
import Footer from "../../CommonComponents/Footer";
import ContactSection from "../../Components/ContactSection";
import LandingPageCar from "../LandingPageCar";
import "./index.css";
import Filter from "./filter";
import Car from "./car/";

import axios from "axios";
import data from "./data.js";
import bedImg from "../../assets/bedS.svg";
import loading from "../../assets/loading.gif";

const cars = [];
export class Search extends Component {
  state = {
    cars: cars,
    data: [],
    location: 0,
    filterState: {
      min: 0,
      max: 10000,
      carName: "",
      checkboxs: {
        BMW: false,
        Mercedes: false,
        RangeRover: false,
        Audi: false,
        persons4: false,
        persons9: false,
        persons5: false,
        persons7: false,
        CarMini: false,
        CarEconomy: false,
        SpecialSpecial: false,
        CarCompact: false,
        StationwagonCompact: false,
        L2L: false,
        F2F: false,
        Manual: false,
        Automatic: false
      }
    },
    maxPrice: 10000
  };
  componentDidMount() {
    let informationData = "";
    try {
      informationData = JSON.parse(localStorage.getItem("informationData"));
    } catch (e) {
      window.location.href = "/cars";
    }
    const searchInfo = {
      date_from: informationData.date_from,
      from_hour: "10:30",
      date_return: informationData.date_return,
      return_hour: "10:30",
      currency: localStorage.getItem("currency") || "SAR",
      age: informationData.age || "25",
      location_from_text: "Berlin Tegel Airport (TXL)",
      location_from_id: "TXL",
      selected_location_type: "airport",
      return_at_other_location: 0,
      location_return_text: "",
      location_return_id: "",
      selected_location_return_type: "",
      nationality: "324741"
    };

    axios
      .post("https://darbserver.appspot.com/cars", informationData)
      .then(({ data }) => {
        this.setState({ data });
        let maxPrice = 100;
        data.cars.cars.forEach(car => {
          if (parseInt(car.client_price) > maxPrice)
            maxPrice = parseInt(parseInt(car.client_price)) + 100;
        });
        this.setState({
          data,
          maxPrice,
          filterState: {
            ...this.state.filterState,
            max: parseInt((maxPrice + 100) / 25) * 25,
            min: 0
          }
        });
      })
      .catch(err => {
        window.location.href = "/cars";
      });
  }
  setFilterState = filterState => {
    this.setState({
      filterState: { ...this.state.filterState, ...filterState }
    });
  };

  cars = () => {
    const { checkboxs } = this.state.filterState;
    const starRate = "";
    const propertyType = "";
    const meals = "";
    const stars = [];
    const vehicle_fuel_info =
      checkboxs.F2F && checkboxs.L2L
        ? ""
        : checkboxs.F2F
        ? "F2F"
        : checkboxs.L2L
        ? "L2L"
        : "";
    const transmision =
      checkboxs.Manual && checkboxs.Automatic
        ? ""
        : checkboxs.Manual
        ? "Manual"
        : checkboxs.Automatic
        ? "Automatic"
        : "";
    const persons = [
      false,
      false,
      false,
      false,
      checkboxs.persons4,
      checkboxs.persons5,
      false,
      checkboxs.persons7,
      false,
      checkboxs.persons9
    ];

    let cars = "";
    if (this.state.data.cars) cars = this.state.data.cars.cars;
    else {
      const a = [0, 0, 0, 0, 0, 0, 0];
      return a.map(x => <img src={loading} className='loading-cars-search' />);
    }
    return cars.map((car, carI) => {
      let person = false;

      for (let i = 2; i < 10; ++i) person = person || persons[i];
      if (persons[car.vehicle_persons] || !person)
        if (
          parseInt(car.client_price) <= parseInt(this.state.filterState.max) &&
          parseInt(car.client_price) >=
            parseInt(parseInt(this.state.filterState.min)) &&
          (car.vehicle_name + " (" + car.vehicle_code + ")")
            .toLowerCase()
            .includes(
              this.state.filterState.carName
                ? this.state.filterState.carName.toLowerCase()
                : ""
            ) &&
          car.vehicle_fuel_info.includes(vehicle_fuel_info) &&
          car.vehicle_transmision
            .toLowerCase()
            .includes(transmision.toLowerCase())
        )
          return <Car car={car} />;
    });
  };

  render() {
    return (
      <div>
        <Header />
        <LandingPageCar s='s' />

        <div className='car-search-page-filter-container'>
          <Filter
            setState={this.setFilterState}
            state={this.state.filterState}
            maxPrice={this.state.maxPrice}
          />
          <div className='car-search-cars-contener'>{this.cars()}</div>
        </div>
        <hr className='contact-footer-line-d'></hr>
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default Search;
