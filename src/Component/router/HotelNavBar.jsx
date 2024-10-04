
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


const HotelNavBar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-dark' data-bs-theme="dark">
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/' aria-label='Home'><FaHome size={25} /></Link>
          </li>
        </ul>
        <ul className='navbar-nav ms-auto'>
          <li className="nav-item">
            <Link className="nav-link" to="/hotel-list">Hotels</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login/Signup</Link>
          </li>
        </ul>
      
      </nav>
      <Outlet />
    </div>
  );
};

export default HotelNavBar;
