import React from "react";
import Slider from "react-slick";
import "./Events.scss";

const eventsData = {
    titleSection: {
        icon: "/assets/icons/circle2.svg",
        our: "OUR",
        events: "EVENTS"
    },
    events: [
        {
            id: 1,
            date: "2024-03-06",
            title: "Conduct UX research for new project",
            type: "Research",
           imageUrl: "/assets/images/headPlanet.png",
            description: "Detailed information about conducting UX research for the new project."
        },
        {
            id: 2,
            date: "2024-08-15",
            title: "Planning and Meeting for new project",
            type: "Meeting",
           imageUrl: "/assets/images/headPlanet.png",
            description: "Meeting with the team to plan the new project."
        },
        {
            id: 3,
            date: "2024-08-30",
            title: "Retrospective Meeting",
            type: "Retrospective",
           imageUrl: "/assets/images/headPlanet.png",
            description: "Reflecting on the project's progress in the retrospective meeting."
        },
        {
            id: 4,
            date: "2024-07-10",
            title: "Design Sprint",
            type: "Workshop",
           imageUrl: "/assets/images/headPlanet.png",
            description: "A full-day workshop focused on design sprints."
        },
        {
            id: 5,
            date: "2024-08-22",
            title: "User Testing",
            type: "Testing",
           imageUrl: "/assets/images/headPlanet.png",
            description: "Conduct user testing sessions to gather feedback."
        },
        {
            id: 6,
            date: "2024-03-25",
            title: "Development Handoff",
            type: "Handoff",
           imageUrl: "/assets/images/headPlanet.png",
            description: "Handoff designs to the development team."
        }
    ]
};

const Events = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="events-box">
            <div className="events-title">
                <div className="title-group">
                    <img
                        src={eventsData.titleSection.icon}
                        alt="Icon"
                        className="background-icon"
                    />
                    <div className="text-group">
                        <div className="our">{eventsData.titleSection.our}</div>
                        <div className="events">{eventsData.titleSection.events}</div>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                {eventsData.events.map((event, index) => (
                    <div key={index} className="carousel-item">
                        <div className="image-container">
                            <img src={event.imageUrl} alt={event.eventName} className="carousel-image" />
                            <div className="overlay">
                                <div className="overlay-content">
                                    <h3>{event.eventName}</h3>
                                    <p>{event.eventType}</p>
                                    <p>{event.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Events;
