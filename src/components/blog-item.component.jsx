import React from "react";
import { Link } from "react-router-dom";
import Loading from "./loading.component";

const BlogItem = ({ blogData }) => {
  return (
    <>
      {!blogData ? (
        <Loading />
      ) : (
        <Link to="/blog">
          <div className="blog-item">
            <div className="image">
              {!blogData.imageURL ? (
                <Loading />
              ) : (
                <img src={blogData.imageURL} alt="blog_image" />
              )}
            </div>
            <div className="content">
              <div className="date">{blogData.date}</div>
              <div className="blog-title">{blogData.title}</div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default BlogItem;
