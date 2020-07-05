import hotelImg from "../assets/hotel.png";
import room1 from "./../assets/room1.png";
import room2 from "./../assets/room2.png";
import room3 from "./../assets/room3.png";
import room4 from "./../assets/room4.png";
import room5 from "./../assets/room5.png";
import room6 from "./../assets/room6.png";
const imagesRooms = [room1, room2, room3, room4, room5, room6];
const data = [
  {
    img: hotelImg,
    name: "Caravan Resort",
    address: "P.O Box 30704, Ajman, United Arab Emirates",
    evaluation: 9.2,
    reviews: 3414,
    amount: 1718,
    stars: 5,
    labels: ["Free Cancellation", "Breakfast"],
    propertyType: "hotel",
    total: "Total for 1 night (incl. VAT)",
    images: imagesRooms,
    rooms: [
      {
        name: "Comfort Room - Double Room with 1 King Bed",
        image: room2,
        typeBed: "1 Twin Bed",
        WiFi: true,
        description:
          "A stunning hotel inspired by Egypt’s iconic pyramids, Raffles Dubai offers elegant accommodation with warm decor and luxurious ambience. Each room includes a private balcony, flat-screen TV, minibar, workstation, complimentary Wi-Fi, and bathroom with a walk-in shower and bathtub.",
        typeRooms: [
          { name: "Room only", noOfFits: 2, description: "", total: 824 },
          {
            name: "Room only",
            noOfFits: 1,
            total: 1008,
            description:
              "FREE cancellation before 16 Feb 2020\nPay later option available"
          }
        ]
      }
    ]
  },
  {
    img: hotelImg,
    name: "Resort",
    address: "P.O Box 30704, Ajman, United Arab Emirates",
    evaluation: 8.6,
    reviews: 3414,
    amount: 1218,
    stars: 3,
    labels: ["Free Cancellation"],
    propertyType: "resort",
    total: "Total for 1 night (incl. VAT)",
    images: imagesRooms,
    rooms: [
      {
        name: "Comfort Room - Double Room with 1 King Bed",
        image: room3,
        typeBed: "1 Twin Bed",
        WiFi: true,
        description:
          "A stunning hotel inspired by Egypt’s iconic pyramids, Raffles Dubai offers elegant accommodation with warm decor and luxurious ambience. Each room includes a private balcony, flat-screen TV, minibar, workstation, complimentary Wi-Fi, and bathroom with a walk-in shower and bathtub.",
        typeRooms: [
          { name: "Room only", noOfFits: 2, description: "", total: 824 },
          {
            name: "Room only",
            noOfFits: 1,
            total: 1008,
            description:
              "FREE cancellation before 16 Feb 2020\nPay later option available"
          }
        ]
      }
    ]
  },
  {
    img: hotelImg,
    name: "Caravan",
    address: "P.O Box 30704, Ajman, United Arab Emirates",
    evaluation: 7.6,
    reviews: 3414,
    amount: 971,
    stars: 4,
    labels: ["Breakfast"],
    propertyType: "lodge",
    total: "Total for 1 night (incl. VAT)",
    images: imagesRooms,
    rooms: [
      {
        name: "Comfort Room - Double Room with 1 King Bed",
        image: room3,
        typeBed: "1 Twin Bed",
        WiFi: true,
        description:
          "A stunning hotel inspired by Egypt’s iconic pyramids, Raffles Dubai offers elegant accommodation with warm decor and luxurious ambience. Each room includes a private balcony, flat-screen TV, minibar, workstation, complimentary Wi-Fi, and bathroom with a walk-in shower and bathtub.",
        typeRooms: [
          { name: "Room only", noOfFits: 2, description: "", total: 824 },
          {
            name: "Room only",
            noOfFits: 1,
            total: 1008,
            description:
              "FREE cancellation before 16 Feb 2020\nPay later option available"
          }
        ]
      },
      {
        name: "Comfort Room - Double Room with 1 King Bed",
        image: room1,
        typeBed: "1 Twin Bed",
        WiFi: true,
        description:
          "A stunning hotel inspired by Egypt’s iconic pyramids, Raffles Dubai offers elegant accommodation with warm decor and luxurious ambience. Each room includes a private balcony, flat-screen TV, minibar, workstation, complimentary Wi-Fi, and bathroom with a walk-in shower and bathtub.",
        typeRooms: [
          { name: "Room only", noOfFits: 2, description: "", total: 1024 },
          {
            name: "Room only",
            noOfFits: 1,
            total: 1338,
            description:
              "FREE cancellation before 16 Feb 2020\nPay later option available"
          }
        ]
      }
    ]
  },
  {
    img: hotelImg,
    name: "Dubi hotel",
    address: "P.O Box 30704, Ajman, United Arab Emirates",
    evaluation: 6.6,
    reviews: 3414,
    amount: 2718,
    stars: 3,
    labels: ["Free Cancellation", "Breakfast"],
    propertyType: "hotel",
    total: "Total for 1 night (incl. VAT)",
    images: imagesRooms,
    rooms: [
      {
        name: "Comfort Room - Double Room with 1 King Bed",
        image: room3,
        typeBed: "1 Twin Bed",
        WiFi: true,
        description:
          "A stunning hotel inspired by Egypt’s iconic pyramids, Raffles Dubai offers elegant accommodation with warm decor and luxurious ambience. Each room includes a private balcony, flat-screen TV, minibar, workstation, complimentary Wi-Fi, and bathroom with a walk-in shower and bathtub.",
        typeRooms: [
          { name: "Room only", noOfFits: 2, description: "", total: 824 },
          {
            name: "Room only",
            noOfFits: 1,
            total: 1008,
            description:
              "FREE cancellation before 25 Feb 2020\nPay later option available"
          }
        ]
      }
    ]
  }
];
export default data;
