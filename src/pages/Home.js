import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="content">
      <h1>Home Page</h1>
      <p>Welcome to my website! Explore articles about technology,
        web development and career skills.</p>

      <Link to="/blog" className="button">
        Visit Blog
      </Link>
    </div>
  );
}

export default Home;
