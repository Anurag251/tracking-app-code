import React from "react";

const FullCard = ({ children, title, image, rotate }) => (
  <>
    {rotate ? (
      <div className="full-card rotate">
        <div className="details">
          <h3>{title}</h3>
          <p>{children}</p>
        </div>
        <img src={image} alt="" />
      </div>
    ) : (
      <div className="full-card">
        <img src={image} alt="" />
        <div className="details">
          <h3>{title}</h3>
          <p>{children}</p>
        </div>
      </div>
    )}
  </>
);

export default FullCard;
