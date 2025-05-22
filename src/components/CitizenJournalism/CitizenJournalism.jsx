import React from "react";
import "./CitizenJournalism.css";
import { Link } from "react-router-dom";
const CitizenJournalism = () => {
    return (
      <section className="container-section">
        <div className="blog-container">
          <h3 className="section-title">Citizen Journalism</h3>
          <p>
            Empowering the community to share their stories. Submit your reports to be featured in our Citizen Journal.
          </p>
          <p>
            To address these challenges, some citizen journalists adopt ethical guidelines and verification practices to enhance their credibility. Collaborations between citizen and professional journalists can also bridge gaps, combining grassroots perspectives with journalistic rigor. As the media landscape continues to evolve, citizen journalism remains a vital component of the broader information ecosystem.
          </p>
          <Link to="/citizen-journalism" className="btn">Get Involved</Link>
        </div>
      </section>
    );
  };
  
  export default CitizenJournalism;