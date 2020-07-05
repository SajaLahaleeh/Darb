import React from "react";
import axios from "axios";

import Example from "./../../cal";
import MoreOption from "./MoreOption";
import "./style.css";

import locationImg from "./../../assets/pin.png";
import fromImg from "./../../assets/from.svg";
import personImg from "../../assets/person.png";
import searchImg from "../../assets/search.svg";

export class SearchBar extends React.Component {
  state = {
    moreOptions: "More options",
    calarr: ["from-hide", "from-show"],
    cal: 1,
    cal2: 0,
    select: 0,
    checkin: "",
    checkout: "",
    country: [],
    date: new Date(),
    fromDate: "",
    toDate: "",
    countries: [],
    options: [
      {
        adults: 2,
        children: 0,
        children_ages: []
      },
      {
        adults: 1,
        children: 0,
        children_ages: []
      },
      {
        adults: 1,
        children: 0,
        children_ages: []
      }
    ],
    rooms: [
      {
        adults: 1,
        children: 0,
        children_ages: []
      }
    ],
    flagMoreOption: true,
    flagCalender: false
  };
  componentDidUpdate() {
    const rooms = this.state.rooms;
    let moreOptions = "";
    let adults = 0;
    let children = 0;
    if (rooms) {
      rooms.forEach(room => (adults += room.adults));
      rooms.forEach(room => (children += room.children));

      moreOptions =
        rooms.length +
        (rooms.length > 1 ? " Rooms, " : " Room, ") +
        adults +
        (adults > 1 ? " Adults, " : " Adult, ") +
        children +
        (children > 1 ? " Children" : " Child");
      if (this.state.moreOptions != moreOptions && this.state.select == 2)
        this.setState({ moreOptions });
    }
  }
  componentDidMount() {
    document.addEventListener("click", ({ path }) => {
      const flagMoreOption = path
        .map(x => x.className)
        .filter(
          cName => cName === "search-bar-select" || cName === "more-option"
        ).length;
      const flagCalender = path
        .map(x => x.className)
        .filter(cName => cName === "calender-conteaner").length;
      this.setState({
        flagMoreOption,
        flagCalender
      });
    });
    let searchBar = localStorage.getItem("searchBar")
      ? JSON.parse(localStorage.getItem("searchBar"))
      : null;

    localStorage.getItem("searchBar")
      ? this.setState({
          ...searchBar,
          fromDate: new Date(searchBar.fromDate),
          toDate: new Date(searchBar.toDate)
        })
      : null;
  }
  inputChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      axios(`https://darbserver.appspot.com/country/${this.state.country}`)
        .then(({ data: { locations } }) => {
          this.setState({
            countries: locations,
            location: locations ? locations[0] : null
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
  };
  search = event => {
    event.preventDefault();
    localStorage.setItem("location", JSON.stringify(this.state.location));
    localStorage.setItem("searchBar", JSON.stringify(this.state));
    window.location.href = `/search`;
    const a = {
      location: "395671",
      checkin: "2020-03-08",
      checkout: "2020-03-12",
      rooms: [
        {
          adults: "1",
          children: "0",
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
  };
  onChange = cal => {
    this.setState({
      fromDate: cal,
      checkin: new Date(cal).toISOString().split("T")[0]
    });
  };
  onChange2 = cal => {
    this.setState({
      cal2: 1,
      toDate: cal,
      checkout: new Date(cal).toISOString().split("T")[0]
    });
  };

  render() {
    const classname = this.props.se
      ? "search-bar-big-contener2"
      : "search-bar-big-contener";
    return (
      <div className={classname}>
        <form className='search-bar'>
          <div className='input-search-container-location'>
            <input
              className='input-search'
              onChange={this.inputChange}
              type='search'
              name='country'
              autoComplete='off'
              placeholder='Search for hotels or places'
              value={this.state.country}
            />
            <img src={locationImg} className='location-icon' alt='' />
          </div>

          <div className='calender-conteaner'>
            <button
              onClick={e => {
                e.preventDefault();
                localStorage.getItem("search_session") && this.state.cal === 0
                  ? this.setState({
                      checkin: null,
                      checkout: null,
                      fromDate: "",
                      toDate: ""
                    })
                  : null;

                this.setState({
                  cal2: 1
                });
              }}
              className='img-button1'
            >
              <img src={fromImg} alt='' className='from-img' />
            </button>

            {this.state.checkin ? (
              <div className='span-calender-d'>
                <span style={{ color: "#fff" }}>
                  From:{" "}
                  {this.state.checkin
                    .split("-")
                    .reverse()
                    .join("-")}
                </span>
                <br />
                <span style={{ color: "#fff" }}>
                  To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {this.state.checkout
                    .split("-")
                    .reverse()
                    .join("-")}
                </span>
              </div>
            ) : null}
            {this.state.cal === 1 && this.state.flagCalender ? (
              <Example
                setDays={({ start, end }) => {
                  if (
                    start &&
                    end &&
                    (start !== this.state.fromDate || end !== this.state.toDate)
                  ) {
                    this.onChange(start);
                    this.onChange2(end);
                  }
                }}
                defa={{
                  from: this.state.fromDate,
                  to: this.state.toDate
                }}
              />
            ) : null}
          </div>

          <div className='img-input-div'>
            <img src={personImg} alt='' className='person-img' />
            
            <select
              className='search-bar-select'
              onChange={({ target }) => {
                this.setState({
                  rooms: [this.state.options[target.value]],
                  select: target.value,
                  flagMoreOption: true
                });
              }}
              name='select'
              value={this.state.select}
            >
              <option value={0}>1 Room, 2 Adults, 0 Children</option>
              <option value={1}>1 Room, 1 Adult, 0 Children</option>
              <option value={2}>{this.state.moreOptions}</option>
            </select>
          </div>

         

          <input type='submit' onClick={this.search} value='Search hotels' />
          <img src={searchImg} className='search-img' alt='' />
        </form>

        {this.state.country ? (
          <ul className='countries-list'>
            {this.state.countries
              .filter(country =>
                country.location_name
                  .toLocaleLowerCase()
                  .includes(this.state.country)
              )
              .map(country => (
                <li
                  value={country.location_id}
                  onClick={({ target }) =>
                    this.setState({
                      country: target.innerText.split("  ")[0],
                      location: country
                    })
                  }
                >
                  {country.location_name +
                    ", " +
                    country.region_name +
                    "  ( " +
                    country.country_name +
                    ")"}
                </li>
              ))}
          </ul>
        ) : null}
        {this.state.select == 2 && this.state.flagMoreOption ? (
          <MoreOption
            rooms={this.state.rooms}
            setRooms={rooms => {
              this.setState({ rooms });
            }}
          />
        ) : null}
      </div>
    );

  }
}

export default SearchBar;
