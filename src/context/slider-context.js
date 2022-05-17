import React, { useState, createContext } from "react";

import Slide from "../components/slide.component";

const bannerImage1 =
  "https://images.pexels.com/photos/4484155/pexels-photo-4484155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const bannerImage2 =
  "https://images.pexels.com/photos/4604662/pexels-photo-4604662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const bannerImage3 =
  "https://images.pexels.com/photos/4254135/pexels-photo-4254135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

export const SliderContext = createContext();

export const SliderProvider = () => {
  const [sliderData, setSliderData] = useState([
    {
      id: 1,
      title: "Tracking App",
      heading: "Our Big Warehouse",
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
      bgImageURL: bannerImage3,
    },
  ]);

  return (
    <SliderContext.Provider value={[sliderData, setSliderData]}>
      <Slide />
    </SliderContext.Provider>
  );
};
