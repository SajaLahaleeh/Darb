import React, { Component } from "react";
import axios from "axios";

import "./index.css";

class Hotel extends Component {
  state = {
    star: (
      <svg size='16' width='16' height='16'>
        <path
          fill='orange'
          d='M9.038.685l1.624 3.972 4.329.312c1.023.1 1.353 1.327.592 1.864l-3.367 2.735 1.034 4.116c.218.98-.874 1.666-1.633 1.126l-3.705-2.281-3.69 2.231c-.888.507-1.894-.296-1.601-1.167l1.077-4.146L.384 6.71c-.768-.668-.296-1.85.642-1.848l4.372-.281L7.039.659c.414-.919 1.71-.846 1.999.026'
        ></path>
      </svg>
    ),
    totalDays: 0,
    alert: false,
    message: ""
  };
  createStars = noOfStar => {
    let stars = [];
    while (noOfStar-- > 0) {
      stars.push(1);
    }
    return <div>{stars.map(a => this.state.star)}</div>;
  };
  componentDidMount() {
    const searchBar = JSON.parse(localStorage.getItem("searchBar"));

    const date1 = new Date(searchBar.checkin);
    const date2 = new Date(searchBar.checkout);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    this.setState({ totalDays: diffDays });
    localStorage.setItem("totalDays", diffDays);
  }
  seeRooms = ({ target }) => {
    this.props.setLoadingFlag();
    const a = {
      search_session: localStorage.getItem("search_session"),
      hid_undeduplicated: "4237635",
      code: "CQz94dz5MF",
      id: "20844"
    };
    localStorage.setItem("hotelInfo", target.name);
    axios
      .post(
        `https://darbserver.appspot.com/hotel/detail`,
        JSON.parse(target.name)
      )
      .then(({ data: hotelDetail }) => {
        localStorage.setItem("hotelDetail", JSON.stringify(hotelDetail));
        if (hotelDetail.hotelDetail.hotelImages[0]) {
          localStorage.setItem(
            "locationHotel",
            JSON.stringify({
              lat: hotelDetail.hotelDetail.hotel[0].hotel_latitude,
              lng: hotelDetail.hotelDetail.hotel[0].hotel_longitude
            })
          );
          window.open(`/rooms`, "_blank");
        } else {
          this.setState({
            alert: true,
            message: "there is no rooms avilable in this hotel"
          });
        }
      })
      .catch(err => {
        localStorage.setItem("hotelDetail", "");
        console.log(err);
      })
      .finally(() => {
        this.props.setLoadingFlag();
      });
  };
  render() {
    this.state.alert
      ? setTimeout(() => this.setState({ alert: false }), 3000)
      : null;
    const { hotel } = this.props;
    return (
      <div className='hotel-contener'>
        <img src={hotel.hotel_preview_image} className='hotel-img' />
        <div className='center-side-hotel'>
          <div className='flex'>
            <button
              className='h3-hotel-name-d'
              name={JSON.stringify({
                search_session: localStorage.getItem("search_session"),
                hid_undeduplicated: hotel.group.hid_undeduplicated,
                code: hotel.group.code,
                id: hotel.group.id
              })}
              onClick={this.seeRooms}
            >
              {hotel.hotel_name}
            </button>

            {this.createStars(parseInt(hotel.hotel_stars))}
            <span className='type'>{hotel.propertyType || "Hotel"}</span>
          </div>
          <p className='transparency'>{hotel.hotel_address}</p>
        </div>
        <hr className='line-filter' />
        <div className='right-side-hotel'>
          <span>
            {localStorage.getItem("currency") || "SAR"}{" "}
            {hotel.group ? hotel.group.price : 0}
          </span>
          <br />

          <p className='transparency'>
            Total for {this.state.totalDays} nights (incl. VAT)
          </p>
          <button
            className='see-rooms-button'
            name={JSON.stringify({
              search_session: localStorage.getItem("search_session"),
              hid_undeduplicated: hotel.group.hid_undeduplicated,
              code: hotel.group.code,
              id: hotel.group.id
            })}
            onClick={this.seeRooms}
          >
            See Rooms >
          </button>
        </div>
        {this.state.alert ? (
          <div className='alert-danger alert'>{this.state.message} </div>
        ) : null}
      </div>
    );
  }
}
export default Hotel;
