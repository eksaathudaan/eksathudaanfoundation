
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [eventImages, setEventImages] = useState([]);

  useEffect(() => {
    const fetchEventImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/public-gallery');
        const data = await response.json();
        if (response.ok) {
          setEventImages(data);
        } else {
          console.error('Failed to fetch event images', data.msg);
        }
      } catch (error) {
        console.error('Error fetching event images:', error);
      }
    };
    fetchEventImages();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Miles to go before we sleep</h1>
        <p>Ek Sath Udaan Foundation is a volunteer-driven initiative started in 2025 with one dream — to ensure no child is left without education, opportunities, and hope.</p>
        <div className="cta-buttons">
          <a href="/get-involved" className="btn">Volunteer With Us</a>
          <a href="#" className="btn">Sponsor a Child</a>
          <a href="#" className="btn">Support a Classroom</a>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="who-we-are-section">
        <h2>Who We Are</h2>
        <p>Ek Sath Udaan Foundation is a volunteer-driven initiative started in 2025 with one dream — to ensure no child is left without education, opportunities, and hope.</p>
        <p>We set up makeshift schools right inside communities — under flyovers, in slum clusters, roadside settlements — so children don’t have to walk miles or spend money to learn.</p>
        <p>✨ If a child cannot go to school, we bring the school to the child.</p>
      </section>

      {/* Our Impact in Numbers */}
      <section className="impact-section">
        <h2>Impact So Far</h2>
        <div className="impact-container">
          <div className="impact-card">
            <h3>Hundreds</h3>
            <p>Children reached under flyovers, roadside pavements, and slum areas.</p>
          </div>
          <div className="impact-card">
            <h3>Many</h3>
            <p>Enrolled into government schools for formal education.</p>
          </div>
          <div className="impact-card">
            <h3>Daily</h3>
            <p>Volunteers teaching between 9 AM – 7 PM.</p>
          </div>
          <div className="impact-card">
            <h3>Holistic</h3>
            <p>Support beyond academics: hygiene, nutrition, confidence-building, creativity.</p>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="work-section">
        <h2>What We Do</h2>
        <div className="work-container">
          <div className="work-card">
            <span role="img" aria-label="School">🏫</span>
            <h3>Free Makeshift Schools</h3>
            <p>We set up free makeshift schools directly within underserved communities, ensuring education is accessible where children live.</p>
          </div>
          <div className="work-card">
            <span role="img" aria-label="Enrollment">📝</span>
            <h3>Government School Enrolment</h3>
            <p>We facilitate the enrolment of children into nearby government schools through RTE & SSA, providing pathways to formal education.</p>
          </div>
          <div className="work-card">
            <span role="img" aria-label="Support">🤝</span>
            <h3>After-School Support</h3>
            <p>We provide continuous after-school support to prevent dropouts and ensure children remain engaged and successful in their studies.</p>
          </div>
          <div className="work-card">
            <span role="img" aria-label="Sports">⚽</span>
            <h3>Sports & Games</h3>
            <p>Organizing sports and games to instill discipline, teamwork, and physical well-being among the children.</p>
          </div>
          <div className="work-card">
            <span role="img" aria-label="Hygiene">♀️</span>
            <h3>Menstrual Hygiene Awareness</h3>
            <p>Conducting awareness programs and providing sanitary pad banks to promote menstrual hygiene among girls.</p>
          </div>
          <div className="work-card">
            <span role="img" aria-label="Health">🩺</span>
            <h3>Health Check-ups & Immunisation</h3>
            <p>Regular health check-ups and immunisation drives to ensure the overall health and well-being of the children we serve.</p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="stories-section">
        <h2>Success Stories</h2>
        <div className="stories-container">
          <div className="story-card">
            <img src="/images/IMG-20250817-WA0094.jpg" alt="Priya studying" />
            <blockquote>
              <p>"Priya, once a child laborer, found hope through our Shiksha program. She excelled academically and is now pursuing her dream of becoming an engineer."</p>
              <footer>- Priya</footer>
            </blockquote>
          </div>
          <div className="story-card">
            <img src="/images/IMG-20250817-WA0117.jpg" alt="Rahul at health camp" />
            <blockquote>
              <p>"Rahul, suffering from malnutrition, received regular check-ups and nutritional support through Project Arogya. Today, he is a healthy, energetic child."</p>
              <footer>- Rahul's Mother</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="events-section">
        <h2>Recent Events</h2>
        {eventImages.length === 0 ? (
          <p className="text-center">No recent events to display yet.</p>
        ) : (
          <div className="events-gallery">
            {eventImages.map((image) => (
              <img key={image._id} src={`http://localhost:5000${image.path}`} alt={image.filename} />
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Subscription */}
      <section className="join-hands-section">
        <h2>Join Hands for Change</h2>
        <p>Together, we can give wings to every child’s dreams.</p>
        <div className="cta-buttons">
          <a href="/get-involved" className="btn">Volunteer your time</a>
          <a href="#" className="btn">Sponsor school supplies</a>
          <a href="#" className="btn">Support a classroom</a>
        </div>
        <h3 class="small-text">"Every small step can become a giant leap in a child’s life."</h3>
      </section>
    </div>
  );
};

export default Home;
