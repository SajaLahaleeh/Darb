import React, { Component } from "react";

import topHotelsResult from "../../Data/hotel";
import "./style.css";

export class TopHotels extends Component {
  state = {
    hotelsResultDestinations: false,
    hotelsResultTop: false,
    hotelsResultCountries: false,
    list: []
  };

  hotelsResult = event => {
    const { value, name } = event.target;
    this.setState({
      list: topHotelsResult[name].map(x => {
        return <li className='top-hotels-items'>{x}</li>;
      })
    });
  };
  componentDidMount = () => {
    this.setState({
      list: topHotelsResult.hotelsResultDestinations.map(x => {
        return <li className='top-hotels-items'>{x}</li>;
      })
    });
  };

  render() {
    return (
      <div>
        <div className='top-hotels-container' id='top-hotels'>
          <button
            onClick={this.hotelsResult}
            name='hotelsResultDestinations'
            value={this.state.hotelsResultDestinations}
            className='top-hotels-container-destination'
          >
            {" "}
            Top Hotels Destinations
          </button>
          <button
            onClick={this.hotelsResult}
            name='hotelsResultTop'
            className='top-hotels-container-destination'
          >
            {" "}
            Top Hotels{" "}
          </button>
          <button
            onClick={this.hotelsResult}
            name='hotelsResultCountries'
            className='top-hotels-container-destination'
          >
            {" "}
            Top Hotels in countries{" "}
          </button>
        </div>
        <hr className='hr-line-top-d'></hr>
        <div className='top-hotels-list'>
          <ul className='top-hotels-list'>{this.state.list}</ul>
        </div>
      </div>
    );
  }
}

export default TopHotels;
