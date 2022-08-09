import React from "react";

export const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt="cardImage" />
      <h3 className="name">{data.title}</h3>
      <p className="desc">{data.description}</p>
    </div>
  );
};
