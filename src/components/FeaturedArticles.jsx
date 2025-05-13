import React from 'react';
import "../App.css";

const FeaturedArticles = () => {
  const articles = [
    { title: 'Economic Impact Analysis', summary: 'Impact of the recent events on the economy.' },
    { title: 'Voices from the Ground', summary: 'Stories from those affected.' },
    { title: 'Future Outlook', summary: 'Expert opinions on what comes next.' },
  ];

  return (
    <section className="container-section">
      <div className="container-content">
        <h3 className="section-title">Featured Articles</h3>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div key={index} className="article-card">
              <h4>{article.title}</h4>
              <p>{article.summary}</p>
              <button className="btn">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;