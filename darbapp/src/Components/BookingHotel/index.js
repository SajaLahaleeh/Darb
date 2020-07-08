import React, { Component } from "react";
import Header from "./../../CommonComponents/Header";
import ContactSection from "../../Components/ContactSection";
import PhoneInput from "react-phone-number-input";
import Footer from "../../CommonComponents/Footer";
import contact from "../../assets/contact.svg";
import calender from "../../assets/from.svg";
import bed from "../../assets/bedS.svg";
import "./index.css";
import { randomBytes } from "crypto";
import sha256 from "crypto-js/sha256";

class BookingHotel extends Component {
  state = {
    gender: [],
    genderError: [],
    firstName: [],
    firstNameError: [],
    lastName: [],
    lastNameError: [],
    emailAddress: "",
    emailAddressError: "",
    rooms: [],
    value: "",
    valueError: "",
    defaultCountry: "",
    wrongName: [],
    wrongLast: [],
    wrongEmail: true,
    wrongGender: [],
    wrongValue: true,
    iframe: false,
    once: 0,
  };
  componentDidMount() {
    const rooms = localStorage.getItem("searchBar")
      ? JSON.parse(localStorage.getItem("searchBar")).rooms
      : null;
    this.setState({
      rooms,
      gender: rooms.map((gender, i) => "mr" + i),
      firstName: rooms.map((gender, i) => ""),
      lastName: rooms.map((gender, i) => ""),
    });
  }
  iFrame0 = () => {
    if (this.state.once) return;
    const merchantReference = randomBytes(10).toString("hex");
    const signature = sha256(
      "TEST" +
        `access_code=0UPmtDIoqFt2POsY7vSRamount=1000currency=JODlanguage=enmerchant_extra=${this.state.booking_info}merchant_identifier=BbefLryEmerchant_reference=${merchantReference}return_url=http://localhost:3000/404service_command=TOKENIZATION` +
        "TEST"
    ).toString();
    this.setState({ once: 1, signature, merchantReference }, () => {
      var ifrm = document.getElementById("i-frame");
      ifrm =
        ifrm.contentWindow ||
        ifrm.contentDocument.document ||
        ifrm.contentDocument;
      ifrm.document.open();
      ifrm.document.write(`<!DOCTYPE html>
        <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>i frame</title>
  </head>
  <body>
    <form
      method="post"
      action="https://sbcheckout.payfort.com/FortAPI/paymentPage"
      id="form1"
      name="form1"
    >
      <input
        type="hidden"
        name="signature"
        value="${this.state.signature}"
      />
      <input type="hidden" name="amount" value="1000" />
      <input type="hidden" name="currency" value="JOD" />
      <input type="hidden" name="service_command" value="TOKENIZATION" />
      <input type="hidden" name="merchant_identifier" value="BbefLryE" />
      <input type="hidden" name="access_code" value="0UPmtDIoqFt2POsY7vSR" />
      <input type="hidden" name="merchant_reference" value="${this.state.merchantReference}" />
      <input type="hidden" name="language" value="en" />
      <input
        type="hidden"
        name="merchant_extra"
        value=${this.state.booking_info}
      />
      <input
        type="hidden"
        name="return_url"
        value="http://localhost:3000/404"
      />

      <input
        type="submit"
        value=""
        id="payClick"
        name=""
        style="display: none;"
      />
    </form>
    <script>
      document.getElementById("payClick").click();
    </script>
  </body>
</html>
`);
      ifrm.document.close();
    });
  };
  handleRadioButtonChange = ({ target: { value, name } }) => {
    const gender = this.state.gender;
    gender[name] = value;
    this.setState({ gender: [...gender] }, () => {});
  };

  handelChange = ({ target: { name, value } }) => {
    const partOfName = this.state[name.slice(0, name.length - 1)];
    partOfName[parseInt(name.slice(name.length - 1, name.length))] = value;
    this.setState({ [name.slice(0, name.length - 1)]: partOfName });
  };

