// src/components/HotelCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HotelCard.css';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel, id }) => {
  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/hotel/${id}`);
  };
  
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} className="hotel-images" />
      <div className="hotel-inf">
        <h1>{hotel.name}</h1>
        <h5><FaLocationDot />{hotel.location}</h5>
        <h6>&#8377;{hotel.Price}</h6>
        <p>{hotel.distance}</p>
        <button className="view deatils" onClick={handleViewDetail}>view details</button>
      </div>
    </div>
  );
};

// const HotelCard = ({ hotel ,id}) => {
//   const navigate = useNavigate();

//     const handleViewDetail = () => {
//       navigate(`/hotel/${id}`);
//     };

  // return (
  //   <div className="hotel-card">
  //     <img src={hotel.image} alt={hotel.name} className='hotel-images'/>
  //     <div className="hotel-inf">
  //     <h3>{hotel.name}</h3>
  //     <p><FaLocationDot />{hotel.location}</p>
  //     <p>{hotel.distance}</p>
  //     <p>{hotel.discription}</p>
  //     <Link to={`/hotel/${hotel.id}`} className="btn btn-primary" onClick={handleViewDetail}>
  //       View Details
  //     </Link>
  //     </div>
  //   </div>

export default HotelCard;