import React, { Component } from "react";

import "./index.css";

class Filter extends Component {
  changeRang = ({ target: { name, value } }) => {
    if (name === "min" && value < this.props.state.max)
      this.props.setState({ [name]: value });
    else if (name === "max" && value > this.props.state.min)
      this.props.setState({ [name]: value });
  };
  checkboxChange = ({ target: { name } }) => {
    console.log(name, this.props.state.checkboxs[name], "8888888");
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
    console.log(this.props);

    return (
      <div className='filter'>
        <div className='hotel-name-input-filter'>
          <h2>Filter</h2>
          <hr className='line-filter' />
          <p>Car Name </p>
          <form className='filter-form'>
            <input
              className='filter-text-input'
              type='text'
              placeholder='Search Car Name'
              value={this.props.state.carName}
              name='carName'
              onChange={({ target: { value } }) => {
                console.log(this.props, value, "5555");
                this.props.setState({ carName: value });
              }}
            />
            <input
              className='filter-button'
              type='submit'
              onClick={target => target.preventDefault()}
              // value='.'
            />
          </form>
        </div>
        <hr />
        <div>
          <p>Price</p>
          <div class='slidecontainer'>
            <p className='slider-container-min-price'>
              <span>
                Min {"  :"}
                {this.props.state.min}{" "}
                {localStorage.getItem("currency") || "SAR"}
              </span>
            </p>
            <input
              type='range'
              min='0'
              max={
                this.props.maxPrice
                  ? (this.props.maxPrice + 100).toString()
                  : "10000"
              }
              value={this.props.state.min}
              step='25'
              class='slider'
              name='min'
              onChange={this.changeRang}
            />
          </div>
          <div class='slidecontainer'>
            <p className='slider-container-min-price'>
              <span>
                Max {"  :"}
                {this.props.state.max}{" "}
                {localStorage.getItem("currency") || "SAR"}
              </span>
            </p>
            <input
              type='range'
              min='0'
              max={
                this.props.maxPrice
                  ? (this.props.maxPrice + 100).toString()
                  : "10000"
              }
              value={this.props.state.max}
              step='25'
              class='slider'
              name='max'
              onChange={this.changeRang}
            />
          </div>
        </div>
        <hr />
        <div className='star-rating'>
          <p>Model of Car </p>
          <div className='start-rating-levels'>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              BMW
              {this.createCheckbox("BMW")}
              <span class='checkmark'></span>
            </label>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              Mercedes
              {this.createCheckbox("Mercedes")}
              <span class='checkmark'></span>
            </label>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              Range Rover
              {this.createCheckbox("RangeRover")}
              <span class='checkmark'></span>
            </label>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              Audi
              {this.createCheckbox("Audi")}
              <span class='checkmark'></span>
            </label>
          </div>
        </div>
        <hr />
        <div className='property-type'>
          <p>Passenger Capacity</p>
          <div className='property-type-levels'>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              4 persons
              {this.createCheckbox("persons4")}
              <span class='checkmark'></span>
            </label>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              5 persons
              {this.createCheckbox("persons5")}
              <span class='checkmark'></span>
            </label>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              7 persons
              {this.createCheckbox("persons7")}
              <span class='checkmark'></span>
            </label>
            <label onClick={this.checkboxChange} class='container-checkbox'>
              9 persons
              {this.createCheckbox("persons9")}
              <span class='checkmark'></span>
            </label>
          </div>
        </div>
        <hr />
        <div className='meals'>
          <p>Type of car </p>
          <div className='meals-container-levels'>
            <label
              onClick={this.checkboxChange}
              class='container-checkbox container-checkbox-new-size'
            >
              Car Mini
              {this.createCheckbox("CarMini")}
              <span class='checkmark'></span>
            </label>
            <label
              onClick={this.checkboxChange}
              class='container-checkbox  container-checkbox-new-size'
            >
              Car Economy
              {this.createCheckbox("CarEconomy")}
              <span class='checkmark'></span>
            </label>
            <label
              onClick={this.checkboxChange}
              class='container-checkbox container-checkbox-new-size'
            >
              Special Special
              {this.createCheckbox("SpecialSpecial")}
              <span class='checkmark'></span>
            </label>
            <label
              onClick={this.checkboxChange}
              class='container-checkbox container-checkbox-new-size'
            >
              Car Compact
              {this.createCheckbox("CarCompact")}
              <span class='checkmark'></span>
            </label>
            <label
              onClick={this.checkboxChange}
              class='container-checkbox container-checkbox-new-size'
            >
              Station wagon Compact
              {this.createCheckbox("StationwagonCompact")}
              <span class='checkmark'></span>
            </label>
          </div>
        </div>
        <hr />
        <div className='meals'>
          <p>fuel</p>
          <div className='meals-container-levels'>
            <label
              onClick={this.checkboxChange}
              class='container-checkbox container-checkbox-new-size'
            >
              L2L
              {this.createCheckbox("L2L")}
              <span class='checkmark'></span>
            </label>
            <label
              onClick={this.checkboxChange}
              class='container-checkbox container-checkbox-new-size'
            >
              F2F
              {this.createCheckbox("F2F")}
              <span class='checkmark'></span>
            </label>
          </div>
        </div>
        <hr />
        <div className='meals'>
          <p>transmision</p>
          <div className='meals-container-levels'>
            <label
              onClick={this.checkboxChange}
              class='container-checkbox container-checkbox-new-size'
            >
              Manual
              {this.createCheckbox("Manual")}
              <span class='checkmark'></span>
            </label>
            <label
              onClick={this.checkboxChange}
              class='container-checkbox container-checkbox-new-size'
            >
              Automatic
              {this.createCheckbox("Automatic")}
              <span class='checkmark'></span>
            </label>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
export default Filter;
