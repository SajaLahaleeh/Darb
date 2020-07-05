import React, { Component } from "react";

import "./style.css";

import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import whatsapp from "../../assets/whatsapp.png";

export class ContactSection extends Component {
  render() {
    return (
      <div className='contact-section-container'>
        <div>
          <h2>Looking for help?</h2>
          <p>OUR TEAM IS AVAILABLE 24/7</p>
        </div>
        <div className='contact-section-container-phone'>
          <img
            src={phone}
            alt='phone'
            className='contact-section-container-phone-image'
          />
          <span className='contact-section-container-details'>
            <p>CALL US AT:</p>
            <p>
              <strong>920028050</strong>
            </p>
          </span>
        </div>
        <div className='contact-section-container-mail'>
          <img
            src={mail}
            alt='mail'
            className='contact-section-container-mail-image'
          />
          <span>
            <p>OR YOU CAN EMAIL US AT: </p>
            <p>
              {" "}
              <strong>info@darbtravel.com</strong>
            </p>
          </span>
        </div>
        <div className='contact-section-container-whatsapp'>
          <img
            src={whatsapp}
            alt='whatsapp'
            className='contact-section-container-whatsapp-image'
          />
          <span>
            <p>GET SUPPORT VIA WHATSAPP: </p>
            <p>
              <strong>+966500152747</strong>
            </p>
          </span>
        </div>
      </div>
    );
  }
}

export default ContactSection;
