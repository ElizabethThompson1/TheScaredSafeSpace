import React from "react";
import "./InfoBox.scss";

const infoBoxData = [
    {
        title: "PROVIDE HEALING AND SELF-REGULATION TOOLS",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        icon: "/assets/icons/icons8-arrow-64.png",
    },
    {
        title: "FOSTER COMMUNITY STRENGTH AND CONNECTION",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        icon: "/icons/icons8-arrow-64.png",
    },
    {
        title: "PROMOTE UNIVERSAL VALUES OF RESPECT AND KINDNESS",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        icon: "/icons/icons8-arrow-64.png",
    },
];

export const InfoBox = () => {
    return (
        <div className="info-box-container">
            <div className="info-box">
                {infoBoxData.map((content, index) => (
                    <div key={index} className={`info-box-item-${index + 1}`}>
                        <div className="info-box-content">
                            <p className="info-box-title">{content.title}</p>
                            <p className="info-box-description">{content.description}</p>
                            <div className="info-box-icon">
                                <img src={content.icon} alt="Arrow Icon" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
