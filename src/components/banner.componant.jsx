import React from "react";
import { SliderProvider } from "../context/slider-context";
import Slide from "./slide.component";

const Banner = () => {
  return (
    <div className="banner">
      <SliderProvider>
        <Slide />
      </SliderProvider>
    </div>
  );
};

export default Banner;
