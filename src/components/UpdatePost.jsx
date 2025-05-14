import React, { useState } from "react";

const UpdatePost = () => {
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/post/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await response.json();
      console.log("Post Updated:", data);
      setPostId("");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div>
      <h2>Update Post</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Post ID"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="New Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="New Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePost;
