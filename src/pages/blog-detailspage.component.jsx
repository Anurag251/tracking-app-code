import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/loading.component";
import { urls } from "../url";

const BlogDetailspage = () => {
  const [blogDatas, setBlogDatas] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(urls + "blog/")
      .then((res) => res.json())
      .then((datas) => {
        setBlogDatas(datas);
      });
  }, [id]);

  return (
    <div className="blog-details">
      <div>
        {blogDatas.map((blogData, idx) => (
          <span key={idx}>
            {blogData.id === parseInt(id) ? (
              <div className="full-details" key={idx}>
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
                    {blogData.date.slice(0, 10)} |{" "}
                    <i className="fas fa-clock"></i>
                    {blogData.date.slice(11, 16)}
                  </div>

                  <div className="blog-title">{blogData.title}</div>

                  <div className="desc">{blogData.description}</div>
                </div>
              </div>
            ) : null}
          </span>
        ))}
      </div>

      <div className="recent-blog">
        <div className="title">Recent Post</div>

        <div className="all-post">
          {blogDatas.map((blogData, idx) => {
            return blogData.id !== parseInt(id) ? (
              <Link to={`/blog-details/${blogData.id}`} key={idx}>
                <div className="item">
                  <div className="image">
                    <img src={blogData.image} alt="" />
                  </div>
                  <div className="name">{blogData.title}</div>
                </div>
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailspage;
