import React, { Component } from "react";
import { InfoWindow } from "react-google-maps";

export class PlaceInfoWindow extends Component {
  render() {
    const { name, price } = this.props;

    return (
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div>
          <h4>{name}</h4>
          <br />
          <span>{price}</span>
        </div>
      </InfoWindow>
    );
  }
}

export default PlaceInfoWindow;
