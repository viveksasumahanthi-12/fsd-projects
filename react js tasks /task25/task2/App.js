import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, []);

  return (
    <div className="container">
      <h1>Single Post</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <span className="badge">Post ID: {post.id}</span>
        </div>
      )}
    </div>
  );
}

export default App;
