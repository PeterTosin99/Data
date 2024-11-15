import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");

  const fetchPost = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch the post");
      }
      const data = await response.json();
      setPost(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]); 

  return (
    <div>
      <h1>Blog Post Details</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Post;