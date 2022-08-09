import React, { useState, createContext, useEffect } from "react";
import Blog from "../components/blog.component";
import { urls } from "../url";

export const BlogContext = createContext();
export const BlogProvider = () => {
  const [blogDatas, setBlogDatas] = useState([]);

  useEffect(() => {
    fetch(urls + "blog/")
      .then((res) => res.json())
      .then((data) => setBlogDatas(data));
  }, []);

  return (
    <BlogContext.Provider value={[blogDatas, setBlogDatas]}>
      <Blog />
    </BlogContext.Provider>
  );
};
