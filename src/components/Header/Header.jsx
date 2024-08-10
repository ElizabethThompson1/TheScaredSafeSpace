import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { InfoBox } from '../InfoBox/InfoBox';

const Header = () => {
    const content = {
        header: {
            subtitle: "BUILD YOUR ELEGANT DREAM HOME INTERIOR",
            title: "WELCOME TO HOMCO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            buttonText: "OUR PROJECT"
        }
    };

    const { subtitle, title, description, buttonText } = content.header;

    return (
        <div className="header-container">
            <div className="header-left">
                <div className="header-text-group">
                    <div className="header-title">{title}</div>
                    <p className="header-subtitle">{subtitle}</p>
                    <p className="header-description">{description}</p>
                    <div className="header-button">
                        <div className="button-text-wrapper">
                            <Link className="button-text">{buttonText}</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-right">
                <div className="image-container">
                    <img className="header-image" alt="Polygon" src="/assets/images/homeHeader.png" />
                </div>
            </div>
            <InfoBox />
        </div>
    );
}

export default Header;
