import React, { Component } from "react";
import "react-multi-carousel/lib/styles.css";

import cardata from "../../Data/car.js";
import CarCard from "../CarCards";
import MobileDetect from "mobile-detect";
import Carousel from "react-multi-carousel";
import "./style.css";

export class CarSlider extends Component {
  state = {
    cars: cardata.cars,
    car: cardata.cars[0],
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
    const imgArray = cardata.cars.map(index => index.image);
    const modelArray = cardata.cars.map(index => index.model);
    const descriptionArray = cardata.cars.map(index => index.description);
    const fakerData = Array(cardata.cars.length)
      .fill(0)
      .map((item, index) => {
        return {
          image: imgArray[index],
          model: modelArray[index],
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
      <div className='slider-container-s'>
        <h2 className='slider-container-title-s'>Featured cars</h2>
        <Carousel
          responsive={responsive}
          ssr
          infinite={false}
          beforeChange={() => this.setState({ isMoving: true })}
          afterChange={() => this.setState({ isMoving: false })}
          containerClass='first-carousel-container container-s'
          deviceType={this.props.deviceType}
        >
          {cardata.cars.map(card => {
            return <CarCard isMoving={this.state.isMoving} {...card} />;
          })}
        </Carousel>
      </div>
    );
  }
}

export default CarSlider;
