import React from "react";
import Slider from "react-slick";
import "./EventsSlider.scss";

const eventsData = {
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


const NextArrow = ({ onClick }) => (
    <div className="slick-arrow slick-next" onClick={onClick}>
        <img src="/assets/icons/calendar/arrow.svg" alt="Next" />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="slick-arrow slick-prev" onClick={onClick}>
        <img src="/assets/icons/calendar/arrow2.svg" alt="Previous" />
    </div>
);

const EventsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="events-box">
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

export default EventsSlider;
