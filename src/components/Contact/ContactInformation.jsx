import React from "react";
import "./ContactInformation.scss";

const contactInfo = {
    title: "Contact Information",
    phone: "+1012 3456 789",
    email: "demo@gmail.com",
    address: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
    liveChat: "Say something to start a live chat!",
    icons: {
        location: "carbon-location-filled.svg",
        phone: "bxs-phone-call.svg",
        email: "ic-sharp-email.svg",
        vector: "vector.svg",
        vector2: "vector-2.svg",
        image: "image.svg",
        cursor: "clarity-cursor-hand-click-line.svg"
    }
};

const ContactInformation = () => {
    return (
        <div className="contact-container">
            <div className="contact-card">
                <div className="left-panel">
                    <div className="contact-title">{contactInfo.title}</div>
                    <div className="contact-details">
                        <div className="detail-item">
                            <img
                                className="icon"
                                alt="Location Icon"
                                src={contactInfo.icons.location}
                            />
                            <p className="text">{contactInfo.address}</p>
                        </div>
                        <div className="detail-item">
                            <img
                                className="icon"
                                alt="Phone Icon"
                                src={contactInfo.icons.phone}
                            />
                            <p className="text">{contactInfo.phone}</p>
                        </div>
                        <div className="detail-item">
                            <img
                                className="icon"
                                alt="Email Icon"
                                src={contactInfo.icons.email}
                            />
                            <p className="text">{contactInfo.email}</p>
                        </div>
                    </div>
                    <div className="icons">
                        <img className="vector" alt="Decorative Vector" src={contactInfo.icons.vector} />
                        <img className="vector2" alt="Decorative Vector 2" src={contactInfo.icons.vector2} />
                    </div>
                </div>
                <div className="right-panel">
                    <form className="contact-form">
                        <h2>Contact Us</h2>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message"></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactInformation;
