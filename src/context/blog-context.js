import React, { useState, createContext, useEffect } from "react";
import Blog from "../components/blog.component";
import Loading from "../components/loading.component";
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
      {blogDatas !== [] ? <Blog /> : "No Data Found"}
    </BlogContext.Provider>
  );
};
