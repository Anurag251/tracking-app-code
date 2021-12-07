import React, { useContext } from "react";
import { BlogContext } from "../context/blog-context";
import BlogItem from "./blog-item.component";

const Blog = () => {
  const [blogDatas] = useContext(BlogContext);

  return (
    <div className="blog">
      <div className="blog-list">
        {blogDatas.map((blogData) => (
          <BlogItem blogData={blogData} key={blogData.id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
