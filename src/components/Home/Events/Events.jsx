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
            eventName: "Mindful Meditation for Mental Health",
            eventType: "Online",
            date: "2024-09-15",
            imageUrl: "/assets/images/planet1.png"
        },
        {
            eventName: "Yoga for Anxiety Relief",
            eventType: "In-Person",
            date: "2024-09-20",
            imageUrl: "/assets/images/planet1.png"
        },
        {
            eventName: "Creative Art Therapy Workshop",
            eventType: "In-Person",
            date: "2024-09-25",
            imageUrl: "/assets/images/planet1.png"
        },
        {
            eventName: "Virtual Yoga for Mental Health",
            eventType: "Online",
            date: "2024-10-01",
            imageUrl: "/assets/images/planet1.png"
        },
        {
            eventName: "Crafts for Calm: DIY Stress Balls",
            eventType: "In-Person",
            date: "2024-10-05",
            imageUrl: "/assets/images/planet1.png"
        },
        {
            eventName: "Mindful Coloring and Chat",
            eventType: "Online",
            date: "2024-10-10",
            imageUrl: "/assets/images/planet1.png"
        },
        {
            eventName: "Nature Walk & Yoga",
            eventType: "In-Person",
            date: "2024-10-15",
            imageUrl: "/assets/images/planet1.png"
        },
        {
            eventName: "Online Journaling for Mental Clarity",
            eventType: "Online",
            date: "2024-10-20",
            imageUrl: "/assets/images/planet1.png"
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
