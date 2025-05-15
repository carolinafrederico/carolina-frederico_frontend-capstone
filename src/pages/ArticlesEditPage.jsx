import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ArticlesEditPage() {
  const { id } = useParams(); // Get the post ID from the URL
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch the current post data when the component mounts
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/post/${id}`);
        if (!response.ok) {
          throw new Error("Error fetching post data");
        }
        const data = await response.json();
        setTitle(data.title);
        setContent(data.content);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  // Handle update form submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/post/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        throw new Error("Error updating post");
      }

      const updatedPost = await response.json();
      alert("Post updated successfully!");
      navigate(`/articles/${updatedPost._id}`);
    } catch (err) {
      alert("Error updating post: " + err.message);
    }
  };

  // Display loading or error state
  if (loading) return <div>Loading post data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
