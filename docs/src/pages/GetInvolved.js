
import React from 'react';
import './GetInvolved.css';

const GetInvolved = () => {
  return (
    <div className="get-involved-container">
      <section className="form-section">
        <h2>Volunteer With Us</h2>
        <p>Join our team of dedicated volunteers and make a real difference in the lives of underprivileged children. Every small step can become a giant leap!</p>
        <form className="volunteer-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" />
          <textarea placeholder="Tell us why you want to volunteer" rows="5"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="careers-section">
        <h2>Careers</h2>
        <p>We are always looking for passionate individuals to join our mission. While we are a volunteer-driven organization with no paid staff, we occasionally have specific roles or projects that require dedicated long-term commitment.</p>
        <p>Please check back here for any future opportunities or consider volunteering your time to contribute to our cause.</p>
      </section>
    </div>
  );
};

export default GetInvolved;
