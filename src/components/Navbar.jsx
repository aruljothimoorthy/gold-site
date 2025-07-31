// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">💎 Jewel Gallery</NavLink>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/bracelets" className={location.pathname === '/bracelets' ? 'active' : ''}>Bracelets</NavLink></li>
        <li><NavLink to="/earrings" className={location.pathname === '/earrings' ? 'active' : ''}>Earrings</NavLink></li>
        <li><NavLink to="/necklaces" className={location.pathname === '/necklaces' ? 'active' : ''}>Necklaces</NavLink></li>
        <li><NavLink to="/rings" className={location.pathname === '/rings' ? 'active' : ''}>Rings</NavLink></li>
        <li><NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
