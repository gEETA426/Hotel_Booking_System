import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HotelDetail.css';
import { FaLocationDot } from "react-icons/fa6";

const hotels = [

  {
    id: 1,
    name: 'The Oberoi Bengaluru',
    location: 'mahatma gandi road ,bengaluru',
    Price: 7600,
    images: [
      '/asset/images/obearoibengaluru.jpg',
      '/asset/images/obearoibengaluru1.jpg',
      '/asset/images/obearoibengaluru2.jpg',
    ],
    description:'Award-winning gardens with century-old raintrees are featured throughout The Oberoi Bangalore, a 5-star property on the prestigious Mahatma Gandhi Road. Pampering spa treatments and a gym are provided. Personal butlers and room service are available 24 hours. Complimentary WiFi is available in all rooms',
  },
  {
    id: 2,
    name: 'Grand Mercure Bengaluru at Gopalan Mall',
    location: 'vivekanand road,bengaluru',
    Price: 3400,
    images: [
      '/asset/images/grandmercuru.jpg',
      '/asset/images/grandmercuru1.jpg',
      '/asset/images/grandmercuru2.jpg',
    ],
    description: 'Located in Bangalore, 7 km from Commercial Street, Grand Mercure Bengaluru at Gopalan Mall - An Accor Brand provides accommodation with a fitness centre, free private parking, a garden and a shared lounge',
  },
  {
    id: 3,
    name: 'Hotel Krishna Plaza New Delhi',
    location: 'No-1 Krishna Market,Behind R.K.Asram Metro,Paharganj, Paharganj, 110055 New Delhi, India',
    Price: 7200,
    images: [
      '/asset/images/krishnaplaza.jpg',
      '/asset/images/krishnaplaza1.jpg',
      '/asset/images/krishnaplaza2.jpg',
    ],
    description: 'Conveniently located at just 1.2 km away from the bustling markets of Connaught Place and 2 km away from the iconic monument of India Gate. Hotel Krishna Plaza New Delhi  By M S Hospitality operates a 24-hour front desk and offers free Wi-Fi throughout the property.',
  },
  {
    id: 4,
    name: 'The Prime Delhi',
    location: 'Paharganj, New Delhi',
    Price: 8700,
    images: [
      '/asset/images/primedelhi.jpg',
      '/asset/images/primedelhi1.jpg',
      '/asset/images/primedelhi2.jpg',
    ],
    description: 'Boasting a terrace, Hotel Ritz with Free Airport Pickup is situated in the centre of New Delhi, 2.9 km from Jantar Mantar.',
  },
  {
    id: 5,
    name: 'The Leela Mumbai',
    location: 'mumbai',
    Price: 4600,
    images: [
      '/asset/images/theleelamumbai.jpg',
      '/asset/images/theleelamumbai1.jpg',
      '/asset/images/theleelamumbai2.jpg',
    ],
    description: 'Luxurious accommodation coupled with 6 dining options can be expected at The Leela Mumbai, just 5 minutes drive from Chhatrapati Shivaji International Airport. An outdoor pool, fitness centre and pampering spa are available',
  },
  {
    id: 6,
    name: 'Trident Nariman Point',
    location: 'Nariman Point, Mumbai',
    Price: 6400,
    images: [
      '/asset/images/tradientmumbai.jpg',
      '/asset/images/tradientmumbai1.jpg',
      '/asset/images/tradientmumbai2.jpg',
    ],
    description: 'The 5-star Trident Nariman Point is located in Mumbai, overlooking the beautiful Arabian Sea from Marine Drive. Featuring a 24-hour business centre, the hotel has an outdoor pool',
  },
  {
    id: 7,
    name: 'Trident Chennai',
    location: 'G.S.T Road, 600027 Chennai',
    Price: 6200,
    images: [
      '/asset/images/tradientchannai.jpg',
      '/asset/images/tradientchannai1.jpg',
      '/asset/images/tradientchannai2.jpg',
    ],
    description: 'The 5-star Trident Chennai features an outdoor pool, pampering spa treatments and 24-hour room service. The hotel is located near Chennai airport and is 12 km from the railway station',
  },
  {
    id: 8,
    name: 'ITC Grand Chola, a Luxury Collection Hotel',
    location: 'Guindy,Chennai',
    Price: 9877,
    images: [
      '/asset/images/Itcgrand.jpg',
      '/asset/images/Itcgrand1.jpg',
      '/asset/images/Itcgrand2.jpg',
    ],
    description: 'Situated along Mount Road in Chennai, ITC Grand Chola is 8 km from the Chennai International Airport. It features 10 dining options and an outdoor swimming pool and a fitness centre',
  },
  {
    id: 9,
    name: 'Taj Krishna',
    location: ' Banjara Hills, Hyderabad',
    Price: 5900,
    images: [
      '/asset/images/tajkrishna.jpg',
      '/asset/images/tajkrishna1.jpg',
      '/asset/images/tajkrishna2.jpg',
    ],
    description: 'Welcome to the epitome of luxury and grandeur in the heart of Hyderabad, where timeless elegance meets unparalleled hospitality',
  },
  {
    id: 10,
    name: 'Trident Hyderabad',
    location: 'Madhapur, Hyderabad',
    Price: 3800,
    images: [
      '/asset/images/tradienthyd.jpg',
      '/asset/images/tradienthyd1.jpg',
      '/asset/images/tradienthyd2.jpg',
    ],
    description: 'Featuring an outdoor swimming pool, spa and wellness centre and fitness centre, Trident, Hyderabad is close to Raheja Mindspace IT Park. It has a well-equipped business centre and meeting space',
  },
];
const HotelDetail = () => {
  const { id } = useParams(); // Get hotel ID from the URL
  const hotel = hotels.find((h) => h.id === parseInt(id));
  const navigate = useNavigate(); 

  if (!hotel) {
    return <p>Hotel not found</p>;
  }

  const handleBookNow = () => {
    navigate('/bookingform');
  };

  return (
    <div className="hotel-details">
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        {hotel.images.map((image, index) => (
          <div key={index}>
              <img src={image} alt={`${hotel.name} ${index + 1}`} className="hotel-image" />
          </div>
        ))}
      </Carousel>
      <div>
      <h2>{hotel.name}</h2>
      <p><FaLocationDot />{hotel.location}</p>
      <p>{hotel.distance}</p>
      <h6>&#8377;{hotel.Price}</h6>
      <p>{hotel.description}</p>
      <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button>
    </div>
    </div>
  );
};

export default HotelDetail;