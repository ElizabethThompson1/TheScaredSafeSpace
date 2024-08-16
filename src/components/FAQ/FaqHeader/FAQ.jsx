import React from 'react';
import "./FAQ.scss";

const FAQHeader = () => {
    return (
        <div className="faq-header-container">
            <div className="faq-header-left">
                <div className="faq-header-text-group">
                    <div className="faq-header-title">
                        <img
                            src="/assets/icons/circle2.svg"
                            alt="Icon"
                            className="faq-header-icon"
                        />
                        <span className="faq-header-title-text">FAQ</span>
                    </div>
                    {/* <p className="faq-header-description">
                        Learn more about our frequently asked questions and answers.
                    </p> */}
                </div>
            </div>
            <div className="faq-header-right">
                <div className="faq-image-container">
                    <img
                        className="faq-header-image"
                        alt="FAQ"
                        src="/assets/images/FAQ.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default FAQHeader;
