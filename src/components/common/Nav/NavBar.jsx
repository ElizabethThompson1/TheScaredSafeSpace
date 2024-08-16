import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.nav-container');
            if (window.scrollY > 0) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="nav-container">
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
                        <Link to="/events" className="menu-link">EVENTS</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/faq" className="menu-link">FAQ</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/contact" className="menu-link">CONTACT</Link>
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
    );
};

export default NavBar;


