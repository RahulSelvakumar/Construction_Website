import React from 'react';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="section">
      <div className="section-content">
        <h1 className="section-heading">Contact Us</h1>
        <h2 className="section-heading">XYZ Contractors & Developers</h2>
        <div className="contact-info">
          <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Type your message here" required></textarea>
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
