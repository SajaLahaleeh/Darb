import React, { Component } from "react";
import Header from "../../CommonComponents/Header";
import LandingPageCar from "../LandingPageCar";
import BannerImg from "../BannerImg";
import ContactSection from "../../Components/ContactSection";
import Footer from "../../CommonComponents/Footer";
import CarSlider from "../CarSlider";
class HomePageCar extends Component {
  componentDidMount() {
    localStorage.clear();
  }
  render() {
    return (
      <div>
        <Header />
        <BannerImg />
        <CarSlider />
        <LandingPageCar />
        <hr className='contact-footer-line-d'></hr>
        <ContactSection />
        <Footer />
      </div>
    );
  }
}
export default HomePageCar;
