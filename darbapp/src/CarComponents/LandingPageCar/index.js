import React from "react";
import axios from "axios";
import Example from "../../cal";

import "./style.css";

class LandingPageCar extends React.Component {
  state = {
    cityFrom: "",
    citiesFrom: [],
    country: [],
    destineation: "",
    destineations: [],
    location: "",
    fromDate: "",
    toDate: "",
    cal: 1,
    cal2: 0,
    checkin: "",
    checkout: "",
    from_h: "10:00",
    to_h: "10:00",
    age: "",
    location_from_id: "",
    selected_location_type: "",
    return_at_other_location: "",
    location_return_text: "",
    location_return_id: "",
    selected_location_return_type: "",
    nationality: "",
    flagCalender: false,
    flagList: false,
    checkedReturnPlace: false,
    returnPlace: "",
    flagList2: false,
    returCities: [],
    countries: []
  };

  handleChange = event => {
    const input = event.target.value;
    this.setState({ [event.target.name]: input }, () => {
      axios
        .get(
          `https://darbserver.appspot.com/location/${this.state.destineation}`
        )
        .then(({ data: { data } }) => {
          this.setState({ destineations: data, flagList: 1 });
        })
        .catch(err => {
          console.log(err, "errrrrrr");
        });
    });
  };
  handleChange2 = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      axios(`https://darbserver.appspot.com/country/${this.state.cityFrom}`)
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

