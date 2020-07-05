import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

import person from "../../../assets/personCar.jpg";
import baggage from "../../../assets/baggage.png";
import Automatic from "../../../assets/Automatic.png";
import Manual from "../../../assets/Manual.png";
import vehicle_fuel_info from "../../../assets/vehicle_fuel_info.png";

class Car extends Component {
  state = {
    totalDays: 0,
    message: ""
  };

  componentDidMount() {}

  render() {
    const { car } = this.props;
    return (
      <div className='car-search-car-contener'>
        <img
          src={car.vehicle_image.replace("small", "large")}
          className='car-search-car-img'
        />
        <div className='car-search-center-side-car'>
          <div className='car-search-flex'>
            <h3 className='car-search-h3'>
              {car.vehicle_name} ({car.vehicle_code})
            </h3>
          </div>
          <p className='car-search-transparency'>{car.vehicle_category}</p>
          <div className='car-search-labels'>
            <div className='img-span-contener'>
              <img className='car-search-img-span' src={vehicle_fuel_info} />
              <span className='car-search-span'>{car.vehicle_fuel_info}</span>
            </div>
            <div className='img-span-contener'>
              <img className='car-search-img-span' src={person} />
              <span className='car-search-span'>
                {car.vehicle_persons} persons
              </span>
            </div>
            <div className='img-span-contener'>
              <img
                className='car-search-img-span'
                src={car.vehicle_transmision === "Manual" ? Manual : Automatic}
              />
              <span className='car-search-span'>{car.vehicle_transmision}</span>
            </div>
            <div className='img-span-contener'>
              <img className='car-search-img-span' src={baggage} />
              <span className='car-search-span'>
                {car.vehicle_baggages}{" "}
                {car.vehicle_baggages > 1 ? "baggages" : "baggage"}
              </span>
            </div>
          </div>
        </div>
        <hr className='car-search-line-filter' />
        <div className='btn-and-price'>
          <div>
            <p className='car-search-transparency0'>
              Total for the trip {"  "} {"  "}
              <span>
                {car.client_currency || "SAR "}
                &nbsp; &nbsp; &nbsp;
                {car.client_price}
              </span>
            </p>
          </div>

          <div className='car-search-right-side-car'>
            <Link
              to={{
                pathname: "/cars/details",
                state: {
                  car: car
                }
              }}
            >
              <button
                className='car-search-see-rooms-button'
                onClick={() => {
                  localStorage.setItem("car", JSON.stringify(car));
                }}
              >
                See More detail >
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Car;
