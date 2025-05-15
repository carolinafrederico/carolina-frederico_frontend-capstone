import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const ReadPosts = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`http://localhost:3001/post/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      setPosts(posts.filter((post) => post._id !== postId));
      ("Post deleted successfully!");
    } catch (error) {
      (`Error: ${error.message}`);
    }
  };

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
          posts.map((post) => {
          
            return (
            <li key={post._id} className="post-item">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.content}</p>
              <Link to={`/articles/${post._id}`}>
                <button className="btn">Read More</button>
              </Link>
              {user && user._id === post.author && (
                <div className="post-actions">
                  <button
                    className="btn edit-btn"
                    onClick={() => navigate(`/articles/edit/${post._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn delete-btn"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          )
          })
        ) : (
          <p>No articles found.</p>
        )}
      </ul>
    </div>
  );
};

export default ReadPosts;


// import React, { useEffect, useState } from "react";
// import "../App.css";
// import { Link } from "react-router-dom";

// const ReadPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("http://localhost:3001/post");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setPosts(data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) {
//     return <p>Loading articles...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="read-posts-container">
//       <ul className="posts-list">
//         {posts.length ? (
//           posts.map((post) => (
//             <li key={post._id} className="post-item">
//               <h3 className="post-title">{post.title}</h3>
//               <p className="post-content">{post.content}</p>
//               <Link to= {`/articles/${post._id}`}><button className="btn">Read More</button></Link>
//             </li>
//           ))
//         ) : (
//           <p>No articles found.</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default ReadPosts;
