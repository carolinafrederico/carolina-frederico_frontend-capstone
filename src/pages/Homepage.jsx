import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import FeaturedArticles from "../components/FeaturedArticles.jsx";
import OpenData from "../components/OpenData.jsx";
import Footer from "../components/Footer.jsx";
import CitizenJournalism from "../components/CitizenJournalism.jsx";

const HomePage = () => {
  return (
    <div >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Featured Articles Section */}
      <FeaturedArticles />

      {/* Open Data Section */}
      <OpenData />

      {/* CitizenJournalism Section */}
      <CitizenJournalism />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
