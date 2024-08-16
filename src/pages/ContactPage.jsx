import React from 'react';
import NavBar from '../components/common/Nav/NavBar';
import './ContactPage.scss';

const ContactPage = () => {
    return (
        <>
          <NavBar/>
          <div className="box"></div>
          <div className="contact-container">
              <form className="contact-form">
                  <div className="form-group pair">
                      <div className="form-field">
                          <label htmlFor="firstName">First Name</label>
                          <input type="text" id="firstName" placeholder="John" />
                      </div>
                      <div className="form-field">
                          <label htmlFor="lastName">Last Name</label>
                          <input type="text" id="lastName" placeholder="Doe" />
                      </div>
                  </div>
                  <div className="form-group pair">
                      <div className="form-field">
                          <label htmlFor="email">Email</label>
                          <input type="email" id="email" placeholder="email@example.com" />
                      </div>
                      <div className="form-field">
                          <label htmlFor="phone">Phone Number</label>
                          <input type="text" id="phone" placeholder="+1 012 3456 789" />
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
        </>
      );
  }
  
  export default ContactPage;
