// src/components/HotelList.js
import React, { useState } from 'react'
import HotelCard from './HotelCard';
import { useLocation } from 'react-router-dom';

const hotels = [
 {
    id: 1,
    name: 'The Oberoi Bengaluru',
    location: 'mahatma gandi road ,bengaluru',
    Price:7600,
    distance: 'Award-winning gardens with century-old raintrees are featured throughout The Oberoi Bangalore, a 5-star property on the prestigious Mahatma Gandhi Road. Pampering spa treatments and a gym are provided. Personal butlers and room service are available 24 hours. Complimentary WiFi is available in all rooms',
    image: '/asset/images/obearoibengaluru.jpg',
  },
  {
    id: 2,
    name: 'Grand Mercure Bengaluru at Gopalan Mall ',
    location: 'vivekanand road,bengaluru',
    Price:3400,
    distance: 'Located in Bangalore, 7 km from Commercial Street, Grand Mercure Bengaluru at Gopalan Mall - An Accor Brand provides accommodation with a fitness centre, free private parking, a garden and a shared lounge',
    image: '/asset/images/grandmercuru.jpg',
  },
  {
    id: 3,
    name: 'Hotel Krishna Plaza New Delhi',
    location: 'Paharganj, New Delhi',
    Price:7200,
    distance: ' Hotel Krishna Plaza New Delhi  By M S Hospitality operates a 24-hour front desk and offers free Wi-Fi throughout the property.',
    image: '/asset/images/krishnaplaza.jpg',
  },
  {
    id: 4,
    name: 'The Prime Delhi',
    location: 'Paharganj, New Delhi',
    Price:8700,
    distance: 'Situated in New Delhi, 2.3 km from Gurudwara Bangla Sahib, The Prime Delhi features accommodation with free bikes, free private parking, a fitness centre and a garden. Attractively located in the Paharganj district, this hotel provides a terrace, as well as a hot tub.',
    image: '/asset/images/primedelhi.jpg',
  },
  {
    id: 5,
    name: 'The Leela Mumbai',
    location: 'mumbai',
    Price:4600,
    distance:'Luxurious accommodation coupled with 6 dining options can be expected at The Leela Mumbai, just 5 minutes drive from Chhatrapati Shivaji International Airport. An outdoor pool, fitness centre and pampering spa are available',
    image: '/asset/images/theleelamumbai.jpg',
  }, {
    id: 6,
    name: 'Trident Nariman Point',
    location: ' Nariman Point, Mumbai,',
    Price:6400,
    distance: 'The 5-star Trident Nariman Point is located in Mumbai, overlooking the beautiful Arabian Sea from Marine Drive. Featuring a 24-hour business centre, the hotel has an outdoor pool',
    image: '/asset/images/tradientmumbai.jpg',
  }, {
    id: 7,
    name: 'Trident Chennai',
    location: 'G.S.T Road, 600027 Chennai',
    Price:6200,
    distance:'The 5-star Trident Chennai features an outdoor pool, pampering spa treatments and 24-hour room service. The hotel is located near Chennai airport and is 12 km from the railway station',
    image: '/asset/images/tradientchannai.jpg',
  }, {
    id: 8,
    name: 'ITC Grand Chola, a Luxury Collection Hotel',
    location: 'Guindy,Chennai',
    Price:9877,
    distance: 'Situated along Mount Road in Chennai, ITC Grand Chola is 8 km from the Chennai International Airport. It features 10 dining options and an outdoor swimming pool and a fitness centre',
    image: '/asset/images/itcgrand.jpg',
  }, {
    id: 9,
    name: 'Taj Krishna',
    location: ' Banjara Hills, Hyderabad',
    Price:5900,
    distance: 'Welcome to the epitome of luxury and grandeur in the heart of Hyderabad, where timeless elegance meets unparalleled hospitality',
    image: '/asset/images/tajkrishna.jpg',
  }, {
    id: 10,
    name: 'Trident Hyderabad',
    location: 'Madhapur, Hyderabad',
    Price:3800,
    distance: 'Featuring an outdoor swimming pool, spa and wellness centre and fitness centre, Trident, Hyderabad is close to Raheja Mindspace IT Park',
    image: '/asset/images/tradienthyd.jpg',
  },

  
];
const HotelList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get('destination');

  const filteredHotels = filter
    ? hotels.filter(hotel => hotel.location.toLowerCase().includes(filter.toLowerCase()))
    : hotels;

  return (
    <div className="hotel-list">
      {filteredHotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} id={hotel.id} />
      ))}
    </div>
  );
};

export default HotelList;