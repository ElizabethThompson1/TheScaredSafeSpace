import React from 'react';
import "./DonationsHeader.scss";

const DonationHeader = () => {
    return (
        <div className="donation-header-container">
            <div className="donation-header-left">
                <div className="donation-header-text-group">
                    <div className="donation-header-title">
                        <img
                            src="/assets/icons/circle2.svg"
                            alt="Icon"
                            className="donation-header-icon"
                        />
                        <span className="donation-header-title-text">Donations</span>
                    </div>
                    {/* <p className="donation-header-description">
                        Help us make a difference by supporting our cause. Your donations empower us to continue our mission.
                    </p> */}
                </div>
            </div>
            <div className="donation-header-right">
                <div className="donation-image-container">
                    <img
                        className="donation-header-image"
                        alt="Donation"
                        src="/assets/images/plants.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default DonationHeader;
