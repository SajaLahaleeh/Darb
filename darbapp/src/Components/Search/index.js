import React, { Component } from "react";
import axios from "axios";

import Header from "../../CommonComponents/Header";
import ContactSection from "../../Components/ContactSection";
import Footer from "../../CommonComponents/Footer";
import Filter from "./filter/";
import Hotel from "./hotel/";
import SearchBar from "./../../CommonComponents/SearchBar";
import "./index.css";

import loading from "../../assets/loading.gif";
import loading2 from "../../assets/Spinner.svg";

export class Search extends Component {
  state = {
    data: "",
    location: 0,
    filterState: {
      min: 0,
      max: 10000,
      hotelName: "",
      checkboxs: {
        stars5: false,
        stars4: false,
        stars3: false,
        stars2: false,
        star1: false,
        hotel: false,
        aparthotel: false,
        apartment: false,
        resort: false,
        lodge: false,
        cottage: false,
        BreakfastIncluded: false,
        BreakfastAndLunchOrDinner: false,
        AllMealsIncluded: false,
        ContinentalBreakfast: false,
        loadingFlag: false
      }
    },
    maxPrice: 10000,
    lng: 0,
    lat: 0
  };
  componentDidMount() {
    const searchBar = JSON.parse(localStorage.getItem("searchBar"));
    const a = {
      location: JSON.parse(
        localStorage.getItem("location")
          ? localStorage.getItem("location")
          : "{}"
      ).location_id,
      checkin: searchBar ? searchBar.checkin : "",
      checkout: searchBar ? searchBar.checkout : "",
      rooms: searchBar ? [...searchBar.rooms] : [],
      currency: localStorage.getItem("currency") || "SAR",
      providers: "110.35",
      nationality: "324667",
      residence: "324667"
    };
    const aa = {
      location: "395671",
      checkin: "2020-03-08",
      checkout: "2020-03-12",
      rooms: [
        {
          adults: 1,
          children: 0,
          children_ages: []
        }
      ],
      currency: "EUR",
      providers: "110.35",
      nationality: "324667",
      residence: "324667"
    };
    const b = {
      search_session: 521804,
      hid_undeduplicated: 4237635,
      id: 28197121,
      code: "Noij8P2eay"
    };
    axios
      .post(`https://darbserver.appspot.com/hotels`, a)
      .then(({ data }) => {
        localStorage.setItem("search_session", data.search_session);
        localStorage.setItem("hotels", JSON.stringify(data.hotels));
        this.setState({
          lat: data.hotels[0].hotel_latitude,
          lng: data.hotels[0].hotel_longitude
        });
        let maxPrice = 10000;
        data.hotels.forEach(hotel => {
          if (hotel.group.price > maxPrice) maxPrice = hotel.group.price + 100;
        });
        this.setState({
          data: data.hotels,
          maxPrice,
          filterState: { ...this.state.filterState, max: maxPrice }
        });
      })
      .catch(err => {
        window.location.href = "/";
        console.log(err);
      });
  }
  setFilterState = filterState =>
    this.setState({
      filterState: { ...this.state.filterState, ...filterState }
    });
  hotels = () => {
    const { checkboxs } = this.state.filterState;
    const starRate =
      checkboxs.stars5 ||
      checkboxs.stars4 ||
      checkboxs.stars3 ||
      checkboxs.stars2 ||
      checkboxs.stars1;
    const propertyType =
      checkboxs.hotel ||
      checkboxs.aparthotel ||
      checkboxs.apartment ||
      checkboxs.resort ||
      checkboxs.lodge ||
      checkboxs.cottage;
    const meals =
      checkboxs.BreakfastIncluded ||
      checkboxs.BreakfastAndLunchOrDinner ||
      checkboxs.AllMealsIncluded ||
      checkboxs.ContinentalBreakfast;
    const stars = [
      checkboxs.stars1,
      checkboxs.stars2,
      checkboxs.stars3,
      checkboxs.stars4,
      checkboxs.stars5
    ];
    const a = [0, 0, 0, 0, 0, 0, 0];
    return !this.state.data
      ? a.map(x => <img src={loading} className='loading-hotels-search' />)
      : this.state.data.map(hotel => {
          if (
            hotel.group.price <= this.state.filterState.max &&
            hotel.group.price >= this.state.filterState.min &&
            hotel.hotel_name
              .toLowerCase()
              .includes(this.state.filterState.hotelName.toLowerCase())
          )
            if (starRate || propertyType || meals) {
              if (starRate && propertyType)
                if (
                  this.state.filterState.checkboxs[
                    hotel.propertyType || "hotel"
                  ] &&
                  stars[hotel.hotel_stars - 1]
                )
                  return (
                    <Hotel
                      setLoadingFlag={() => {
                        this.setState({ loadingFlag: !this.state.loadingFlag });
                      }}
                      hotel={hotel}
                    />
                  );
                else return null;

              if (starRate)
                if (stars[hotel.hotel_stars - 1])
                  return (
                    <Hotel
                      setLoadingFlag={() => {
                        this.setState({ loadingFlag: !this.state.loadingFlag });
                      }}
                      hotel={hotel}
                    />
                  );

              if (propertyType)
                if (
                  this.state.filterState.checkboxs[
                    hotel.propertyType || "hotel"
                  ]
                )
                  return (
                    <Hotel
                      setLoadingFlag={() => {
                        this.setState({ loadingFlag: !this.state.loadingFlag });
                      }}
                      hotel={hotel}
                    />
                  );
            } else
              return (
                <Hotel
                  setLoadingFlag={() => {
                    this.setState({ loadingFlag: !this.state.loadingFlag });
                  }}
                  hotel={hotel}
                />
              );
          return null;
        });
  };

  render() {
    return (
      <div>
        <Header />
        <div className='page-filter-container'>
          <SearchBar se={22} />
          <div className='small-container-d'>
            <Filter
              lng={this.state.lng}
              lat={this.state.lat}
              setState={this.setFilterState}
              state={this.state.filterState}
              maxPrice={this.state.maxPrice}
            />
            <div className='hotels-contener'>
              {!this.state.loadingFlag ? (
                this.hotels()
              ) : (
                <img src={loading2} className='loading-hotels-search' />
              )}
            </div>
          </div>
        </div>
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default Search;
