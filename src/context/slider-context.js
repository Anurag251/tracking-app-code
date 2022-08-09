import React, { useState, createContext, useEffect } from "react";

import Slide from "../components/slide.component";
import { urls } from "../url";

export const SliderContext = createContext();

export const SliderProvider = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch(urls + "banner/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSliderData(data);
      });
  }, []);

  return (
    <SliderContext.Provider value={[sliderData, setSliderData]}>
      <Slide />
    </SliderContext.Provider>
  );
};
