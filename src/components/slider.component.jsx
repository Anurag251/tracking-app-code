import React from "react";
import CustomButton from "./custom-button.component";

export const Slider = ({ sliders }) => {
  return (
    <div className="slider">
      <div className="image">
        <img src={sliders.bgImageURL} alt="" />

        <div className="content">
          <h4>{sliders.title}</h4>
          <h1>{sliders.heading}</h1>
          <p>{sliders.desc}</p>
          <CustomButton>Explore</CustomButton>
        </div>
      </div>
    </div>
  );
};
