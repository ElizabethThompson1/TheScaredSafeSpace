import React from 'react';
import NavBar from '../components/common/Nav/NavBar';
import './ContactPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
    return (
        <>
          <NavBar/>
          <div className="contact-wrapper">
              <div className="contact-info">
                  <h2>Contact Information</h2>
                  <p className="chat-prompt">Have a question? Send us a message!</p>
                  <div className="info-item">
                      <FontAwesomeIcon icon={faPhone} />
                      <p>+1012 3456 789</p>
                  </div>
                  <div className="info-item">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <p>demo@gmail.com</p>
                  </div>
                  <div className="info-item">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <p>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                  </div>
                  <div className="social-media-icons">
                      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                      <a href="#"><FontAwesomeIcon icon={faDiscord} /></a>
                  </div>
              </div>
              <div className="contact-container">
                  <form className="contact-form">
                      <div className="form-group pair">
                          <div className="form-field">
                              <label htmlFor="firstName">First Name</label>
                              <input type="text" id="firstName" placeholder="Jane" />
                          </div>
                          <div className="form-field">
                              <label htmlFor="lastName">Last Name</label>
                              <input type="text" id="lastName" placeholder="Doe" />
                          </div>
                      </div>
                      <div className="form-group pair">
                          <div className="form-field">
                              <label htmlFor="email">Email</label>
                              <input type="email" id="email" placeholder="Example@email.com" />
                          </div>
                          <div className="form-field">
                              <label htmlFor="phone">Phone Number</label>
                              <input type="text" id="phone" placeholder="123-456-7891" />
                          </div>
                      </div>
                      <div className="form-group">
                          <label>Subscribe to Newsletter</label>
                          <div className="radio-group">
                              <input type="radio" id="yes" name="newsletter" value="yes" />
                              <label htmlFor="yes">Yes</label>
                              <input type="radio" id="no" name="newsletter" value="no" />
                              <label htmlFor="no">No</label>
                          </div>
                      </div>
                      <div className="form-group full-width">
                          <label htmlFor="message">Message</label>
                          <textarea id="message" placeholder="Write your message.."></textarea>
                      </div>
                      <div className="form-group full-width">
                          <button type="submit">Send Message</button>
                      </div>
                  </form>
              </div>
          </div>
        </>
    );
}

export default ContactPage;
