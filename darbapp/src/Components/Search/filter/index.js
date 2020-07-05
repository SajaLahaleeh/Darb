import React, { Component } from "react";

import Map from "../../Map";
import "./index.css";

class Filter extends Component {
  changeRang = ({ target: { name, value } }) => {
    if (name === "min" && value < this.props.state.max)
      this.props.setState({ [name]: value });
    else if (name === "max" && value > this.props.state.min)
      this.props.setState({ [name]: value });
  };
  checkboxChange = ({ target: { name } }) => {
    this.props.setState({
      checkboxs: {
        ...this.props.state.checkboxs,
        [name]: !this.props.state.checkboxs[name]
      }
    });
  };
  createCheckbox = name =>
    this.props.state.checkboxs[name] ? (
      <input name={name} type='checkbox' checked />
    ) : (
      <input name={name} type='checkbox' />
    );

  render() {
    return (
      <div className='filter'>
        <div className='hotel-name-input-filter'>
          <span className='filter-text-s'>Filter</span>
          <hr className='line-filter' />
          <div className='property-type'>
            {this.props.lat ? (
              <Map lng={this.props.lng} lat={this.props.lat} />
            ) : null}
            <hr />
          </div>
          <p className='hotel-name-text-s'>Hotel Name </p>
          <form className='filter-form'>
            <input
              className='filter-text-input'
              type='text'
              placeholder='Search Hotel Name'
              value={this.props.state.hotelName}
              name='hotelName'
              onChange={({ target: { value } }) =>
                this.props.setState({ hotelName: value })
              }
            />
            <input
              className='filter-button'
              type='submit'
              onClick={target => target.preventDefault()}
            />
          </form>
        </div>
        <hr />
        <div>
          <p className='price-s'>Price</p>
          <div class='slidecontainer-d'>
            <p className='slider-container-min-price'>
              <span className='sar-s'>
                {localStorage.getItem("currency") || "SAR"}:{" "}
                {this.props.state.min}
              </span>
            </p>
            <input
              type='range'
              min='0'
              max={this.props.maxPrice ? this.props.maxPrice : "10000"}
              value={this.props.state.min}
              step='50'
              class='slider'
              name='min'
              onChange={this.changeRang}
            />
          </div>
          <div class='slidecontainer-d'>
            <p className='slider-container-min-price'>
              <span className='sar-s'>
                {localStorage.getItem("currency") || "SAR"}:{" "}
                {this.props.state.max}
              </span>
            </p>
            <input
              type='range'
              min='0'
              max={this.props.maxPrice ? this.props.maxPrice : "10000"}
              value={this.props.state.max}
              step='50'
              class='slider'
              name='max'
              onChange={this.changeRang}
            />
          </div>
        </div>
        <hr className='line-s' />
        <div className='star-rating'>
          <p>Star Rating</p>
          <div className='start-rating-levels'>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              5 Stars
              {this.createCheckbox("stars5")}
              <span class='checkmark'></span>
            </label>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              4 Stars
              {this.createCheckbox("stars4")}
              <span class='checkmark'></span>
            </label>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              3 Stars
              {this.createCheckbox("stars3")}
              <span class='checkmark'></span>
            </label>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              2 Stars
              {this.createCheckbox("stars2")}
              <span class='checkmark'></span>
            </label>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              1 Star
              {this.createCheckbox("star1")}
              <span class='checkmark'></span>
            </label>
          </div>
        </div>
        <hr />

        <hr />
      </div>
    );
  }
}
export default Filter;
