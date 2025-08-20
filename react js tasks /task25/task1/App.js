import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data.slice(0, 5), loading: false });
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }

  render() {
    const { posts, loading } = this.state;

    return (
      <div className="container">
        <h1>First 5 Posts</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id} className="card">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
