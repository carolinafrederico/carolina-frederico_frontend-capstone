import React from 'react';
import "../App.css";

const OpenData = () => {
  return (
    <section className="container-section">
      <div className="container-content">
        <h3 className="section-title">Open Data</h3>
        <div className="data-visualization">
          <img src="/images/board.png" alt="Data Visualization" className="data-image" />
        </div>
        <p>Explore our latest data visualizations powered by Tableau.</p>
        <button className="btn">View More Boards</button>
      </div>
    </section>
  );
};

export default OpenData;