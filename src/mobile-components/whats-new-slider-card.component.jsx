import React from "react";

const WhatsNewCard = ({ data }) => (
  <div className="card with-data">
    <div className="image" style={{ backgroundImage: `url(${data.imageURL})` }}>
      <div className="content">
        <h5 className="name">{data.name}</h5>
        <h6 className="price">{data.price}/-</h6>
      </div>
    </div>
  </div>
);

export default WhatsNewCard;
