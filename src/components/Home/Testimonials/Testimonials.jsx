import React, { useState } from "react";
import "./Testimonials.scss";

const Testimonials = () => {
    const testimonialsData = {
        leftColumn: {
            icon: "/assets/icons/circle2.svg",
            titleSmall: "CLIENTS FEEDBACK",
            titleLarge: "OUR TESTIMONIALS",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },
        rightColumn: [
            {
                stars: 4.5,
                text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                clientName: "JOHN DE",
                clientTitle: "ART DIRECTOR",
                clientImage: "/assets/images/testimonials/person.png"
            },
            {
                stars: 5,
                text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                clientName: "JANE DOE",
                clientTitle: "MARKETING MANAGER",
                clientImage: "/assets/images/testimonials/person2.png"
            }
        ]
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isReadMore, setIsReadMore] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.rightColumn.length);
        setIsReadMore(false); // Reset read more state when switching testimonials
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.rightColumn.length - 1 : prevIndex - 1
        );
        setIsReadMore(false); // Reset read more state when switching testimonials
    };

    const handleReadMoreToggle = () => {
        setIsReadMore((prevState) => !prevState);
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <img key={i} src="../../assets/icons/star.svg" alt="Star" className="star" />
                ))}
                {halfStar && <img src="../../assets/icons/halfstar.svg" alt="Half Star" className="star" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <img key={i} src="../../assets/icons/star.svg" alt="Empty Star" className="star empty" />
                ))}
            </>
        );
    };

    const renderText = (text) => {
        const wordLimit = 20;
        const words = text.split(" ");
        if (words.length > wordLimit && !isReadMore) {
            return (
                <>
                    {words.slice(0, wordLimit).join(" ")}...{" "}
                    <button className="read-more" onClick={handleReadMoreToggle}>
                        Read more
                    </button>
                </>
            );
        } else if (isReadMore) {
            return (
                <>
                    {text}{" "}
                    <button className="read-more" onClick={handleReadMoreToggle}>
                        Show less
                    </button>
                </>
            );
        } else {
            return text;
        }
    };

    return (
        <div className="testimonial-box">
            <div className="testimonial-content">
                <div className="testimonial-left">
                    <div className="testimonial-left-content">
                        <div className="testimonial-title">
                            <div className="title-group">
                                <img
                                    src={testimonialsData.leftColumn.icon}
                                    alt="Resources Icon"
                                    className="resources-icon-image"
                                />
                                <div className="testimonial-small-title">{testimonialsData.leftColumn.titleSmall}</div>
                                <div className="testimonial-large-title">{testimonialsData.leftColumn.titleLarge}</div>
                            </div>
                        </div>
                        <p className="testimonial-description">{testimonialsData.leftColumn.description}</p>
                    </div>
                </div>
                <div className="testimonial-right">
                    <div className="testimonial-right-wrapper">
                        <div className="testimonial-right-content">
                            <div className="star-rating">
                                {renderStars(testimonialsData.rightColumn[currentIndex].stars)}
                            </div>
                            <p className="testimonial-text">
                                {renderText(testimonialsData.rightColumn[currentIndex].text)}
                            </p>
                            <div className="client-info">
                                <div className="image-container">
                                    <img
                                        className="client-image"
                                        alt={testimonialsData.rightColumn[currentIndex].clientName}
                                        src={testimonialsData.rightColumn[currentIndex].clientImage}
                                    />
                                </div>
                                <div className="client-name">{testimonialsData.rightColumn[currentIndex].clientName}</div>
                                <div className="client-title">{testimonialsData.rightColumn[currentIndex].clientTitle}</div>
                            </div>
                            <div className="carousel-controls">
                                <button onClick={handlePrevious}>Previous</button>
                                <button onClick={handleNext}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
