import React from "react";
import Navbar from "./Navbar";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">Press Room</h1>
        <span className="tagline">Empowering News, Data, and Voices</span>
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
