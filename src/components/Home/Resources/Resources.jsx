import React from "react";
import "./Resources.scss";

const resourcesContent = {
    subTitle: "OUR",
    title: "RESOURCES",
    description: `At The Safe Space Place, our resources aim to radiate the loving spirit that God, the Divine, and Nature share with us so freely. We believe in the power of self-regulation, trauma healing, and community strengthening through self-care and mutual respect.`,
    buttonText: "LEARN MORE",
    icon: "/assets/icons/circle2.svg",
    images: [
        "/assets/images/treecircle.png",
        "/assets/images/bagsOnBeach.png",
        "/assets/images/beachPickup.png",
    ],
};

const Resources = () => {
    return (
        <div className="resources-box">
            <div className="resources-portfolio">
                <div className="resources-left-column">
                    <div className="resources-title">
                        <div className="resources-overlap-group">
                            <img
                                src={resourcesContent.icon}
                                alt="Resources Icon"
                                className="resources-icon-image"
                            />
                            <div className="title-container">
                                <div className="resources-our-sub">{resourcesContent.subTitle}</div>
                                <div className="resources-our">{resourcesContent.title}</div>
                            </div>
                        </div>
                    </div>
                    <p className="resources-description">
                        {resourcesContent.description}
                    </p>
                    <div className="resources-button">
                        <div className="resources-button-overlap">
                            <span className="resources-button-text">
                                {resourcesContent.buttonText}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="resources-right-column">
                    <div className="resources-overlap-2">
                        {resourcesContent.images.map((image, index) => (
                            <div key={index} className={`resources-image-container resources-image-container-${index + 1}`}>
                                <img
                                    src={image}
                                    alt={`Resource Image ${index + 1}`}
                                    className="resources-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