  handelChangeEmail = (event) => {
    this.setState({ emailAddress: event.target.value });
  };
  validate = (cb) => {
    const { firstName, lastName, emailAddress, gender, value } = this.state;
    this.setState(
      {
        wrongName: firstName.map((element) => {
          return element.length < 4;
        }),
        wrongLast: lastName.map((element) => {
          return element.length < 4;
        }),
        wrongEmail: emailAddress.indexOf("@") === -1,
        wrongGender: gender.map((element) => {
          return element === "";
        }),
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
        wrongValue,
      } = this.state;

      let wrongNameArr = !wrongName.length
        ? [1]
        : wrongName.reduce((wrong, acc) => {
            return wrong && acc;
          });
      let wrongLastArr = !wrongLast.length
        ? [1]
        : wrongLast.reduce((wrong, acc) => {
            return wrong && acc;
          });
      let wrongGenderArr = !wrongGender.length
        ? [1]
        : wrongGender.reduce((wrong, acc) => {
            return wrong && acc;
          });
      if (
        wrongNameArr ||
        wrongLastArr ||
        wrongEmail ||
        wrongGenderArr ||
        wrongValue
      ) {
        this.setState({
          iframe: false,
          genderError: wrongGender.map((element) => {
            return element ? "*" : null;
          }),
          firstNameError: wrongName.map((element) => {
            return element ? "First name must be at least 4 characters" : null;
          }),
          lastNameError: wrongLast.map((element) => {
            return element ? "Last name must be at least 4 characters" : null;
          }),
          emailAddressError: "Requires valid email",
          valueError: "Please enter your phone number",
        });
      } else {
        this.setState({ iframe: true }, this.iFrame0);
      }
    });
  };

  render() {
    let adults2 = 0;
    const { value, setValue, defaultCountry } = this.state;

    const { gender } = this.state;
    const searchBar = JSON.parse(localStorage.getItem("searchBar"));
    const roomInfo = JSON.parse(localStorage.getItem("roomBooking"));

    return (
      <div>
        <Header />
        <div className='main-container'>
          <div className='cancellation-room'>
            <h2 className='intro'>Cansilation Room</h2>
            <div>
              <p>
                You can can cancel the booking today Free, But After 2 Days you
                lost 100 $
              </p>
            </div>
          </div>
          <div className='Firstpart'>
            <h2 className='intro'>Guest Details</h2>
            <div className='GustDetail'>
              <form className='form-booking'>
                {this.state.rooms.map((x, i) => (
                  <div className='all-content'>
                    <span className='room-no'>Room No. {i + 1}</span>
                    <div className='room-number-s'>
                      <div className='RadioButtonGroup'>
                        <div className='EachRadio'>
                          <label>
                            <input
                              type='radio'
                              name={i}
                              value={"mr" + i}
                              checked={this.state.gender[i] === "mr" + i}
                              onChange={this.handleRadioButtonChange}
                              errorText={this.state.genderError}
                            />
                            Mr
                          </label>
                        </div>
                        <div className='EachRadio'>
                          <label>
                            <input
                              type='radio'
                              name={i}
                              value={"ms" + i}
                              checked={this.state.gender[i] === "ms" + i}
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
                              name={i}
                              value={"mrs" + i}
                              checked={this.state.gender[i] === "mrs" + i}
                              onChange={this.handleRadioButtonChange}
                              errorText={this.state.genderError}
                            />
                            Mrs
                          </label>
                        </div>
                      </div>
                      <div className='first-last-name'>
                        <div className='email-valid-s'>
                          <input
                            className='f-l-name'
                            placeholder='First Name'
                            name={"firstName" + i}
                            value={this.state.firstName[i]}
                            onChange={this.handelChange}
                            errorText={this.state.firstNameError[i] || ""}
                          />
                          {this.state.wrongName ? (
                            <p className='requer-text'>
                              {this.state.firstNameError[i]}
                            </p>
                          ) : null}
                        </div>
                        <div className='email-valid-s'>
                          <input
                            className='f-l-name'
                            placeholder='Last Name'
                            name={"lastName" + i}
                            value={this.state.lastName[i]}
                            onChange={this.handelChange}
                            errorText={this.state.lastNameError[i] || ""}
                          />
                          {this.state.wrongLast ? (
                            <p className='requer-text'>
                              {this.state.lastNameError[i]}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <span className='room-no'>Contact Detail</span>
                <div className='content-detals-s'>
                  <div className='email-valid-s'>
                    <input
                      className='booking-car-email-address'
                      placeholder='Email Address'
                      name='emailAddress'
                      value={this.state.emailAddress}
                      onChange={this.handelChangeEmail}
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
                <button
                  className='btn-booking-now'
                  onClick={this.submitBooking}
                >
                  Pay Now
                </button>
              </form>
            </div>
          </div>
          <div className='secound-part'>
            <h2 className='intro'>Booking Summary</h2>
            <div className='booking-summary'>
              <div className='section-one'>
                <img
                  src={roomInfo.imgRoom.hotelimage_url.replace("_t", "_z")}
                  alt=''
                  className='hotel-booking-img'
                />
                <div className='section-two'>
                  <div className='hotel-name-star-info0'>
                    <h4>
                      {
                        JSON.parse(localStorage.hotelDetail).hotelDetail
                          .hotel[0].hotel_name
                      }
                    </h4>
                    <br />
                    <h4>
                      Room Name :{" "}
                      <span>{roomInfo.room.room_name.split(",")}</span>
                    </h4>
                  </div>
                  <div className='icon-words'>
                    <img src={contact} alt='' className='contact' />
                    <h5 className='word'>
                      {searchBar && searchBar.rooms
                        ? searchBar.rooms.forEach((element) => {
                            adults2 += element.adults;
                          })
                        : null}
                      {adults2} Adults
                    </h5>
                  </div>
                  <div className='icon-words'>
                    <img src={calender} alt='' className='calender' />
                    <h5 className='word'>
                      {"From "}
                      {new Date(
                        JSON.parse(localStorage.searchBar).checkin
                      ).toDateString()}
                      {" To "}
                      {new Date(
                        JSON.parse(localStorage.searchBar).checkout
                      ).toDateString()}
                      {"  "}
                      {localStorage.getItem("totalDays") || 1} night
                    </h5>
                  </div>
                  <div className='icon-words'>
                    <img src={bed} alt='' className='bed-summary' />
                    <h5 className='word'>
                      {JSON.parse(localStorage.roomBooking).room.room_name}
                    </h5>
                  </div>
                  <div className='section-three'>
                    <h4>
                      {localStorage.getItem("currency") || "SAR"}:{" "}
                      {JSON.parse(localStorage.roomBooking).room.price}
                      {"  "}
                      Total for {localStorage.getItem("totalDays") || 1} nights
                      (incl. VAT){" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.iframe ? (
            <iframe
              id='i-frame'
              src=''
              style={{
                border: "none",
                margin: "0 0 0 5%",
                width: "40%",
                height: "520px",
              }}
            ></iframe>
          ) : null}
        </div>
        <hr className='contact-footer-line-d'></hr>
        <ContactSection />
        <Footer />
      </div>
    );
  }
}
export default BookingHotel;
