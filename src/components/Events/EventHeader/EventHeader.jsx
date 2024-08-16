import React from 'react';
import "./EventHeader.scss";

const EventHeader = () => {
    return (
        <div className="about-header-container">
            <div className="about-header-left">
                <div className="about-header-text-group">
                    <div className="about-header-title">
                        <img
                            src="/assets/icons/circle2.svg"
                            alt="Icon"
                            className="about-header-icon"
                        />
                        <span className="about-header-title-text">Events</span>
                    </div>
                    {/* <p className="about-header-description">
            Learn more about our mission, vision, and the team behind our success.
          </p> */}
                </div>
            </div>
            <div className="about-header-right">
                <div className="about-image-container">
                    <img
                        className="about-header-image"
                        alt="About Us"
                        src="/assets/images/beachPickup.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default EventHeader
