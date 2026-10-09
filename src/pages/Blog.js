import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="content">
      <h2>Blog Posts</h2>
      <p>Choose a blog post to read.</p>

      <ul className="post-list">
        <li>
          <Link to="post1">Post 1: Web Development</Link>
        </li>
        <li>
          <Link to="post2">Post 2: Learning React</Link>
        </li>
        <li>
          <Link to="post3">Post 3: Career Skills</Link>
        </li>
      </ul>
    </div>
  );
}

export default Blog;
