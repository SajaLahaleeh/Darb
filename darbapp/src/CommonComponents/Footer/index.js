import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <div>
          <h3>Corporate</h3>
          <ul>
            <li>About US</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li>Terms & conditions</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h3>Social media</h3>
          <ul>
            <li>Facebook</li>
            <li>Linkedln</li>
            <li>instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
            <li>snapchat</li>
          </ul>
        </div>
        <div>
          <h3>Countries</h3>
          <ul>
            <li>Saudi arabia</li>
            <li>Kuwait</li>
            <li>United arab Emirates</li>
            <li>Bahrain</li>
            <li>Worlswide</li>
            <br />
            <br />
          </ul>
        </div>
      </div>
    );
  }
}
export default Footer;
