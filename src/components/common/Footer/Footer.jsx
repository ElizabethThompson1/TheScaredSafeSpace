import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const footerContent = {
    callToAction: {
        message: "EMPOWER YOUR MIND, HEAL THE PLANET: JOIN US IN CREATING A HEALTHIER WORLD FOR ALL",
        buttonText: "CONTACT US",
    },
    information: {
        heading: "INFORMATION",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        socialMediaIcons: [
            { src: "/assets/icons/instagram.svg", alt: "Instagram", link: "https://instagram.com" },
            { src: "/assets/icons/google.svg", alt: "Google", link: "https://google.com" },
            { src: "/assets/icons/email.svg", alt: "Email", link: "mailto:someone@example.com" },
            { src: "/assets/icons/facebook.svg", alt: "Facebook", link: "https://facebook.com" },
        ],
    },
    sitePolicies: ["DISCLAIMER", "PRIVACY POLICY", "TERM OF USE"],
};

const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "ADMIN", path: "/admin/signin" },
    { label: "DONATE", path: "/donation" },
];

export const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-background" />
                    <div className="cta-section">
                        <div className="cta-content">
                            <p className="cta-message">{footerContent.callToAction.message}</p>
                            <button className="cta-button">
                                <div className="cta-button-content">
                                    <span className="cta-button-text">{footerContent.callToAction.buttonText}</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="logo-section" />
                    <div className="footer-details">
                        <div className="info-section">
                            <h2 className="info-heading">{footerContent.information.heading}</h2>
                            <p className="info-description">{footerContent.information.description}</p>
                            <div className="social-media">
                                {footerContent.information.socialMediaIcons.map((icon, index) => (
                                    <div key={index} className="social-icon">
                                        <a href={icon.link} target="_blank" rel="noopener noreferrer">
                                            <img src={icon.src} alt={icon.alt} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="nav-section">
                            <h2 className="nav-heading">NAVIGATION</h2>
                            <div className="nav-links">
                                {navLinks.map((link, index) => (
                                    <div key={index} className="nav-item">
                                        <Link to={link.path} className="nav-link">
                                            {link.label}
                                        </Link>
                                        <img
                                            src="/assets/icons/arrow.svg"
                                            alt="Arrow Icon"
                                            className="nav-arrow"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="footer-divider" />
                    <p className="footer-rights">ALL RIGHTS RESERVED - YOUR NONPROFIT NAME</p>
                    <div className="site-policies">
                        {footerContent.sitePolicies.map((policy, index) => (
                            <div key={index} className="policy-item">
                                {policy}
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};
