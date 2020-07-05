import React, { Component } from "react";

import "./style.css";

import locationImg from "./../../assets/pin.png";

export class OneHotel extends Component {
  state = {
    info: "",
    star: (
      <svg size='16' width='16' height='16'>
        <path
          fill='orange'
          d='M9.038.685l1.624 3.972 4.329.312c1.023.1 1.353 1.327.592 1.864l-3.367 2.735 1.034 4.116c.218.98-.874 1.666-1.633 1.126l-3.705-2.281-3.69 2.231c-.888.507-1.894-.296-1.601-1.167l1.077-4.146L.384 6.71c-.768-.668-.296-1.85.642-1.848l4.372-.281L7.039.659c.414-.919 1.71-.846 1.999.026'
        ></path>
      </svg>
    ),
    city: ""
  };
  createStars = noOfStar => {
    let stars = [];
    while (noOfStar-- > 0) {
      stars.push(1);
    }
    return <div>{stars.map(a => this.state.star)}</div>;
  };
  componentWillMount() {
    const hotelData = localStorage.getItem("hotelDetail");
    const info = JSON.parse(hotelData);
    this.setState({ info });
    const location = localStorage.getItem("location");
    const infoLocation = JSON.parse(location);
    this.setState({ city: infoLocation.location_name });
  }
  render() {
    const { info, city } = this.state;

    return (
      <div>
        {!info ? (
          <h1>loading</h1>
        ) : (
          <div className='one-hotel-page-d'>
            <div className='image-title-hotel-d'>
              <img
                className='image-hotel-d'
                src={info.hotelDetail.hotel[0].hotel_preview_image}
                alt='hotel-image'
              />
              <div className='section2-one-hotel-d'>
                <h3> {info.hotelDetail.hotel[0].hotel_name} </h3>
                <span className='icon-location-one-hotel-d'>
                  <img
                    className='icon-one-hotel-d'
                    src={locationImg}
                    alt='location image'
                  />
                  <h3>{city}</h3>
                </span>
                {this.createStars(
                  parseInt(info.hotelDetail.hotel[0].hotel_stars)
                )}
                <a href={info.hotelDetail.hotel[0].hotel_website}>
                  visit hotel website
                </a>
              </div>
            </div>
            <div className='about-pro-s'>
              <div className='description-property-d'>
                <div className='about-d'>
                  <span className='about-text-s'>About</span>
                  <p className='description-one-hotel-d'>
                    {info.hotelDetail.hotel[0].hotel_description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default OneHotel;
