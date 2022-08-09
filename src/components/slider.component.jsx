import React from "react";
import CustomButton from "./custom-button.component";

export const Slider = ({ sliders }) => {
  return (
    <div className="slider">
      <div className="image">
        <img src={sliders.image} alt="" />

        <div className="content">
          <h4>{sliders.tagline}</h4>
          <h1>{sliders.title}</h1>
          <p>{sliders.description}</p>
          <CustomButton>Explore</CustomButton>
        </div>
      </div>
    </div>
  );
};
