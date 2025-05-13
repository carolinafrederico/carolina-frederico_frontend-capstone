import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/" className="nav-link">Home</a>
        <a href="/articles" className="nav-link">Articles</a>
        <a href="/open-data" className="nav-link">Open Data</a>
        <a href="/citizen-journalism" className="nav-link">Citizen Journalism</a>
      </div>
      <div className="nav-right">
        <a href="/login" className="nav-link">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;