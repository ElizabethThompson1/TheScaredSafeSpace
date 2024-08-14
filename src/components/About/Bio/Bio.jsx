import React from 'react';
import './Bio.scss';

const Bio = () => {
  const content = {
    title: {
      icon: "/assets/icons/founderIcon.svg",
      titleText: "FOUNDER",
      subtitleText: "BIO",
    },
    bioText: `is the inspiring founder of [Your Organization's Name], dedicated to healing and strengthening 
    communities through love, respect, and kindness. Drawing on personal experiences of overcoming trauma and 
    finding peace, [Founder's Name] has made it their life's mission to radiate the loving spirit of God, the Divine, 
    and Nature. Born and raised with a deep appreciation for the interconnectedness of humanity, [Founder's Name] 
    has always felt a universal sense of duty to serve others. This calling has driven them to create a platform that 
    emphasizes self-healing, community support, and the transformative power of love. Through a variety of healing 
    modalities and a commitment to quick, compassionate outreach, [Founder's Name] strives to inspire others to 
    embrace their own healing journeys and contribute to a more loving and respectful world.`,
    contactButton: "CONTACT",
  };

  return (
    <div className="bio">
      <div className="overlap">
        <div className="right-column">
          <div className="title">
            <div className="overlap-group">
              <img src={content.title.icon} alt="founder icon" className="icon" />
              <div className="founder">{content.title.titleText}</div>
              <div className="subtitle">{content.title.subtitleText}</div>
            </div>
          </div>
          <button className="button">
            <div className="contact-wrapper">
              <div className="contact">{content.contactButton}</div>
            </div>
          </button>
        </div>
        <p className="bio-text">
          {content.bioText}
        </p>
      </div>
      <div className="left-column" />
    </div>
  );
};

export default Bio;
