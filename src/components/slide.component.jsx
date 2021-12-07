import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderContext } from "../context/slider-context";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Slider } from "./slider.component";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const Slide = () => {
  const [sliderData] = useContext(SliderContext);

  return (
    <Swiper
      spaceBetween={10}
      effect={"fade"}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {sliderData.map((sliders) => (
        <SwiperSlide key={sliders.id}>
          <Slider sliders={sliders} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;
