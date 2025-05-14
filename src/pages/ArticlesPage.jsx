
import React from "react";
import Header from "../components/Header.jsx";
import ReadPosts from "../components/ReadPost.jsx";
import "../App.css";

const ArticlesPage = () => {
  return (
    <div>
     
      <div className="articles-page-container">
        <h2 className="section-title">All Articles</h2>
        <ReadPosts />
      </div>
    </div>
  );
};

export default ArticlesPage;
