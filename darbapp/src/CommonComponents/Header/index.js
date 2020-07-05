import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import darblogo from "../../assets/darblogo.png";
import arrowDown from "../../assets/arrow-down.svg";
import menu from "../../assets/menu.svg";
import bed from "../../assets/bed.svg";
import car from "../../assets/car.png";
import flight from "../../assets/plane.png";
import football from "../../assets/sport.png";

const LanguageList = [
  {
    value: "English",
    label: "English"
  },
  {
    value: "Arabic",
    label: "Arabic"
  }
];

const CurancyList = [
  {
    value: "SAR",
    label: "Saudi Riyal"
  },
  {
    value: "AED",
    label: "United Arab Emirates Derham"
  },
  {
    value: "QAR",
    label: "Qatari Riyal"
  },
  {
    value: "KWD",
    label: "Kuwaiti Denar"
  },
  {
    value: "BHD",
    label: "Bahrini Denar"
  },
  {
    value: "USD",
    label: "US Dolar"
  },
  {
    value: "EUR",
    label: "Euro"
  },
  {
    value: "GBP",
    label: "British Pound Strling"
  },
  {
    value: "EGP",
    label: "Egyption Pound"
  },
  {
    value: "INR",
    label: "Indian Rupee"
  }
];
class Header extends React.Component {
  state = {
    currency: "SAR",
    language: "اللغة"
  };
  componentDidMount() {
    localStorage.getItem("currency")
      ? this.setState({ currency: localStorage.getItem("currency") })
      : null;
    localStorage.getItem("language")
      ? this.setState({ language: localStorage.getItem("language") })
      : null;
  }
  handleChangeCurrency = selectedOption => {
    this.setState({
      currency: selectedOption.value
    });
    localStorage.setItem("currency", selectedOption.value);
  };
  handleChangeLanguage = selectedOption => {
    this.setState({
      language: selectedOption.value
    });
    localStorage.setItem("language", selectedOption.value);
  };
  render() {
    const { currency, language } = this.state;

    return (
      <div className='NavBar'>
        <Link to='/'>
          <img src={darblogo} className='NavBarLogo' alt='' />
        </Link>

        <img src={menu} className='menu-img' alt='' />

        {this.props.naveBarPartOne || 1 ? (
          <div className='NavBarPartOne'>
            <div className='eachlogo'>
              <img src={bed} className='bedlogo' alt='' />
              <span className='Text'>
                <Link to='/' className='Text'>
                  Hotels
                </Link>
              </span>
            </div>

            <div className='eachlogo'>
              <img src={car} className='CarLogo' alt='' />
              <span className='Text'>
                <Link to='/cars' className='Text'>
                  Car
                </Link>
              </span>
            </div>

            <div className='eachlogo'>
              <img src={flight} className='FlightLogo' alt='' />
              <span className='Text'>Flight</span>
            </div>
            <div className='eachlogo'>
              <img src={football} className='FootballLogo' alt='' />
              <span className='Text'>Football</span>
            </div>
          </div>
        ) : null}

        <div className='NavBarPartTow'>
          <label className='curncy-lang' for='nav-toggle'>
            <span
              className='curncy-t'
              id='curncy-t'
              onClick={() => {
                document.getElementById("nav-toggle2").checked = false;
              }}
            >
              {this.state.currency}
            </span>
            <img src={arrowDown} className='arrow-down' />
          </label>
          <input type='checkbox' className='nav-toggle' id='nav-toggle' />
          <nav className='nav1'>
            <ul className='list1'>
              {CurancyList.map(element => (
                <li
                  className='list-item-1'
                  onClick={() => {
                    var result = element.value;
                    element = result.value;
                    this.setState({ currency: result });
                    localStorage.setItem("currency", result);
                    document.getElementById("nav-toggle").checked = false;
                    window.location.reload(false);
                  }}
                >
                  <a className='item' href='#'>
                    {element.value}
                    &nbsp;&nbsp;&nbsp;
                    {element.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <label className='curncy-lang' for='nav-toggle2'>
            <span
              className='language-t'
              id='language-t'
              onClick={() => {
                document.getElementById("nav-toggle").checked = false;
              }}
            >
              {this.state.language}
            </span>
            <img src={arrowDown} className='arrow-down' />
          </label>
          <input type='checkbox' className='nav-toggle2' id='nav-toggle2' />
          <nav className='nav2'>
            <ul className='list2'>
              {LanguageList.map(element => (
                <li
                  className='list-item-2'
                  onClick={() => {
                    var languageResult = element.value;
                    element = languageResult.value;
                    this.setState({ language: languageResult });

                    localStorage.setItem("language", languageResult);
                    document.getElementById("nav-toggle2").checked = false;
                  }}
                >
                  <a className='item' href='#'>
                    {element.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className=''>
            <span className='Text'>Retrieve my booking</span>
          </div>
          <span className=''>
            <Link to='/login' className='Text'>
              SignIn
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
