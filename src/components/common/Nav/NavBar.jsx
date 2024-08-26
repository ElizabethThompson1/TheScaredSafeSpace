import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
    const location = useLocation();

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

    useEffect(() => {
        // Scroll to the top of the page when the route changes
        window.scrollTo(0, 0);
    }, [location]);

    const isActive = (path) => location.pathname === path;

    return (
        <div className="nav-container">
            <div className="navigation-menu">
                <div className="logo">
                    <img src="/assets/images/logo.png" alt="Logo" className="logo-img" />
                </div>
                <div className="menu">
                    <div className="menu-item">
                        <Link
                            to="/"
                            className={`menu-link ${isActive('/') ? 'active' : ''}`}
                        >
                            HOME
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link
                            to="/about"
                            className={`menu-link ${isActive('/about') ? 'active' : ''}`}
                        >
                            ABOUT US
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link
                            to="/events"
                            className={`menu-link ${isActive('/events') ? 'active' : ''}`}
                        >
                            EVENTS
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link
                            to="/faq"
                            className={`menu-link ${isActive('/faq') ? 'active' : ''}`}
                        >
                            FAQ
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link
                            to="/contact"
                            className={`menu-link ${isActive('/contact') ? 'active' : ''}`}
                        >
                            CONTACT
                        </Link>
                    </div>
                </div>
                <div className="button">
                    <div className="donate-wrapper">
                        <Link
                            to="/donation"
                            className={`donate ${isActive('/donation') ? 'active' : ''}`}
                        >
                            DONATE
                        </Link>
                    </div>
                </div>
            </div>
            <div className="line" />
        </div>
    );
};

export default NavBar;
