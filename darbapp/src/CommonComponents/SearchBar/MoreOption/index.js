import React from "react";

import "./style.css";

class MoreOption extends React.Component {
  state = {
    bedSvg: (
      <svg
        focusable='false'
        color='inherit'
        fill='currentcolor'
        aria-hidden='true'
        role='presentation'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid meet'
        size='24'
        width='24'
        height='24'
        className=''
      >
        <path d='M23.61,37.9a4.91,4.91,0,0,0-4.92,4.95v3.32a4.93,4.93,0,0,0,4.92,4.95H50c0.13,0,.24-0.07.39-0.07s0.26,0.07.39,0.07h26.4a4.91,4.91,0,0,0,4.92-4.95V42.84a4.93,4.93,0,0,0-4.92-4.95H50.79a2.44,2.44,0,0,0-.39.07c-0.13,0-.24-0.07-0.39-0.07H23.61ZM6.24,18.29a4.91,4.91,0,0,0-4.92,4.95V49.61a2.44,2.44,0,0,0,.07.39c0,0.13-.07.26-0.07,0.39v26.4a4.93,4.93,0,0,0,4.92,4.95H9.58a4.91,4.91,0,0,0,4.92-4.95V68.07h71v8.72a4.93,4.93,0,0,0,4.95,4.95h3.32a4.93,4.93,0,0,0,4.95-4.95V50.39a4.93,4.93,0,0,0-4.95-4.95H90.42a4.93,4.93,0,0,0-4.95,4.95v4.56h-71V50.39A2.44,2.44,0,0,0,14.44,50c0-.13.07-0.24,0.07-0.39V23.21a4.93,4.93,0,0,0-4.92-4.95H6.24v0Z'></path>
      </svg>
    ),
    addSvg: (
      <svg
        focusable='false'
        color='inherit'
        fill='currentcolor'
        aria-hidden='true'
        role='presentation'
        viewBox='0 0 150 150'
        preserveAspectRatio='xMidYMid meet'
        size='24'
        width='24'
        height='24'
        className=''
      >
        <path d='M75 0C33.6 0 0 33.6 0 75s33.6 75 75 75 75-33.6 75-75S116.4 0 75 0zm33.6 82.8H84.9v25.8c0 4.9-5.1 8.8-10 8.8s-10-3.9-10-8.8V82.8H41.4c-5 0-9-4-9-9s4-9 9-9h23.5V41.4c0-4.8 5.2-8.8 10-8.8s10 3.9 10 8.8v23.5h23.7c5 0 9 4 9 9s-4 8.9-9 8.9z'></path>
      </svg>
    ),
    rooms: [],
    flag: true
  };
  adultsChange = ({ target }) => {
    this.props.setRooms(
      this.props.rooms.map((room, i) => {
        i + 1 == parseInt(target.name)
          ? (room.adults = parseInt(target.value))
          : null;
        return room;
      })
    );
  };
  childrenChange = ({ target }) => {
    let newRoom = {
      adults: this.props.rooms[parseInt(target.name) - 1].adults,
      children: parseInt(target.value),
      children_ages: this.props.rooms[parseInt(target.name) - 1].children_ages
    };

    const size = parseInt(target.name);
    function resize(size) {
      while (newRoom.children_ages.length > size) {
        newRoom.children_ages.pop();
      }
      while (newRoom.children_ages.length < size) {
        newRoom.children_ages.push(0);
      }

      return newRoom;
    }
    this.props.setRooms(
      this.props.rooms.map((room, i) => {
        i + 1 == parseInt(target.name) ? (room = resize(target.value)) : null;

        return room;
      })
    );
  };
  childrenAgesChange = ({ target }) => {
    const { roomNo, childNo } = JSON.parse(target.name);
    this.props.setRooms(
      this.props.rooms.map((room, i) => {
        i + 1 == parseInt(roomNo)
          ? room.children_ages
            ? (room.children_ages[parseInt(childNo)] = parseInt(target.value))
            : null
          : null;
        return room;
      })
    );
  };
  adultsOptions = (x, roomNo) => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0];

    return (
      <select
        onChange={this.adultsChange}
        name={`${roomNo}`}
        className='select-more-option'
      >
        {arr.map((n, i) =>
          i + 1 == x ? (
            <option selected value={`${i + 1}`}>
              {i + 1} Adult{i > 0 ? "s" : null}
            </option>
          ) : (
            <option value={`${i + 1}`}>
              {i + 1} Adult{i > 0 ? "s" : null}
            </option>
          )
        )}
      </select>
    );
  };
  childrenOptions = (x, roomNo) => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0];
    return (
      <select
        onChange={this.childrenChange}
        name={`${roomNo}`}
        className='select-more-option'
      >
        {arr.map((n, i) =>
          i == x ? (
            <option selected value={`${i}`}>
              {i} {i == 1 ? "Child" : "Children"}
            </option>
          ) : (
            <option value={`${i}`}>
              {i} {i == 1 ? "Child" : "Children"}
            </option>
          )
        )}
      </select>
    );
  };
  childrenAgesOptions = (x, roomNo, childNo) => {
    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    return (
      <select
        onChange={this.childrenAgesChange}
        name={`${JSON.stringify({ roomNo, childNo })}`}
        className='select-more-option'
      >
        {arr.map((n, i) =>
          i == x ? (
            <option selected value={`${i}`}>
              {i == 0 ? "Under 1" : i}
            </option>
          ) : (
            <option value={`${i}`}>{i == 0 ? "Under 1" : i}</option>
          )
        )}
      </select>
    );
  };
  componentDidMount() {
    this.setState({ rooms: this.props.rooms });
  }
  popRoom = i => {
    this.props.setRooms(this.props.rooms.filter((room, j) => j !== i));
  };
  render() {
    if (this.state.flag == false)
      setTimeout(() => this.setState({ flag: true }), 100);
    const { rooms } = this.props;
    return this.state.flag ? (
      <div className='more-option'>
        <div className='row1-more-option'>
          <div className=''>Adults (12+)</div>
          <div className=''>Children (0-11)</div>
        </div>
        {rooms
          ? rooms.map((room, i) => {
              return (
                <div className='row2-more-option'>
                  <div className=''>
                    {this.state.bedSvg}
                    <span className=''>Room {i + 1}</span>
                  </div>
                  {this.adultsOptions(room.adults, i + 1)}
                  {this.childrenOptions(room.children, i + 1)}
                  {room.children_ages.map((age, j) => {
                    {
                      return this.childrenAgesOptions(age, i + 1, j);
                    }
                  })}
                  {i > 0 ? (
                    <button
                      onClick={() => {
                        this.popRoom(i);
                      }}
                    >
                      delete it
                    </button>
                  ) : null}
                </div>
              );
            })
          : null}
        <div className='add-another-room-div'>
          <button
            className='add-another-room-button'
            onClick={() => {
              if (this.props.rooms.length == 4) return;
              this.props.setRooms([
                ...this.props.rooms,
                {
                  adults: 1,
                  children: 0,
                  children_ages: []
                }
              ]);
            }}
          >
            {this.state.addSvg}
          </button>
          <span className='add-another-room-span'>
            Add another room ( 4 Maximum )
          </span>
        </div>
      </div>
    ) : null;
  }
}
export default MoreOption;
