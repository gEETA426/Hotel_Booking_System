import React from "react";
import "./ExclusiveOffers.css"; 
import mumbai from '../offer/images/mumbai.jpg';
import delhi from '../offer/images/delhi.jpg';
import singapore from '../offer/images/singapore.jpg';
import dubai from '../offer/images/dubai1.jpg';
import hydrabad from '../offer/images/hydrabad.jpg';
import alibag from '../offer/images/alibag.jpg' ;
import bangalore from '../offer/images/bangalore.jpg';
import chennai from '../offer/images/chennai.jpg';

const ExclusiveOffers = () => {
  const offers = [
    {
      id: 1,
      hotelName: "Aurika ,International Airpot",
      city: "Mumbai",
      price: '₹7,969/night',
      discount: "30% off",
      reviews: "Wonderful (120 reviews)",
      image: mumbai,
    },
    {
      id: 2,
      hotelName: "The Manor New Dehli",
      city: "Delhi",
      price: "₹8790/night",
      discount: "20% off",
      reviews: "Wonderful (90 reviews)",
      image: delhi,
    },
    {
      id: 3,
      hotelName: "The Fullerton Hotel Singapore",
      city: "Singapore",
      price: "₹40,000/night",
      discount: "30% off",
      reviews: "Exceptional (145 reviews)",
      image: singapore,
    },
    {
      id: 4,
      hotelName: "Vida Dubai Marina & Yacht Club",
      city: "Dubai",
      price: "$150/night",
      discount: "30% off",
      reviews: "Exceptional (155 reviews)",
      image: dubai,
    },
    {
      id: 5,
      hotelName: "Vivanta Hotel Hydrabad",
      city: "Hydrabad",
      price: "₹32,933/night",
      discount: "24% off",
      reviews: "Good (1503 reviews)",
      image: hydrabad,
    },
    {
      id: 6,
      hotelName: "Moonstone Hammock Alibaug",
      city: "Alibag",
      price: "₹80,562/night",
      discount: "25% off",
      reviews: "Exceptional (70 reviews)",
      image: alibag,
    },
    {
      id: 7,
      hotelName: "Golden Fortune Inn Hotel",
      city: "Bangalore",
      price: "₹60,032/night",
      discount: "30% off",
      reviews: "Very Good (101 reviews)",
      image: bangalore,
    },
    {
      id: 8,
      hotelName: "Hotel O ARN RESIDENCY",
      city: "Chennai",
      price: "₹35,481/night",
      discount: "30% off",
      reviews: "Wodernful(15 reviews)",
      image: chennai,
    },
  ];

  return (
    <div className="exclusive-offers-section">
      <div className="background-image-overlay">
        <div className="exclusive-offers-content">
          <h2>Exclusive Hotel Offers</h2>
          <div className="offers-list">
            {offers.map((offer) => (
              <div key={offer.id} className="offer-card">
                <img src={offer.image} alt={offer.hotelName} />
                <div className="offer-details">
                  <h3>{offer.hotelName}</h3>
                  <p>{offer.city}</p> 
                  <p>{offer.description}</p>
                  <p className="price">{offer.price}</p>
                  <p>{offer.discount}</p> 
                  <p>{offer.reviews}</p> 
                  <button className="bookbutton">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;







