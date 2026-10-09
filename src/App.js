import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BlogLayout from "./components/BlogLayout";
import Blog from "./pages/Blog";
import Post1 from "./pages/Post1";
import Post2 from "./pages/Post2";
import Post3 from "./pages/Post3";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<Blog />} />
          <Route path="post1" element={<Post1 />} />
          <Route path="post2" element={<Post2 />} />
          <Route path="post3" element={<Post3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
