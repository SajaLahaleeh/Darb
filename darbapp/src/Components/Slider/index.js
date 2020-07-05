import React, { Component } from "react";
import "react-multi-carousel/lib/styles.css";
import MobileDetect from "mobile-detect";
import Carousel from "react-multi-carousel";

import dataO from "../../Data/offer.js";
import Card from "../Cards";
import "./style.css";

export class Slider extends Component {
  state = {
    offers: dataO.offers,
    offer: dataO.offers[0],
    isMoving: false
  };

  static getInitialProps({ req }) {
    let userAgent;
    let deviceType;
    if (req) {
      userAgent = req.headers["user-agent"];
    } else {
      userAgent = navigator.userAgent;
    }
    const md = new MobileDetect(userAgent);
    if (md.tablet()) {
      deviceType = "tablet";
    } else if (md.mobile()) {
      deviceType = "mobile";
    } else {
      deviceType = "desktop";
    }
    return { deviceType };
  }

  render() {
    const imgArray = dataO.offers.map(index => index.image);
    const descriptionArray = dataO.offers.map(index => index.description);
    const titleArray = dataO.offers.map(index => index.title);
    const fakerData = Array(dataO.offers.length)
      .fill(0)
      .map((item, index) => {
        return {
          image: imgArray[index],
          headline: titleArray[index],
          description: descriptionArray[index] || descriptionArray[0]
        };
      });

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
    };

    return (
      <div className='slider-container'>
        <h2 className='slider-container-title'>Travel Offers</h2>
        <p className='slider-container-description'>
          Explore the world with deals on flights, hotels & more
        </p>
        <Carousel
          responsive={responsive}
          ssr
          infinite={false}
          beforeChange={() => this.setState({ isMoving: true })}
          afterChange={() => this.setState({ isMoving: false })}
          containerClass='first-carousel-container'
          deviceType={this.props.deviceType}
        >
          {dataO.offers.map(card => {
            return <Card isMoving={this.state.isMoving} {...card} />;
          })}
        </Carousel>
      </div>
    );
  }
}

export default Slider;
