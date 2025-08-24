import React from 'react';
import './Events.css';

const Rakshabandhan2025 = () => {
  const images = [
    '/events/rakshabandhan-2025/IMG_3130.JPG',
    '/events/rakshabandhan-2025/IMG_3134.JPG',
    '/events/rakshabandhan-2025/IMG-20250817-WA0094.jpg',
    '/events/rakshabandhan-2025/IMG-20250817-WA0117.jpg',
    '/events/rakshabandhan-2025/IMG-20250817-WA0127.jpg',
    '/events/rakshabandhan-2025/IMG-20250817-WA0147.jpg',
    '/events/rakshabandhan-2025/IMG-20250817-WA0160.jpg',
  ];

  return (
    <div className="events-container">
      <h1>Rakshabandhan 2025</h1>
      <div className="events-grid">
        {images.map((imageUrl, index) => (
          <div key={index} className="gallery-item">
            <img src={imageUrl} alt={`Rakshabandhan 2025 ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rakshabandhan2025;
