import React from "react";

const PageBanner = ({ children, title }) => (
  <div className="page-banner">
    <h4>{title}</h4>
    <h2>{children}</h2>
  </div>
);

export default PageBanner;
