import React, { useState, createContext, useEffect } from "react";
import Loading from "../components/loading.component";

import Slide from "../components/slide.component";
import { urls } from "../url";

export const SliderContext = createContext();

export const SliderProvider = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch(urls + "banner/")
      .then((res) => res.json())
      .then((data) => {
        setSliderData(data);
      });
  }, []);

  return (
    <SliderContext.Provider value={[sliderData, setSliderData]}>
      {sliderData !== [] ? <Slide /> : <Loading />}
    </SliderContext.Provider>
  );
};
