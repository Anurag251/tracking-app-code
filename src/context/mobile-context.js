import React, { useState, createContext } from "react";
import mobileSliderImg3 from "../assets/images/mobile-slider-3.jpeg";
import mobileSliderImg4 from "../assets/images/mobile-slider-4.jpeg";
import MobileSlider from "../mobile-components/mobile-slider.component";

const mobileSliderImg2 = "https://i.ytimg.com/vi/f64GdOxJjPE/maxresdefault.jpg";

const mobileSliderImg1 =
  "https://1.bp.blogspot.com/-RS1wY4-J7Bo/YMdpGjII0fI/AAAAAAAACoc/nj1Nw_OqadMeHqDSpWHERRyzYrMx7OvfwCLcBGAsYHQ/s1280/Product%2BBanner%2BDesign.webp";

export const MobileSliderContext = createContext();

export const MobileSliderProvider = () => {
  const [mobileSliderDatas, setMobileSliderDatas] = useState([
    {
      id: 1,
      imageURL: mobileSliderImg1,
      link: "/",
    },

    {
      id: 2,
      imageURL: mobileSliderImg2,
      link: "/",
    },

    {
      id: 3,
      imageURL: mobileSliderImg3,
      link: "/",
    },

    {
      id: 4,
      imageURL: mobileSliderImg4,
      link: "/",
    },
  ]);

  return (
    <MobileSliderContext.Provider
      value={[mobileSliderDatas, setMobileSliderDatas]}
    >
      <MobileSlider />
    </MobileSliderContext.Provider>
  );
};
