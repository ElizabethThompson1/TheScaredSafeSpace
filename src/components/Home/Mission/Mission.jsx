import React from "react";
import "./Mission.scss";

const missionContent = {
    subTitle: "OUR",
    title: "MISSION STATEMENT",
    description: `At The Safe Space Place, our mission is to radiate the loving spirit that God, the Divine, and Nature share with us so freely. We believe in the power of self-regulation, trauma healing, and community strengthening through self-care and mutual respect. As a collective of women and healed veterans, we are dedicated to creating a world where everyone feels safe, heard, and valued. We respond to all inquiries within 24 hours and offer a variety of healing practices, including day meetings, mediations, sound baths, and silent meditations. Our goal is to foster gratitude for life and support each individual's journey toward healing and growth.`,
    icon: "/assets/icons/circle2.svg",
    values: [
        "Empower Through Education",
        "Offer Compassionate Support",
        "Encourage Mutual Respect",
        "Facilitate Healing Activities",
        "Inspire Personal Growth",
        "Champion Inclusivity and Diversity"
    ],
    checkIcon: "/assets/icons/check.png",
    leftImage: "/assets/images/headPlanet.png"
};

const Mission = () => {
    return (
        <div className="mission-box">
            <div className="mission-about-block">
                <div className="mission-left-column">
                    <img
                        src={missionContent.leftImage}
                        alt="Left Column Image"
                        className="mission-left-image"
                    />
                </div>
                <div className="mission-right-column">
                    <div className="mission-overlap">
                        <div className="mission-title">
                            <div className="mission-overlap-group">
                                <img
                                    src={missionContent.icon}
                                    alt="Mission Icon"
                                    className="mission-icon-image"
                                />
                                <div className="title-container">
                                    <div className="mission-our-sub">{missionContent.subTitle}</div>
                                    <div className="mission-our">{missionContent.title}</div>
                                </div>
                            </div>
                        </div>
                        <p className="mission-description">
                            {missionContent.description}
                        </p>
                    </div>
                    <div className="mission-icon-list">
                        <div className="mission-icon-list-left">
                            {missionContent.values.slice(0, 3).map((value, index) => (
                                <div key={index} className="mission-list">
                                    <img
                                        src={missionContent.checkIcon}
                                        alt="Check Icon"
                                        className="mission-check-icon"
                                    />
                                    <div className="mission-text">{value}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mission-icon-list-right">
                            {missionContent.values.slice(3).map((value, index) => (
                                <div key={index} className="mission-list">
                                    <img
                                        src={missionContent.checkIcon}
                                        alt="Check Icon"
                                        className="mission-check-icon"
                                    />
                                    <div className="mission-text">{value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
