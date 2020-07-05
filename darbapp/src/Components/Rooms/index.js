import React from "react";
import Images from "./Images";
import Room from "./Room";
import hotels from "./../../Data/rooms";
import Header from "../../CommonComponents/Header";
import loading from "../../assets/loading.gif";
import loadingImg from "../../assets/loadingImg.gif";
import OneHotel from "../OneHotel";
import Footer from "../../CommonComponents/Footer";
import ContactSection from "../ContactSection";
import MapR from "./MapR";

import "./index.css";

const hotel =
  localStorage.getItem("hotelDetail") &&
  JSON.parse(localStorage.getItem("hotelDetail"))
    ? JSON.parse(localStorage.getItem("hotelDetail")).hotelDetail
    : null;

class Rooms extends React.Component {
  state = {
    page: 1,
    sliderShow: 0,
    imageNo: 0,
    imagesHotel: [
      loadingImg,
      loadingImg,
      loadingImg,
      loadingImg,
      loadingImg,
      loadingImg,
      loadingImg,
      loadingImg,
      loadingImg,
      loadingImg
    ],
    facilities: []
  };
  changeSliderShow = (imageNo = 0) =>
    this.setState({ sliderShow: !this.state.sliderShow, imageNo });
  componentDidMount() {
    const hotelData = localStorage.getItem("hotelDetail");
    const info = JSON.parse(hotelData);
    var arr = [];
    var hotelfacilities = info.hotelDetail.hotelfacilities;
    for (let key in hotelfacilities) {
      let value = hotelfacilities[key];
      arr.push(value.facility_name);
    }
    this.setState({ facilities: arr }, () => {});
    const imagesHotel =
      hotel && hotel.hotelImages
        ? hotel.hotelImages
            .filter(img => !img.hotelimage_url.includes("_t"))
            .map((img, i) => img.hotelimage_url)
        : null;
    if (imagesHotel) this.setState({ imagesHotel });
  }
  render() {
    const { facilities } = this.state;
    const a = [0, 0, 0, 0, 0, 0, 0];

    return (
      <div>
        <Header />
        {this.state.sliderShow ? (
          <div className='slider-rooms-images'>
            <button
              onClick={() => this.changeSliderShow(0)}
              className='x-button-slider'
            >
              {"X"}
            </button>
            <button
              onClick={() =>
                this.setState({
                  imageNo: this.state.imageNo ? this.state.imageNo - 1 : 0
                })
              }
            >
              {"<"}
            </button>
            <img
              alt=''
              className='img-hotel-slider'
              src={this.state.imagesHotel[this.state.imageNo]}
            />
            <button
              onClick={() =>
                this.setState({
                  imageNo:
                    this.state.imageNo < this.state.imagesHotel.length - 1
                      ? this.state.imageNo + 1
                      : this.state.imageNo
                })
              }
            >
              {">"}
            </button>
          </div>
        ) : null}
        <Images
          changeSliderShow={this.changeSliderShow}
          urls={this.state.imagesHotel}
        />
        <div className='hotel-info-room-s'>
          <span>
            <a href='#hotel-description' className='link-section'>
              {" "}
              Hotel Details
            </a>
          </span>
          <span>
            <a href='#map-section' className='link-section'>
              Hotel Map{" "}
            </a>
          </span>
          <span>
            <a href='#amenities-section' className='link-section'>
              Amenities
            </a>
          </span>
          <span>
            <a href='#availbel-room-section' className='link-section'>
              Available Rooms
            </a>
          </span>
        </div>
        <section id='hotel-description'>
          <OneHotel />
        </section>
        <section className='btn-img-map-s' id='map-section'>
          <button className='map-section-s'>
            <div className='map-img-s'>
              <MapR />
            </div>
          </button>
        </section>
        <section className='facilities-map-d' id='amenities-section'>
          <h3 className='amenities-text'>Property amenities</h3>
          <ul className='ul-map-d'>
            {facilities.map(index => (
              <li className='li-map-d'>{index}</li>
            ))}
          </ul>
        </section>
        <section className='room-div-s' id='availbel-room-section'>
          {hotel.rooms.map((room, i) => (
            <Room
              room={room}
              imgRoom={
                room.imgRoom
                  ? room.imgRoom.hotelimage_url
                  : hotel && hotel.hotelImages
                  ? hotel.hotelImages[i]
                    ? hotel.hotelImages[i]
                    : hotel.hotelImages[0]
                  : null
              }
            />
          ))}
        </section>
        <hr className='contact-footer-line-d'></hr>
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default Rooms;
