import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import "./CreatePost.css";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const CreatePost = ({ user }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // Markdown content
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user._id) {
      console.error("User not authenticated");
      return;
    }

    const formData = { title, content, author: user._id };

    try {
      const response = await fetch("http://localhost:3001/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setTitle("");
        setContent("");
        navigate(`/articles/${data._id}`);
      } else {
        console.error("Failed to create post:", data.message);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  if (!user) {
    return <p>Please log in to create a post.</p>;
  }

  return (
    <div className="create-post-wrapper">
      <div className="create-post-container">
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit} className="create-post-form">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="content">Content</label>
          <div data-color-mode="light">
            <MDEditor
              value={content}
              onChange={setContent}
              height={300}
            />
          </div>

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CreatePost = (props) => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//      const formData = { title, content, author: props.user._id}
//       const response = await fetch("http://localhost:3001/post", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       console.log("Post Created:", data);
//       setTitle("");
//       setContent("");
      
//       // navigate(`/articles/${data._id}`, { state: { post: data } });
//       navigate(`/articles/${data._id}`);
//     } catch (error) {
//       console.error("Error creating post:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Create Post</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           required
//         />
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;
