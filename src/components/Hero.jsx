import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>BREAKING NEWS: MAJOR EVENT SHAKES THE CITY</h2>
        <p>
          Stay informed with the latest updates on the ongoing situation. Exclusive insights and coverage from our top journalists.
        </p>
        <Link to="/articles" className="btn read-more">Read More</Link>
      </div>
    </section>
  );
};

export default Hero;
