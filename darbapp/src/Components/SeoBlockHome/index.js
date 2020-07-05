import React, { Component } from "react";

import "./style.css";

import building from "../../assets/building.svg";
import zoom from "../../assets/zoom.svg";
import global from "../../assets/global.svg";
import download from "../../assets/download.svg";

export class SeoBlockHome extends Component {
  render() {
    return (
      <div className='seo-block-container'>
        <div className='seo-block-item'>
          <img src={building} alt='buildin icon ' className='building-icon1' />
          <h3>Choose from Over 1 Million Hotels </h3>
          <p>
            Book hotels with Darb at affordable prices, from cheap hotels to
            luxury accommodations, for any kind of stay. Compare rates and
            choose from over 1 million hotels around the world with Darb.
          </p>
        </div>
        <div className='seo-block-item'>
          <img src={zoom} alt='search icon ' className='search-icon2' />
          <h3>Quick and Easy Hotel Search </h3>
          <p>
            Online hotel booking in any destination is easy with Darb. Compare
            prices, amenities, and star rating and pick your favourite based on
            location, convenience, dining options and more.
          </p>
        </div>
        <div className='seo-block-item'>
          <img src={global} alt='global icon' className='global-icon3' />
          <h3>Exclusive Choice of Hotels at Affordable Prices </h3>
          <p>
            Browse for cheap hotels, compare rates and get the best deals on
            hotel bookings with Darb. Book hotels online and choose from
            affordable rates with special discounts, for a stay at
            budget-friendly prices.
          </p>
        </div>
        <div className='seo-block-item'>
          <img src={download} alt='download icon' className='download-icon4' />
          <h3>Book Hotels at Your Own Comfort With Darb App </h3>
          <p>
            Download the Darb app for free on Google Play and the App Store and
            get access to the best hotel booking deals right at your fingertips.
            Choose and book hotels on the app in a few simple steps.
          </p>
        </div>
      </div>
    );
  }
}

export default SeoBlockHome;
