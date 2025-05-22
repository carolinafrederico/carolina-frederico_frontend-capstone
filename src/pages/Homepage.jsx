/////////////////////////////////////
import React from "react";
import "../App.css";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import OpenData from "../components/OpenData.jsx";
import Footer from "../components/Footer.jsx";
import CitizenJournalism from "../components/CitizenJournalism/CitizenJournalism.jsx";
import ApiArticles from "../components/ApiArticles/ApiArticles.jsx";

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      

      {/* Hero Section */}
      <Hero />

      {/* API Articles Section */}
      <ApiArticles />

      {/* Open Data Section */}
      <OpenData />

      {/* Citizen Journalism Section */}
      <CitizenJournalism />

      {/* Footer */}
      <Footer />
    </div>
  );
};

const FeaturedArticles = () => {
  return (
    <div className="featured-articles-container">
      <h2 className="section-title">Featured Articles</h2>
      <div className="articles-wrapper">
        <div className="article-card">
          <h4>Economic Impact Analysis</h4>
          <p>Impact of the recent events on the economy.</p>
          <button className="btn">Read More</button>
        </div>

        <div className="article-card">
          <h4>Voices from the Ground</h4>
          <p>Stories from those affected.</p>
          <button className="btn">Read More</button>
        </div>

        <div className="article-card">
          <h4>Future Outlook</h4>
          <p>Expert opinions on what comes next.</p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

////////////////////////

// import React from "react";
// import Header from "../components/Header.jsx";
// import Hero from "../components/Hero.jsx";
// import FeaturedArticles from "../components/FeaturedArticles.jsx";
// import OpenData from "../components/OpenData.jsx";
// import Footer from "../components/Footer.jsx";
// import CitizenJournalism from "../components/CitizenJournalism.jsx";

// const HomePage = () => {
//   return (
//     <div >
//       {/* Header */}
//       <Header />

//       {/* Hero Section */}
//       <Hero />

//       {/* Featured Articles Section */}
//       <FeaturedArticles />

//       {/* Open Data Section */}
//       <OpenData />

//       {/* CitizenJournalism Section */}
//       <CitizenJournalism />

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;
