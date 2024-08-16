import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="header-bar">
        <div className="overlap">
          <div className="navigation-menu">
            <div className="logo">
              <img src="/assets/images/logo.png" alt="Logo" className="logo-img" />
            </div>
            <div className="menu">
              <div className="menu-item">
                <Link to="/" className="menu-link">HOME</Link>
              </div>
              <div className="menu-item">
                <Link to="/about" className="menu-link">ABOUT US</Link>
              </div>
              <div className="menu-item">
                <Link to="/services" className="menu-link">OUR SERVICES</Link>
              </div>
              <div className="menu-item">
                <Link to="/contact" className="menu-link">CONTACT US</Link>
              </div>
            </div>
            <div className="button">
              <div className="donate-wrapper">
                <Link to="/donation" className="donate">DONATE</Link>
              </div>
            </div>
          </div>
          <div className="line" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