  handleChange3 = event => {
    const input = event.target.value;
    this.setState({ [event.target.name]: input }, () => {
      axios
        .get(
          `https://darbserver.appspot.com/location/${this.state.returnPlace}`
        )
        .then(({ data: { data } }) => {
          this.setState({ returCities: data, flagList2: 0 });
        })
        .catch(err => {
          console.log(err, "errrrrrr");
        });
    });
  };
  ageChange = event => {
    const input = event.target.value;
    input < 18 ? null : this.setState({ [event.target.name]: input });
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

  onChangeTime = time => {
    this.setState({ from_h: time });
  };
  onChangeTime2 = time => {
    this.setState({ to_h: time });
  };
  findCar = event => {
    event.preventDefault();
    const informationData = {
      date_from: this.state.fromDate,
      from_hour: this.state.from_h,
      date_return: this.state.toDate,
      return_hour: this.state.to_h,
      currency: localStorage.currency || "SAR",
      age: this.state.age,
      location_from_text: this.state.destineation,
      location_from_id: this.state.location_from_id,
      selected_location_type: this.state.selected_location_type,
      return_at_other_location: 0,
      location_return_text: "",
      location_return_id: "",
      selected_location_return_type: "",
      nationality: "324741"
    };
    localStorage.setItem("informationData", JSON.stringify(informationData));
    localStorage.setItem("searchBarCar", JSON.stringify(this.state));
    window.location.href = "/cars/search";
  };
  handleChangeReturn = () => {
    this.setState({
      checkedReturnPlace: !this.state.checkedReturnPlace
    });
  };
  componentDidMount() {
    const oldState = localStorage.getItem("searchBarCar")
      ? JSON.parse(localStorage.getItem("searchBarCar"))
      : {};
    this.setState({ ...oldState });
    document.addEventListener("click", ({ path }) => {
      const flagCalender = path
        .map(x => x.className)
        .filter(cName => cName === "RangeExample" || cName === "date-button")
        .length;
      this.setState({
        flagCalender
      });
    });
  }
  createHours = () => {
    const optionsHours = [];
    for (let i = 0; i < 24; ++i)
      optionsHours.push(<option>{i > 9 ? i : "0" + i}</option>);
    return optionsHours;
  };
  createMins = () => {
    const optionsHours = [];
    for (let i = 0; i < 45; i += 15)
      optionsHours.push(<option>{i ? i : "00"}</option>);
    return optionsHours;
  };

  timeChange = ({ target: { name, value } }) => {
    if (name === "from_h_H") {
      let t = this.state.from_h;
      t = value + ":" + t.split(":")[1];
      this.setState({ from_h: t });
    }
    if (name === "from_h_M") {
      let t = this.state.from_h;
      t = t.split(":")[0] + ":" + value;
      this.setState({ from_h: t });
    }
    if (name === "to_h_H") {
      let t = this.state.to_h;
      t = value + ":" + t.split(":")[1];
      this.setState({ to_h: t });
    }
    if (name === "to_h_M") {
      let t = this.state.to_h;
      t = t.split(":")[0] + ":" + value;
      this.setState({ to_h: t });
    }
  };

  render() {
    return (
      <div className='main-container-search-bar-s'>
        <div className='search-car-banner-s'>
          <div className='search-bar-container-s'>
            <form className={"search-form-s" + (this.props.s ? " aaa" : "")}>
              <div className='date-time-container'>
                <input
                  name='destineation'
                  placeholder='Where are you going'
                  className='input-search-s'
                  onChange={this.handleChange}
                  value={this.state.destineation}
                  autoComplete='off'
                />
                {this.state.destineation && this.state.flagList ? (
                  <ul className='countries-list-s'>
                    {this.state.destineations
                      .filter(destineation =>
                        destineation.airport_name
                          .toLocaleLowerCase()
                          .includes(this.state.destineation)
                      )
                      .map(destineation => (
                        <li
                          className='countries-item-s'
                          value={destineation.airport_id}
                          onClick={({ target }) =>
                            this.setState({
                              destineation: destineation.airport_name,
                              location_from_id: destineation.airport_iata,
                              selected_location_type:
                                destineation.location_type,
                              return_at_other_location: 0,
                              location_return_text: "",
                              location_return_id: "",
                              selected_location_return_type: "",
                              nationality: "324741",
                              location: destineation
                            })
                          }
                        >
                          {destineation.airport_name}
                        </li>
                      ))}
                  </ul>
                ) : null}{" "}
                <input
                  name='cityFrom'
                  placeholder='place of residency'
                  className='input-search-s'
                  onChange={this.handleChange2}
                  value={this.state.cityFrom}
                  autoComplete='off'
                />
                {this.state.country ? (
                  <ul className='countries-list-s2'>
                    {this.state.countries
                      .filter(cityFrom =>
                        cityFrom.location_name
                          .toLocaleLowerCase()
                          .includes(this.state.cityFrom)
                      )
                      .map(cityFrom => (
                        <li
                          value={cityFrom.location_id}
                          onClick={({ target }) =>
                            this.setState({
                              cityFrom: target.innerText.split("  ")[0],
                              location: cityFrom
                            })
                          }
                        >
                          {cityFrom.location_name +
                            ", " +
                            cityFrom.region_name +
                            "  ( " +
                            cityFrom.country_name +
                            ")"}
                        </li>
                      ))}
                  </ul>
                ) : null}
                <div className='pickup-date-time-container'>
                  <button
                    className='date-button'
                    onClick={e => {
                      e.preventDefault();
                      localStorage.getItem("search_session") &&
                      this.state.cal === 0
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
                  />
                  {this.state.cal === 1 && this.state.flagCalender ? (
                    <Example
                      setDays={({ start, end }) => {
                        if (
                          start &&
                          end &&
                          (start !== this.state.fromDate ||
                            end !== this.state.toDate)
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
                  <div className='time-date-car-d'>
                    {this.state.checkin ? (
                      <span className='to-date-sa'>
                        From:{" "}
                        {this.state.checkin
                          .split("-")
                          .reverse()
                          .join("-")}
                      </span>
                    ) : null}
                    {this.state.checkin ? (
                      <span className='to-date-sa'>
                        To: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {this.state.checkout
                          .split("-")
                          .reverse()
                          .join("-")}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className='date-time-container'>
                <div className='return-date-time-container'>
                  <div className='hr-ms-d'>
                    <div className='hr-ms-div-d'>
                      <span className='h-and-m-s'>Hour</span>
                      <select
                        className='border-select-d'
                        onChange={this.timeChange}
                        name='from_h_H'
                        value={this.state.from_h.split(":")[0]}
                      >
                        {this.createHours()}
                      </select>
                    </div>
                    <div className='hr-ms-d'>
                      <span className='h-and-m-s'>Minutes</span>
                      <select
                        className='border-select-d'
                        onChange={this.timeChange}
                        name='from_h_M'
                        value={this.state.from_h.split(":")[1]}
                      >
                        {this.createMins()}
                      </select>
                    </div>
                  </div>

                  <div className='hr-ms-d'>
                    <div className='hr-ms-div-d'>
                      <span className='h-and-m-s'>Hour</span>
                      <select
                        className='border-select-d'
                        onChange={this.timeChange}
                        name='to_h_H'
                        value={this.state.to_h.split(":")[0]}
                      >
                        {this.createHours()}
                      </select>
                    </div>
                    <div className='hr-ms-d'>
                      <span className='h-and-m-s'>Minutes</span>
                      <select
                        className='border-select-d'
                        onChange={this.timeChange}
                        name='to_h_M'
                        value={this.state.to_h.split(":")[1]}
                      >
                        {this.createMins()}
                      </select>
                    </div>
                  </div>
                </div>
                <div className='age-input-s'>
                  <span className='age-s'>Age</span>
                  <input
                    type='number'
                    className='age-input'
                    placeholder='+18'
                    onChange={this.ageChange}
                    name='age'
                  />
                </div>
                <div className='container-checkbox-return-place-d'>
                  <div>
                    <input
                      type='checkbox'
                      checked={this.state.checkedReturnPlace}
                      onChange={this.handleChangeReturn}
                    />
                    <label className='checkBtnReturnPlace'>
                      Deliver to another place
                    </label>
                  </div>

                  {this.state.checkedReturnPlace && (
                    <div>
                      <input
                        name='returnPlace'
                        placeholder='Place of reside'
                        className='return-place-d'
                        onChange={this.handleChange3}
                        value={this.state.returnPlace}
                        autoComplete='off'
                      />
                      {this.state.returnPlace && !this.state.flagList2 ? (
                        <ul className='countries-list-return-d'>
                          {this.state.returCities
                            .filter(returnPlace =>
                              returnPlace.airport_name
                                .toLocaleLowerCase()
                                .includes(this.state.returnPlace)
                            )
                            .map(returnPlace => (
                              <li
                                className='countries-item-s'
                                value={returnPlace.airport_id}
                                onClick={({ target }) =>
                                  this.setState({
                                    returnPlace: returnPlace.airport_name
                                  })
                                }
                              >
                                {returnPlace.airport_name}
                              </li>
                            ))}
                        </ul>
                      ) : null}
                    </div>
                  )}
                </div>
                ;
                <button className='find-car' onClick={this.findCar}>
                  Find car
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPageCar;
