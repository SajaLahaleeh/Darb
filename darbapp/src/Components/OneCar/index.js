import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../../CommonComponents/Header";
import ContactSection from "../../Components/ContactSection";
import Footer from "../../CommonComponents/Footer";
import car from "./details.js";
import "./style.css";

import locationImg from "./../../assets/pin.png";
import manualTransmission from "./../../assets/manual-transmission.svg";
import loading from "../../assets/loading.gif";

export class OneCar extends Component {
  state = {
    carDetails: "",
    showAndHide: "policy-item",
    availcarsearch_results_id: 22572,
    availcarsearch_id: 14217
  };
  componentDidMount() {
    localStorage.setItem("vehicleDetails", JSON.stringify(car));
    try {
      this.setState(
        {
          availcarsearch_results_id: this.props.location.state.car
            .availcarsearch_results_id,
          availcarsearch_id: this.props.location.state.car.availcarsearch_id
        },
        () => {
          const vehicleData = localStorage.getItem("vehicleDetails");
          const info = JSON.parse(vehicleData);
          axios
            .post(`https://darbserver.appspot.com/car/detail`, {
              availcarsearch_results_id: this.state.availcarsearch_results_id,
              availcarsearch_id: this.state.availcarsearch_id
            })
            .then(
              ({
                data: {
                  data: { vehicle_details }
                }
              }) => {
                localStorage.setItem(
                  "vehicleDetails",
                  JSON.stringify(vehicle_details)
                );

                const vehicleData = localStorage.getItem("vehicleDetails");
                const info = JSON.parse(vehicleData);
                this.setState({ carDetails: vehicle_details });
              }
            )
            .catch(err => {
              localStorage.setItem("vehicleDetails", "");
              window.location.href = "/cars/search";
            });
        }
      );
    } catch (e) {
      window.location.href = "/cars/search";
    }
  }

  render() {
    const price = this.props.price || 5252;
    const { carDetails } = this.state;
    let car = "";
    try {
      car = this.props.location.state.car;
    } catch (e) {}
    return (
      <div className='big-contener-car-details'>
        <Header />
        {!carDetails ? (
          <img src={loading} className='loading-car-detail' />
        ) : (
          <div className='car-details-d'>
            <div className='car-details-image-d'>
              <div className='car-image-name-d'>
                <img
                  src={carDetails.vehicle_image.replace("small", "large")}
                  alt='car image'
                  className='car-image-d'
                />
                <h1 className='name-of-car-d'>
                  {carDetails.vehicle_name} ({carDetails.vehicle_code}){" "}
                </h1>
                <span>
                  <p className='price-car-d'>
                    {" "}
                    {car.client_currency || "SAR"} {car.client_price}
                    /total
                  </p>{" "}
                  <div className='vendor-div-d'>
                    <h5 className='price-car-d'>provider:</h5>
                    <img
                      className='vendor-image-d'
                      src={carDetails.vendor_image}
                      alt='vendor image'
                    />
                  </div>
                </span>
              </div>
              <div className='details-car-inf-d'>
                <div className='location-icon-title-d'>
                  {" "}
                  <img
                    src={locationImg}
                    alt='icon'
                    className='location-img-d'
                  />
                  <h2>
                    {(car && car.location) || "Paris"}(Pick up/Out Location)
                  </h2>
                </div>
                <div className='location-icon-title-d'>
                  <img
                    className='location-img-d'
                    src={manualTransmission}
                    alt='icon'
                  />
                  <h2> {carDetails.vehicle_fuel_info} (vehicle fuel info)</h2>
                </div>

                <div className='location-icon-title-d'>
                  <img
                    className='location-img-d'
                    src={manualTransmission}
                    alt='icon'
                  />

                  <h2>{carDetails.vehicle_persons} (vehicle seats)</h2>
                </div>
                <div className='location-icon-title-d'>
                  <img
                    className='location-img-d'
                    src={manualTransmission}
                    alt='icon'
                  />
                  <h2>{carDetails.vehicle_transmision}(vehicle transmision)</h2>{" "}
                </div>

                <div className='location-icon-title-d'>
                  <img
                    className='location-img-d'
                    src={manualTransmission}
                    alt='icon'
                  />
                  <h2>{carDetails.vehicle_baggages} (vehicle baggages )</h2>{" "}
                </div>
              </div>
            </div>
            <section className='cancellation-poilices-container-secton-d'>
              <h2>Cancellation poilices</h2>

              <div className='cancellation-poilices-container-d'>
                {carDetails.cancellation_policies.length === 0 ? (
                  <h2>No Poilices</h2>
                ) : (
                  <ul className='list-item-d'>
                    {carDetails.cancellation_policies.map((item, id) => (
                      <li>
                        <div className='list-item-tite-button-d'>
                          <h4>{item.from}</h4>
                          <button
                            className='button-details-d'
                            onClick={() => {
                              document.getElementById("policy-item-" + id).style
                                .display === "block"
                                ? (document.getElementById(
                                    "policy-item-" + id
                                  ).style.display = "none")
                                : (document.getElementById(
                                    "policy-item-" + id
                                  ).style.display = "block");
                            }}
                          >
                            +
                          </button>
                        </div>
                        <p className='policy-item' id={"policy-item-" + id}>
                          {item.until}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
            <section>
              <h2>Insurance Info :Full Protection</h2>
              <div className='cancellation-poilices-container-d'>
                <ul className='list-item-d'>
                  {carDetails.insurance_info.InclusionsList.map((item, id) => (
                    <li>
                      <div className='list-item-tite-button-d'>
                        <h4>{item.Title}</h4>
                        <button
                          className='button-details-d'
                          onClick={() => {
                            document.getElementById("policy-item" + id).style
                              .display === "block"
                              ? (document.getElementById(
                                  "policy-item" + id
                                ).style.display = "none")
                              : (document.getElementById(
                                  "policy-item" + id
                                ).style.display = "block");
                          }}
                        >
                          +
                        </button>
                      </div>
                      <p className='policy-item' id={"policy-item" + id}>
                        {item.Content}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className='estimate-section'>
              <h2> Insurance estimated deposit amount</h2>
              <p>{carDetails.estimated_deposit_amount}</p>
            </section>
            <Link
              className='car-booking-d'
              to={{
                pathname: "/cars/booking",
                state: {
                  car: car
                }
              }}
            >
              {" "}
              <p className='car-bookin-p-d'>Booking car</p>
            </Link>
          </div>
        )}
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default OneCar;
