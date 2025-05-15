import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function ArticlesShowPage() {
  // Create a state variable for the post
  const [post, setPost] = useState(null);
  const { id } = useParams(); // Step 4: Use params to get the post ID from the URL

  // Fetch post data using useEffect
  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`http://localhost:3001/post/${id}`);
        // if (!response.ok) {
        //   throw new Error("Post not found");
        // }
        const data = await response.json();
        setPost(data); // Save the post data to state
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }

    fetchPost();
  }, []); // To trigger the effect when ID changes

  // Display a loading message while fetching
  if (!post) {
    return <div>Loading...</div>;
  }

  // Render the post once data is fetched
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
      <Footer />
    </div>
  );
}
//create a state variable called post 
//useEffect to fetch post from database
//take the post data and save it to state
//Use params to pull the obj id of the post from the URL