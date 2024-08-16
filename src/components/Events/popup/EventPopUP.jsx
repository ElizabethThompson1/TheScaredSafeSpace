import React from 'react';
import './EventPopUP.scss';

const EventPopUP = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div className="popup-container">
            <div className="popup-box">
                <div className="popup-header">
                    <div className="popup-date">{new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase()}</div>
                    <div className="popup-title">{event.title}</div>
                    <div className="popup-close" onClick={onClose}>X</div>
                </div>
                <div className="popup-content">
                    <img className="popup-icon" src={event.icon} alt={event.title} />
                    <div className="popup-details">
                        <p><span className="popup-label">Date and Time:</span> {new Date(event.date).toLocaleString()}</p>
                        <p><span className="popup-label">Description:</span> {event.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPopUP;

