import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const CitizenJournalism = () => {
    return (
      <section className="container-section">
        <div className="blog-container">
          <h3 className="section-title">Citizen Journalism</h3>
          <p>
            Empowering the community to share their stories. Submit your reports to be featured in our Citizen Journal.
          </p>
          <Link to="/citizen-journalism" className="btn">Get Involved</Link>
        </div>
      </section>
    );
  };
  
  export default CitizenJournalism;