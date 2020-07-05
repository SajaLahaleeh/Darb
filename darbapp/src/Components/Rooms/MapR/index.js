import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

import { PlaceMarker } from "../../PlaceMarker";
import "./index.css";

const AirbnbMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    onZoomChanged={props.handleMapChanged}
    onDragEnd={props.handleMapChanged}
    onBoundsChanged={props.handleMapFullyLoaded}
    defaultCenter={props.center}
    defaultZoom={props.zoom}
  >
    {props.places.length > 0 &&
      arrayplaces.map((place, i) => (
        <PlaceMarker
          key={`place${i}`}
          id={i}
          lat={place.hotel_latitude}
          lng={place.hotel_longitude}
          name={place.hotel_name}
        />
      ))}
  </GoogleMap>
));

const arrayplaces = JSON.parse(localStorage.getItem("hotelDetail"))
  ? JSON.parse(localStorage.getItem("hotelDetail")).hotelDetail.hotel.map(
      hotel => {
        return {
          hotel_latitude: hotel.hotel_latitude,
          hotel_longitude: hotel.hotel_longitude,
          hotel_name: hotel.hotel_name
        };
      }
    )
  : [];

export class MapR extends Component {
  constructor(props) {
    super(props);

    this.xMapBounds = { min: null, max: null };
    this.yMapBounds = { min: null, max: null };

    this.mapFullyLoaded = false;
    this.zoom = 7;

    this.state = {
      places: [],
      lat: 25.0515918,
      lng: 55.1357531
    };
  }

  componentDidMount() {
    const location = JSON.parse(localStorage.getItem("locationHotel"));
    this.setState({
      lat: parseFloat(location.lat),
      lng: parseFloat(location.lng)
    });
  }

  handleMapChanged() {
    this.getMapBounds();
    this.setMapCenterPoint();
    this.fetchPlacesFromApi();
  }

  handleMapMounted(map) {
    this.map = map;
  }

  handleMapFullyLoaded() {
    if (this.mapFullyLoaded) return;

    this.mapFullyLoaded = true;
    this.handleMapChanged();
  }

  setMapCenterPoint() {
    this.setState({
      lat: this.map.getCenter().lat(),
      lng: this.map.getCenter().lng()
    });
  }

  fetchPlacesFromApi() {
    this.setState({ place: [] });
    fetch(
      `/api/places?min_lng=${this.xMapBounds.min}&max_lng=${this.xMapBounds.max}&min_lat=${this.yMapBounds.min}&max_lat=${this.yMapBounds.max}`,
      { method: "GET" }
    )
      .then(responce => responce.json())

      .then(responce => this.setState({ places: responce }));
    const place = (
      <PlaceMarker
        lat={50.0515918}
        lng={19.9357531}
        price={20}
        name={"Hotel"}
      />
    );
    this.setState({ places: [place] });
  }

  getMapBounds() {
    var mapBounds = this.map.getBounds();
    var xMapBounds = mapBounds.Ua;
    var yMapBounds = mapBounds.Za;

    this.xMapBounds.min = xMapBounds.i;
    this.xMapBounds.max = xMapBounds.j;

    this.yMapBounds.min = yMapBounds.i;
    this.yMapBounds.max = yMapBounds.j;
  }

  render() {
    const { lat, lng, places } = this.state;
    return (
      <div className='google-map-img-s'>
        <AirbnbMap
          onMapMounted={this.handleMapMounted.bind(this)}
          handleMapChanged={this.handleMapChanged.bind(this)}
          handleMapFullyLoaded={this.handleMapFullyLoaded.bind(this)}
          center={{ lat: lat, lng: lng }}
          zoom={this.zoom}
          places={places}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default MapR;
