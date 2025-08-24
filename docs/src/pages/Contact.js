
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> info@eksathudaanfoundation.org</p>
        <p><strong>Phone:</strong> +91 12345 67890</p>
        <p><strong>Address:</strong> 123, ABC Street, New Delhi, India</p>
        <div className="map-placeholder">
          {/* Placeholder for Embedded Map */}
          <p>[Embedded Google Map Placeholder]</p>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Send us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
