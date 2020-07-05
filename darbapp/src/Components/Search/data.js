import hotelImg from "../../assets/hotel.png";
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
    total: "Total for 1 night (incl. VAT)"
  },
  {
    hotel_id: "4439189",
    hotel_giata_code: "195878",
    hotel_name: "Hotel Première Classe Marne La Vallée - Bussy Saint Georges",
    hotel_stars: "2",
    hotel_preview_image:
      "http://live2.travelconnectiontechnology.com/static-images/200000/195001_196000/GiataCodeImage195878.gif",
    hotel_address:
      "8 rue Marie Curie, 77600 Bussy Saint Georges, 8 rue Marie Curie, 77600",
    hotel_latitude: "48.83248",
    hotel_longitude: "2.70544",
    hotel_short_desc:
      "Most of the storeys can be reached by lift. Services and facilities at the hotel include a restaurant, a breakfast room and a playroom. Wireless internet access is available to guests in the public areas. The grounds of the hotel feature a playground and an attractive garden. Those arriving in their own vehicles can leave them in the car park of the accommodation.Each of the rooms is appointed with air conditioning and a bathroom. The rooms each feature a double bed. Little extras, including internet access, a TV and WiFi, contribute to a great stay. The bathroom offers convenient facilities including a shower. Special family rooms are available for families with children.Travellers can choose options including breakfast and dinner.",
    tripadvisor_code: "614150",
    hotelfacilities: null,
    group: "",
    hid_undeduplicated: "4237635",
    code: "CQz94dz5MF",
    id: "20844",
    price: 457.6
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
    total: "Total for 1 night (incl. VAT)"
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
    total: "Total for 1 night (incl. VAT)"
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
    total: "Total for 1 night (incl. VAT)"
  }
];
const a = {
  hotelDetail: {
    status: true,
    hotelImages: [
      {
        hotel_id: "461403",
        hotelimage_url:
          "https://i20.giatamedia.com/s.php?uid=193596&source=xml&size=800&cid=21108&iid=50279155"
      },
      {
        hotel_id: "461403",
        hotelimage_url:
          "https://i20.giatamedia.com/s.php?uid=193596&source=xml&size=800&cid=21108&iid=50279157"
      },
      {
        hotel_id: "461403",
        hotelimage_url:
          "https://i20.giatamedia.com/s.php?uid=193596&source=xml&size=800&cid=21108&iid=50279085"
      },
      {
        hotel_id: "461403",
        hotelimage_url:
          "https://i20.giatamedia.com/s.php?uid=193596&source=xml&size=800&cid=21108&iid=50310790"
      },
      {
        hotel_id: "461403",
        hotelimage_url:
          "https://i20.giatamedia.com/s.php?uid=193596&source=xml&size=800&cid=21108&iid=50310794"
      },
      {
        hotel_id: "461403",
        hotelimage_url:
          "https://i20.giatamedia.com/s.php?uid=193596&source=xml&size=800&cid=21108&iid=50310796"
      },
      {
        hotel_id: "461403",
        hotelimage_url:
          "https://i20.giatamedia.com/s.php?uid=193596&source=xml&size=800&cid=21108&iid=50310801"
      },
      {
        hotel_id: "461403",
        hotelimage_url:
          "https://i20.giatamedia.com/s.php?uid=193596&source=xml&size=800&cid=21108&iid=50315970"
      },
      {
        hotel_id: "461403",
        hotelimage_url:
          "https://i20.giatamedia.com/s.php?uid=193596&source=xml&size=800&cid=21108&iid=50321876"
      },
      {
        hotel_id: "461403",
        hotelimage_url:
          "https://i20.giatamedia.com/s.php?uid=193596&source=xml&size=800&cid=21108&iid=50321877"
      }
    ],
    hotelfacilities: {
      "56": {
        facilityprovider_id: "448100",
        facilityprovider_code: "aircon",
        facilityprovider_name: "aircon",
        facilityprovider_description: "aircon",
        provider_id: "100",
        facility_id: "56",
        language_code: "en",
        facilityprovider_type: "room",
        facility_name: "Air Conditioning",
        facility_type: "room",
        ro_alias: null
      },
      "64": {
        facilityprovider_id: "448091",
        facilityprovider_code: "bath",
        facilityprovider_name: "bath",
        facilityprovider_description: "bath",
        provider_id: "100",
        facility_id: "64",
        language_code: "en",
        facilityprovider_type: "room",
        facility_name: "Bath",
        facility_type: "room",
        ro_alias: null
      },
      "67": {
        facilityprovider_id: "448093",
        facilityprovider_code: "hairdryer",
        facilityprovider_name: "hairdryer",
        facilityprovider_description: "hairdryer",
        provider_id: "100",
        facility_id: "67",
        language_code: "en",
        facilityprovider_type: "room",
        facility_name: "Hairdryer",
        facility_type: "room",
        ro_alias: null
      },
      "68": {
        facilityprovider_id: "448092",
        facilityprovider_code: "shower",
        facilityprovider_name: "shower",
        facilityprovider_description: "shower",
        provider_id: "100",
        facility_id: "68",
        language_code: "en",
        facilityprovider_type: "room",
        facility_name: "Shower",
        facility_type: "room",
        ro_alias: null
      },
      "73": {
        facilityprovider_id: "448101",
        facilityprovider_code: "tv",
        facilityprovider_name: "tv",
        facilityprovider_description: "tv",
        provider_id: "100",
        facility_id: "73",
        language_code: "en",
        facilityprovider_type: "room",
        facility_name: "TV",
        facility_type: "room",
        ro_alias: null
      },
      "75": {
        facilityprovider_id: "448098",
        facilityprovider_code: "tea_coffee",
        facilityprovider_name: "tea_coffee",
        facilityprovider_description: "tea_coffee",
        provider_id: "100",
        facility_id: "75",
        language_code: "en",
        facilityprovider_type: "room",
        facility_name: "Minibar",
        facility_type: "room",
        ro_alias: null
      },
      "106": {
        facilityprovider_id: "448126",
        facilityprovider_code: "roomservice",
        facilityprovider_name: "roomservice",
        facilityprovider_description: "roomservice",
        provider_id: "100",
        facility_id: "106",
        language_code: "en",
        facilityprovider_type: "hotel",
        facility_name: "Room Service",
        facility_type: "hotel",
        ro_alias: null
      },
      "111": {
        facilityprovider_id: "448123",
        facilityprovider_code: "wlan",
        facilityprovider_name: "wlan",
        facilityprovider_description: "wlan",
        provider_id: "100",
        facility_id: "111",
        language_code: "EN",
        facilityprovider_type: "hotel",
        facility_name: "Internet",
        facility_type: "hotel",
        ro_alias: null
      },
      "112": {
        facilityprovider_id: "448094",
        facilityprovider_code: "internet",
        facilityprovider_name: "internet",
        facilityprovider_description: "internet",
        provider_id: "100",
        facility_id: "112",
        language_code: "EN",
        facilityprovider_type: "room",
        facility_name: "WiFi",
        facility_type: "room",
        ro_alias: null
      },
      "117": {
        facilityprovider_id: "448125",
        facilityprovider_code: "carpark",
        facilityprovider_name: "carpark",
        facilityprovider_description: "carpark",
        provider_id: "100",
        facility_id: "117",
        language_code: "en",
        facilityprovider_type: "hotel",
        facility_name: "Car Park",
        facility_type: "hotel",
        ro_alias: null
      },
      "129": {
        facilityprovider_id: "448105",
        facilityprovider_code: "doublebed",
        facilityprovider_name: "doublebed",
        facilityprovider_description: "doublebed",
        provider_id: "100",
        facility_id: "129",
        language_code: "en",
        facilityprovider_type: "room",
        facility_name: "Double Bed",
        facility_type: "room",
        ro_alias: null
      }
    },
    hotel: [
      {
        hotel_id: "4401346",
        hotel_name: "Hotel Campanile Meaux",
        provider_id: "100",
        hotel_code: "153023",
        hotel_giata_code: "153023",
        hotel_address:
          "1 Chemin de la Cave aux Hérons, 77100 Meaux, 1 Chemin de la Cave aux Hérons, 77100",
        location_id: "648998",
        location_group: "",
        hotel_phone: "2147483647",
        hotel_fax: "2147483647",
        hotel_email: "meaux@campanile.fr",
        hotel_website: "https://www.campanile.com/fr/hotels/campanile-meaux",
        hotel_stars: "3",
        hotel_latitude: "48.95656",
        hotel_longitude: "2.91791",
        hotel_enabled: "1",
        hotel_featured: "0",
        hotel_preview_image:
          "https://i.travelapi.com/hotels/2000000/1180000/1177600/1177538/3f85f522_b.jpg",
        hotel_date_modified: "2020-01-20 12:22:15",
        hotel_description:
          "Travellers are welcomed at the holiday village, which has a total of 47 rooms. The accommodation features a restaurant, a dining area, a bar, room service and a conference room. Wireless internet access is available to guests in the public areas. There is also a garden. Those arriving in their own vehicles can leave them in the car park of the complex.The complex features rooms with air conditioning and a bathroom. A double bed ensures a good night's sleep. There is also a desk. Guests will also find a tea/coffee station included as standard. An ironing set is also available for travellers' convenience. Other features include internet access, a telephone, a TV and WiFi. A shower and a bathtub can be found in the bathrooms. A hairdryer is also available. The holiday village offers non-smoking rooms and smoking rooms.Travellers can choose between the following bookable options: breakfast, lunch and dinner. Staff are also happy to provide children's meals.",
        hotel_location_description: null,
        language_code: "en"
      }
    ],
    solutions4hotel: [
      {
        availroomgroup_id: "14905",
        availsearch_id: "566000",
        provider_id: "16",
        location_id: "35822",
        hotel_id: "4401346",
        hotel_id_undeduplicated: "461403",
        currency_code: "USD",
        root_currency: "USD",
        board_code: "RO",
        availroom_1: "13164",
        availroom_2: null,
        availroom_3: null,
        availroom_4: null,
        availroom_5: null,
        availroom_6: null,
        availroom_7: null,
        availroom_8: null,
        availroom_9: null,
        availroomgroup_price_net0: "436.0000",
        availroomgroup_price_net1: "479.6000",
        availroomgroup_price_net2: "479.6000",
        availroomgroup_price_client: "479.6000",
        availroomgroup_stoken: "ON6pP3CvXK",
        availroomgroup_onrequest: "0",
        availroomgroup_specialoffer: "0",
        availroomgroup_extradata: "",
        availroomgroup_date_added: "2020-02-16 08:08:32",
        giatalocation_id: "648998",
        price: 1816.55,
        rooms_details: [
          {
            room_name: "Double room - Next Generation (Non-Refundable)",
            room_code: "1215962650",
            room_mealplan: "1",
            room_mealdescription: "Room only"
          }
        ]
      },
      {
        availroomgroup_id: "14906",
        availsearch_id: "566000",
        provider_id: "16",
        location_id: "35822",
        hotel_id: "4401346",
        hotel_id_undeduplicated: "461403",
        currency_code: "USD",
        root_currency: "USD",
        board_code: "RO",
        availroom_1: "13166",
        availroom_2: null,
        availroom_3: null,
        availroom_4: null,
        availroom_5: null,
        availroom_6: null,
        availroom_7: null,
        availroom_8: null,
        availroom_9: null,
        availroomgroup_price_net0: "513.0000",
        availroomgroup_price_net1: "564.3000",
        availroomgroup_price_net2: "564.3000",
        availroomgroup_price_client: "564.3000",
        availroomgroup_stoken: "tkpEtir3uE",
        availroomgroup_onrequest: "0",
        availroomgroup_specialoffer: "0",
        availroomgroup_extradata: "",
        availroomgroup_date_added: "2020-02-16 08:08:32",
        giatalocation_id: "648998",
        price: 2137.37,
        rooms_details: [
          {
            room_name: "Double room - Next Generation",
            room_code: "1215422523",
            room_mealplan: "1",
            room_mealdescription: "Room only"
          }
        ]
      }
    ]
  },
  hotelSolution: { status: false, error_code: 0, message: "Solution not found" }
};
export default data;
