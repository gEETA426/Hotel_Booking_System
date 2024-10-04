import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (destination.trim() && checkIn && checkOut) {
      navigate(`/hotel-list?destination=${destination}&checkIn=${checkIn}&checkOut=${checkOut}`);
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <label htmlFor="destination" className="sr-only">Destination</label>
      <input
        id="destination"
        type="text"
        placeholder="Enter destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search-input"
      />

      <label htmlFor="checkIn" className="sr-only">Check-In Date</label>
      <input
        id="checkIn"
        type="date"
        placeholder="Check-In"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        className="search-input"
      />

      <label htmlFor="checkOut" className="sr-only">Check-Out Date</label>
      <input
        id="checkOut"
        type="date"
        placeholder="Check-Out"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        className="search-input"
      />

      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
