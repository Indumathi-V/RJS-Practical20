import React from "react";
import { Link, Outlet } from "react-router-dom";

function BlogLayout() {
  return (
    <div className="container">
      <header>
        <h1>My Blog Website</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>

      <main>
        {/* Child route content is displayed here */}
        <Outlet />
      </main>

      <footer>
        <p>My Blog Website - React Router Practical</p>
      </footer>
    </div>
  );
}

export default BlogLayout;
