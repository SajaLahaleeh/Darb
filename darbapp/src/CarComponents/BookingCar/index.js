import React, { Component } from "react";
import Header from "../../CommonComponents/Header";
import ContactSection from "../../Components/ContactSection";
import Footer from "../../CommonComponents/Footer";
import PhoneInput from "react-phone-number-input";
import "./index.css";
class BookingCar extends Component {
  state = {
    gender: "mr",
    genderError: "",
    firstName: "",
    firstNameError: "First name must be at least 4 characters",
    lastName: "",
    lastNameError: "Last name must be at least 4 characters",
    emailAddress: "",
    emailAddressError: "Requires valid email",
    dateOfBearth: "",
    dateOfBearthError: "The date of birth does not match the entered age",
    id: "",
    code: "",
    value: "",
    valueError: "Please enter your phone number",
    defaultCountry: "",
    wrongName: true,
    wrongLast: true,
    wrongEmail: true,
    wrongGender: true,
    wrongBearthOfDate: true,
    wrongValue: true,
    age: 0,
  };

  componentDidMount() {
    try {
      this.setState({ age: JSON.parse(localStorage.searchBarCar).age });
    } catch (e) {
      console.log(e);
    }
  }
  handleRadioButtonChange = ({ target: { value } }) => {
    this.setState({ gender: value });
  };

  handelChange = ({ target }) => {
    const value = target.value;
    if (target.name === "dateOfBearth") {
      const age = (new Date() - new Date(value)) / 1000 / 60 / 60 / 24 / 365;
      const DOB = value.split("/");

      if (DOB.length === 3 && DOB[2].length > 1) {
        this.setState({
          wrongBearthOfDate: Math.floor(age) != this.state.age,
        });
      } else {
        this.setState({
          wrongBearthOfDate: true,
        });
      }
    }
    this.setState({ [target.name]: value });
  };

  validate = (cb) => {
    const {
      firstName,
      lastName,
      emailAddress,
      gender,
      dateOfBearth,
      value,
    } = this.state;

    this.setState(
      {
        wrongName: firstName.length < 3,
        wrongLast: lastName.length < 3,
        wrongEmail: emailAddress.indexOf("@") === -1,
        wrongGender: gender === "",
        wrongValue: value === "",
      },
      cb
    );
  };

  submitBooking = (event) => {
    event.preventDefault();
    this.validate(() => {
      const {
        wrongName,
        wrongLast,
        wrongEmail,
        wrongGender,
        wrongBearthOfDate,
        wrongValue,
      } = this.state;
      if (
        wrongName ||
        wrongLast ||
        wrongEmail ||
        wrongGender ||
        wrongBearthOfDate ||
        wrongValue
      ) {
        this.setState({
          genderError: "",
          firstNameError: "First name must be at least 4 characters",
          lastNameError: "Last name must be at least 4 characters",
          emailAddressError: "Requires valid email",
          dateOfBearthError: "The date of birth does not match the entered age",
          valueError: "Please enter your phone number",
        });
      } else {
        this.setState({});
      }
    });
  };

