import React from "react";

export const MobileSliderCard = ({ data }) => {
  return (
    <div className="card">
      <div
        className="image"
        style={{ backgroundImage: `url(${data.imageURL})` }}
      ></div>
    </div>
  );
};
