import React from "react";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";

import "./style.css";

class Images extends React.Component {
  render() {
    return (
      <div className='container-images'>
        <div className='container__image1'>
          <img src={image1} className='container__image1-img1' />
          <h2 className='container__image1-title1'>
            Discover more holiday packages
          </h2>
          <p className='container__image1-description1'>
            Check out additional package options available through our call
            centre and retail stores - fully customisable to your needs!
          </p>
          <button className='container__image1-button'>
            View more packages
          </button>
        </div>
        <div className='container__image2'>
          <img src={image2} className='container__image1-img2' />
          <h2 className='container__image1-title2'>
            Don't miss out on the second season of Winter at Tantora
          </h2>
          <p className='container__image1-description2'>
            We have special packages for you!
          </p>
          <button className='container__image1-button2'>
            View more packages
          </button>
        </div>
      </div>
    );
  }
}

export default Images;
