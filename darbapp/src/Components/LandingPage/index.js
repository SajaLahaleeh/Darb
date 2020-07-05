import React, { Component } from "react";

import "./style.css";
import Header from "../../CommonComponents/Header";
import Images from "../Images/index";
import SeoBlockHome from "../SeoBlockHome";
import Slider from "../Slider";
import Footer from "../../CommonComponents/Footer";
import ContactSection from "../ContactSection";
import TopHotels from "../TopHotels";
import Banner from "./../../CommonComponents/Banner";
import SearchBar from "./../../CommonComponents/SearchBar";

export class LandingPage extends Component {
  componentWillMount() {
    localStorage.clear();
  }
  render() {
    return (
      <div>
        <Header naveBarPartOne={true} />
        <div className='banner'>
          <Banner />
          <div className='landing-page-search-bar'>
            <SearchBar />
          </div>
        </div>
        <Images />
        <Slider />
        <SeoBlockHome />
        <TopHotels />
        <hr className='contact-footer-line-d'></hr>
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
