import React from "react";
import "./index.css";

import BannerImg from "./../../assets/bnr3.jpg";

const Banner = () => {
  return (
    <div className='MainConteaner'>
      <div className='ImgConteaner'>
        <img src={BannerImg} className='BannerImg' />
      </div>

      <div className='titel'>
        <h1 className='HeaderOne'>LET'S BOOK YOUR NEXT TRIP</h1>
        <h4 className='HeaderFour'>
          Choose from over 1.5 million hotels worldwide!
        </h4>
      </div>
    </div>
  );
};
export default Banner;
