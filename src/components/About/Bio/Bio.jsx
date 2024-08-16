import React from "react";
import "./Bio.scss";

const bioContent = {
    subTitle: "FOUNDER",
    title: "BIO",
    description: `is the inspiring founder of The Scared Safe Place, dedicated to healing and strengthening communities through love, respect, and kindness. Drawing on personal experiences of overcoming trauma and finding peace, [Founder's Name] has made it their life's mission to radiate the loving spirit of God, the Divine, and Nature. Born and raised with a deep appreciation for the interconnectedness of humanity, [Founder's Name] has always felt a universal sense of duty to serve others. This calling has driven them to create a platform that emphasizes self-healing, community support, and the transformative power of love. Through a variety of healing modalities and a commitment to quick, compassionate outreach, [Founder's Name] strives to inspire others to embrace their own healing journeys and contribute to a more loving and respectful world.`,
    icon: "/assets/icons/circle2.svg",
    leftImage: "/assets/images/about/bio.png",
    contactText: "CONTACT",
};

export const Bio  = () => {
    return (
        <div className="bio-box">
            <div className="bio-about-block">
                <div className="bio-left-column">
                    <img
                        src={bioContent.leftImage}
                        alt="Founder"
                        className="bio-left-image"
                    />
                </div>
                <div className="bio-right-column">
                    <div className="bio-overlap">
                        <div className="bio-title">
                            <div className="bio-overlap-group">
                                <img
                                    src={bioContent.icon}
                                    alt="Bio Icon"
                                    className="bio-icon-image"
                                />
                                <div className="title-container">
                                    <div className="bio-sub">{bioContent.subTitle}</div>
                                    <div className="bio-main-title">{bioContent.title}</div>
                                </div>
                            </div>
                        </div>
                        <p className="bio-description">
                            {bioContent.description}
                        </p>
                    </div>
                    <button className="bio-button">
                        <div className="contact-wrapper">
                            <div className="contact">{bioContent.contactText}</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

