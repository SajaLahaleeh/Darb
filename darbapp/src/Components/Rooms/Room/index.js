import React from "react";
import twinBed from "./../../../assets/twinBed.png";
import WiFi from "./../../../assets/WiFi.png";
import person from "./../../../assets/person.png";
import "./index.css";
let price = 0;
let roomBooking = null;
const searchBar =
  localStorage && localStorage.getItem("searchBar")
    ? JSON.parse(localStorage.getItem("searchBar"))
    : null;

const date1 = new Date(searchBar ? searchBar.checkin : null);
const date2 = new Date(searchBar ? searchBar.checkout : null);
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const bookNow = ({ target }) => {
  localStorage.setItem("room_id", target.name);
  localStorage.setItem("roomBooking", JSON.stringify(roomBooking));

  window.location.href = `/booking`;
};
const fun = (typeRoom, roomBooking) => {
  return (
    <div className='right-side-room-row2'>
      <div className='col'>
        <p>{typeRoom.room_name}</p>
        <p>{typeRoom.room_mealdescription}</p>
      </div>
      <hr />
      <div className='col'>
        <img src={person} className='preson-img-s' />
        <span>{typeRoom.room_mealplan} Fits</span>
      </div>
      <hr />
      <div className='col'>
        <p>
          {localStorage.getItem("currency") || "SAR"} {price}
        </p>
        <p>Total for {diffDays} night (incl. VAT)</p>
        <button
          onClick={({ target }) => {
            localStorage.setItem("room_id", target.name);
            localStorage.setItem("roomBooking", JSON.stringify(roomBooking));

            window.location.href = `/booking`;
          }}
          name={typeRoom.room_code}
          className='book-now-button'
        >
          Book Now >
        </button>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
const Room = room0 => {
  console.log(localStorage, "saja here");
  roomBooking = room0;
  console.log(room0, "rrrrrrrrr");
  localStorage.setItem(
    "book",
    JSON.stringify({
      id: room0.room.availroom_1,
      code: room0.room.room_code
    })
  );
  const room = room0.room ? room0.room : "";
  price = room0.room.price;
  return room ? (
    <div className='rooms-contener'>
      {/* <p>Signature Room - {room ? room.typeBed : null}</p> */}
      <hr />
      <div className='room-contener'>
        <div className='left-side-room'>
          <img
            className='image-room-left-side'
            src={
              room0.imgRoom
                ? room0.imgRoom.hotelimage_url.replace("_t", "_z")
                : null
            }
          />
          <br />
          {/* <img src={twinBed} /> */}
          <span>{room ? room.typeBed : null}</span>
          {room && room.WiFi ? (
            <div>
              <img src={WiFi} />
              <span>Wi-Fi</span>
            </div>
          ) : null}
          <p>{room ? room.description : null}</p>
        </div>
        <div className='right-side-room'>
          <div className='right-side-room-row1'>
            <p>what include </p>
            <p>Guests</p>
            <p>Total for stay</p>
          </div>
          {room.map ? room.map(fun) : fun(room, roomBooking)}
        </div>
      </div>
    </div>
  ) : null;
};
export default Room;
