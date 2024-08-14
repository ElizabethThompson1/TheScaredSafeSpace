import React from 'react';
import './AboutMission.scss';

const AboutMission = () => {
    const content = {
        missionTitle: {
            title: "OUR MISSION",
            icon: "/assets/icons/circle2.svg",
        },
        boxes: [
            {
                title: "ENVIRONMENTAL PRESERVATION",
                description:
                    "At Scared Safe Space, our mission is to preserve and protect our oceans through community-driven cleanup events....",
                iconSrc: "/assets/icons/planet.svg",
                iconAlt: "Earth planet",
            },
            {
                title: "COMMUNITY ENGAGEMENT",
                description:
                    "Our mission at Scared Safe Space is to engage and empower communities in the fight against ocean pollution...",
                iconSrc: "/assets/icons/houseBlue.svg",
                iconAlt: "Community Engagement",
            },
            {
                title: "EDUCATION AND ADVOCACY",
                description:
                    "Scared Safe Space is dedicated to educating the public about the importance of ocean conservation...",
                iconSrc: "/assets/icons/educationBlue.svg",
                iconAlt: "Education and Advocacy",
            },
        ],
    };

    return (
        <div className="about-mission">
            <div className="info-box">
                <div className="mission-title">
                    <div className="overlap-group">
                        <img
                            src={content.missionTitle.icon}
                            alt="circle"
                            className="icon-mission"
                        />
                        <div className="text-mission">{content.missionTitle.title}</div>
                    </div>
                </div>
                <div className="content-overlap">
                    {content.boxes.map((box, index) => (
                        <div key={index} className="content-group-wrapper">
                            <div className="content-group">
                                <div className="background-rectangle" />
                                <div className="content-inner">
                                    <div className="icon">
                                        <img alt={box.iconAlt} src={box.iconSrc} />
                                    </div>
                                    <div className="title">{box.title}</div>
                                    <p className="description">{box.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMission;
