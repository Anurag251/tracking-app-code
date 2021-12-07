import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blogData }) => {
  return (
    <>
      {!blogData ? (
        <div className="loading">
          <div className="loading-area">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      ) : (
        <Link to="/blog">
          <div className="blog-item">
            <div className="image">
              {!blogData.imageURL ? (
                <div className="loading">
                  <div className="loading-area">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </div>
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
