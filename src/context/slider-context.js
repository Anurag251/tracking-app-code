import React, { useState, createContext } from "react";
import bannerImage1 from "../assets/images/banner.png";
import bannerImage2 from "../assets/images/banner2.png";
import Slide from "../components/slide.component";

export const SliderContext = createContext();

export const SliderProvider = () => {
  const [sliderData, setSliderData] = useState([
    {
      id: 1,
      title: "Tracking App",
      heading: "Giving your hunger a new option",
      desc: "Bid goodbye to your usual boring meals and say hello to diverse exotic options from thousands of restaurants.",
      bgImageURL: bannerImage1,
    },

    {
      id: 2,
      title: "Tracking App",
      heading: "Real Time Location Tracking",
      desc: "Bid goodbye to your usual boring meals and say hello to diverse exotic options from thousands of restaurants.",
      bgImageURL: bannerImage2,
    },

    {
      id: 3,
      title: "Tracking App",
      heading: "Giving your hunger a new option",
      desc: "Bid goodbye to your usual boring meals and say hello to diverse exotic options from thousands of restaurants.",
      bgImageURL: bannerImage1,
    },
  ]);

  return (
    <SliderContext.Provider value={[sliderData, setSliderData]}>
      <Slide />
    </SliderContext.Provider>
  );
};
