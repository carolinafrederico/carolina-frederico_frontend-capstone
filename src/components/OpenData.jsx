import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

const OpenData = () => {
  return (
    <section className="container-section">
      <div className="blog-container">
        <h3 className="section-title">Open Data</h3>
        <div className="data-visualization">
          <img src="/images/board.png" alt="Data Visualization" className="data-image" width="700px"/>
        </div>
        <p>Explore our latest data visualizations powered by Tableau.</p>
        <Link to ="/open-data" className="btn">View More Boards</Link>
      </div>
    </section>
  );
};

export default OpenData;