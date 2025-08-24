
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/data/events.json')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="events-container">
      <h1>Events</h1>
      <div className="events-grid">
        {events.map(event => (
          <Link to={`/events/${event.id}`} key={event.id} className="folder">
            <div className="folder-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
              </svg>
            </div>
            <div className="folder-name">
              {event.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
