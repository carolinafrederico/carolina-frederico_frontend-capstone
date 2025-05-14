import React, { useState } from "react";

const DeletePost = () => {
  const [postId, setPostId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/post/${postId}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log("Post Deleted:", data);
      setPostId("");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <h2>Delete Post</h2>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="Post ID"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          required
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default DeletePost;
