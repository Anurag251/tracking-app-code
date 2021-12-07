import React, { useEffect } from "react";
import Blog from "../components/blog.component";
import { BlogProvider } from "../context/blog-context";

const Blogpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blogpage">
      <div className="title">Blog</div>
      <BlogProvider>
        <Blog />
      </BlogProvider>
    </div>
  );
};
export default Blogpage;
