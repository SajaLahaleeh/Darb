import React from "react";
import "./index.css";
import carbanner from "../../assets/carLanding.jpeg";

class BannerImg extends React.Component {
  render() {
    return (
      <div>
        <div className='car-container-s'>
          <img alt='' src={carbanner} className='car-background-s' />
        </div>

        <div className='text-container-s'>
          <h2 className='text-s'>Find a car rental worldwide</h2>
        </div>
      </div>
    );
  }
}
export default BannerImg;
