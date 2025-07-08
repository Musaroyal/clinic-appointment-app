import React from 'react';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">🩺 Royal Clinic</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li>
          <button className="book-btn" onClick={() => navigate('/BookingForm')}>
            Book Appointment
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
