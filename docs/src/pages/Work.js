
import React, { useState, useEffect } from 'react';
import './Work.css';

const Work = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/data/articles.json')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="work-page-container">
      {articles.map(article => (
        <section key={article.id} className="project-section">
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <small>By {article.author} on {new Date(article.createdAt).toLocaleDateString()}</small>
        </section>
      ))}
    </div>
  );
};

export default Work;