  render() {
    const { gender } = this.state;
    const car = this.props.location.state
      ? this.props.location.state.car
      : (window.location.href = "/cars/search");

    return (
      <div>
        <Header />
        <div className='booking-car-main-container'>
          <div className='booking-car-Firstpart'>
            <h2 className='booking-car-intro'>Guest Details</h2>
            <div className='booking-car-GustDetail'>
              <form className='booking-car-form-booking'>
                <div className='all-content-car'>
                  <div className='booking-car-RadioButtonGroup'>
                    <div className='booking-car-EachRadio'>
                      <label>
                        <input
                          type='radio'
                          name='gender'
                          value='mr'
                          checked={gender === "mr"}
                          onChange={this.handleRadioButtonChange}
                          errorText={this.state.genderError}
                        />
                        Mr
                      </label>
                    </div>
                    <div className='booking-car-EachRadio'>
                      <label>
                        <input
                          type='radio'
                          name='gender'
                          value='ms'
                          checked={gender === "ms"}
                          onChange={this.handleRadioButtonChange}
                          errorText={this.state.genderError}
                        />
                        Ms
                      </label>
                    </div>
                    <div className='EachRadio'>
                      <label>
                        <input
                          type='radio'
                          name='gender'
                          value='mrs'
                          checked={gender === "mrs"}
                          onChange={this.handleRadioButtonChange}
                          errorText={this.state.genderError}
                        />
                        Mrs
                      </label>
                    </div>
                  </div>
                  <div className='booking-car-first-last-name'>
                    <div className='email-valid-s'>
                      <input
                        className='booking-car-f-l-name'
                        placeholder='First Name'
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handelChange}
                        errorText={this.state.firstNameError}
                      />
                      {this.state.wrongName ? (
                        <p className='requer-text'>
                          {this.state.firstNameError}
                        </p>
                      ) : null}
                    </div>
                    <div className='email-valid-s'>
                      <input
                        className='booking-car-f-l-name'
                        placeholder='Last Name'
                        name='lastName'
                        value={this.state.lastName}
                        onChange={this.handelChange}
                        errorText={this.state.lastNameError}
                      />
                      {this.state.wrongLast ? (
                        <p className='requer-text'>
                          {this.state.lastNameError}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <span className='room-no'>Contact Detail</span>
                <div className='content-detals-s'>
                  <div className='email-valid-s'>
                    <input
                      className='booking-car-email-address'
                      placeholder='Email Address'
                      name='emailAddress'
                      value={this.state.emailAddress}
                      onChange={this.handelChange}
                      errorText={this.state.emailAddressError}
                    />
                    {this.state.wrongEmail ? (
                      <p className='vaild-email-text'>
                        {this.state.emailAddressError}
                      </p>
                    ) : null}
                  </div>
                  <div className='phone-div'>
                    <PhoneInput
                      international
                      defaultCountry={this.defaultCountry}
                      value={this.state.value}
                      errorText={this.state.valueError}
                      onChange={(value) => this.setState({ value })}
                    />
                    {this.state.wrongValue ? (
                      <p className='requer-text'>{this.state.valueError}</p>
                    ) : null}
                  </div>
                </div>

                <div className='input-bod-s'>
                  <div className='email-valid-s'>
                    <input
                      className='bearth-of-date'
                      placeholder='mm / dd / yyyy'
                      name='dateOfBearth'
                      onChange={this.handelChange}
                      errorText={this.state.dateOfBearthError}
                    />
                    {this.state.wrongBearthOfDate ? (
                      <p className='requer-text'>
                        {this.state.dateOfBearthError}
                      </p>
                    ) : null}
                  </div>
                  <button
                    className='booking-car-btn-booking-now'
                    onClick={this.submitBooking}
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='booking-car-secound-part'>
            <h2 className='booking-car-intro'>Booking summary</h2>
            <div className='booking-car-booking-summary'>
              <div className='booking-car-section-one'>
                <img
                  src={car.vehicle_image.replace("small", "large")}
                  alt=''
                  className='booking-car-car-booking-img'
                />
                <div className='booking-car-section-two'>
                  <div className='booking-car-car-name-star-info0'>
                    <h4>{car.vehicle_name + " (" + car.vehicle_code + ")"}</h4>
                    <h4>{car.location}</h4>
                  </div>

                  <div className='booking-car-icon-words'>
                    <h5 className='booking-car-word'>
                      From date {JSON.parse(localStorage.searchBarCar).checkin}{" "}
                      To date {JSON.parse(localStorage.searchBarCar).checkout}
                    </h5>
                  </div>
                  <div>
                    <p className='booking-car-transparency'>
                      {car.vehicle_category}
                    </p>
                    <div
                      className='booking-car-labels'
                      style={{ display: "block" }}
                    >
                      <p className='booking-car-span'>
                        {car.vehicle_fuel_info}
                      </p>
                      <p className='booking-car-span'>
                        {car.vehicle_persons}_persons
                      </p>

                      <p className='booking-car-span'>
                        {car.vehicle_transmision}
                      </p>
                      <p className='booking-car-span'>
                        {car.vehicle_baggages}
                        {"_"}
                        {car.vehicle_baggages > 1 ? "baggages" : "baggage"}
                      </p>
                    </div>
                  </div>

                  <div className='booking-car-section-three'>
                    <h4>
                      {car.client_price}
                      {"  "}
                      {car.client_currency} Total for{" "}
                      {Math.round(
                        car.client_price / car.client_price_per_day
                      ) || 1}{" "}
                      days{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
        <Footer />
      </div>
    );
  }
}
export default BookingCar;
