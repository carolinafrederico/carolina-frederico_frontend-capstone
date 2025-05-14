import React, { useEffect, useState } from "react";
import "../App.css";

const ReadPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/post");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="read-posts-container">
      <ul className="posts-list">
        {posts.length ? (
          posts.map((post) => (
            <li key={post._id} className="post-item">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.content}</p>
              <button className="btn">Read More</button>
            </li>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </ul>
    </div>
  );
};

export default ReadPosts;




// import React, { useEffect, useState } from "react";

// const ReadPosts = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("http://localhost:3001/post");
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h2>All Posts</h2>
//       <ul>
//         {posts.map((post) => (
//           <li key={post._id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ReadPosts;
