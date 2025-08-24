import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>To empower underprivileged children through education and provide them with the opportunities they need to build a brighter future.</p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>To contribute to Sustainable Development Goal 4 – Quality Education, and build a literate, confident, and empowered India.</p>
      </section>

      <section className="about-section">
        <h2>Our Approach</h2>
        <ul>
          <li><strong>Volunteer-Driven:</strong> 100% powered by students, homemakers, and working professionals — no paid staff.</li>
          <li><strong>Direct Outreach:</strong> We don’t wait for children to come; we go to where they are.</li>
          <li><strong>Beyond Academics:</strong> Health, hygiene, nutrition, menstrual awareness, and confidence-building.</li>
          <li><strong>Creative Learning:</strong> Dance, art, music, and sports alongside academics.</li>
          <li><strong>Long-Term Commitment:</strong> Continuous support even after enrolment in formal schools.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Who We Serve</h2>
        <ul>
          <li>Children of daily-wage labourers</li>
          <li>Children of ragpickers</li>
          <li>Children from slum-dwelling families</li>
          <li>Children from migrant worker households</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Challenges We Face</h2>
        <ul>
          <li>Convincing parents who depend on children as wage earners</li>
          <li>Limited funds for events, uniforms, and study materials</li>
          <li>Sustaining regular supplies like books, hygiene products, and sanitary pads</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Story – The Spark That Started It All</h2>
        <p>Ek Sath Udaan Foundation was born in 2025 when a group of friends realised that children of labourers, ragpickers, and migrant workers were being deprived of even the basic right to education. These children were often found collecting scrap, babysitting siblings, or sitting idly with no hope for a better future.</p>
        <p>We knew education was the only way to break this cycle. But expecting them to travel to schools was unrealistic. So, we started makeshift schools inside their neighbourhoods — under a tent, in an open space, or even under a tree.</p>
      </section>

      <section className="about-section">
        <h2>Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/images/Sudarsh Daidipya.png" alt="Sudarsh Daidipya" />
            <h3>Sudarsh Daidipya</h3>
            <p>Founder & CEO</p>
            <p>A visionary leader passionate about empowering underprivileged children through education.</p>
          </div>
          <div className="team-member">
            <img src="/images/Kundan_Kumar.png" alt="Kundan Kumar" />
            <h3>Kundan Kumar</h3>
            <p>Director of Operations</p>
            <p>Manages the day-to-day operations, ensuring smooth execution of all projects and initiatives.</p>
          </div>
          <div className="team-member">
            <img src="/images/Nidhi_jha.png" alt="Nidhi Jha" />
            <h3>Nidhi Jha</h3>
            <p>Lead Coordinator</p>
            <p>Coordinates all field activities and volunteer efforts, bridging the gap between the foundation and the communities.</p>
          </div>
        </div>
      </section>

      <section className="about-section text-center">
        <p>✨ “Every child is like a kite waiting to fly, they only need someone to hold the thread and guide them towards the sky”</p>
      </section>
    </div>
  );
};

export default About;