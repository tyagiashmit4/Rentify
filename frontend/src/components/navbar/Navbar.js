import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Rentify</div>
      <ul className="navbar-nav">
        {!isLoggedIn && <li><Link to="/">Login</Link></li>}
        {!isLoggedIn && <li><Link to="/register">Register</Link></li>}
        {isLoggedIn && <li><Link to="/home">Home</Link></li>}
        {isLoggedIn && <li><Link to="/add-property">Add Property</Link></li>}
        {isLoggedIn && <li><Link to="/buyer-interaction">Buyer Interaction</Link></li>}
        {isLoggedIn && <li><Link to="/my-properties">My Properties</Link></li>} {/* Add this line for My Properties */}
      </ul>
    </nav>
  );
};

export default Navbar;
