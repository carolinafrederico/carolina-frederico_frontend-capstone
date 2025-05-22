import React, { useState, useEffect } from "react";
import "./ApiArticles.css";

const ApiArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch articles");
        const data = await response.json();
        setArticles(data.articles.slice(0, 4)); // Limit to 5 articles
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="content-wrapper">
        
      <main className="blog-container">
        
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="blog-card">
              <img
                src={article.urlToImage || "https://placehold.co/600x400"}
                alt={article.title}
                className="blog-image"
              />
              <h2>{article.title}</h2>
              <p>{article.description || "No description available."}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <button className="read-more">Read More</button>
              </a>
            </div>
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </main>
    </div>
  );
};

export default ApiArticles;


// import React, { useState, useEffect } from "react";

// const ApiArticles = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const apiKey = "7ba4a580810a4bde8575f8bdd4205c7d";
//   const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&apiKey=${apiKey}`;

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error("Failed to fetch articles");
//         }
//         const data = await response.json();
//         setArticles(data.articles);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="content-wrapper">
//       <main id="blog-container" className="obj-width">
//         {articles.map((article, index) => (
//           <div key={index} className="blog-card">
//             <img src={article.urlToImage || "https://placehold.co/600x400"} alt="News" />
//             <h2>{article.title}</h2>
//             <p>{article.description || "No description available."}</p>
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               <button className="read-more">Read More</button>
//             </a>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default ApiArticles;
