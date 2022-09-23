import React from "react";
import { Link } from "react-router-dom";
import Loading from "./loading.component";

const BlogItem = ({ blogData }) => {
  return (
    <>
      {!blogData ? (
        "No Data Found"
      ) : (
        <div className="blog-item">
          <div className="image">
            {!blogData.image ? (
              <Loading />
            ) : (
              <img src={blogData.image} alt="blog_image" />
            )}
          </div>
          <div className="content">
            <div className="date">
              <i className="fas fa-calendar-alt"></i>
              {blogData.date.slice(0, 10)} | <i className="fas fa-clock"></i>
              {blogData.date.slice(11, 16)}
            </div>
            <Link to={`/blog-details/${blogData.id}`}>
              <div className="blog-title">{blogData.title}</div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogItem;
