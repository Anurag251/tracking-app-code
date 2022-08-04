import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MobileSliderContext } from "../context/mobile-context";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { MobileSliderCard } from "./mobile-slider-card.component";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const MobileSlider = () => {
  const [mobileSliderDatas] = useContext(MobileSliderContext);

  return (
    <div className="full-view-slider mobile-slider">
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={10}
        className="mySwiper"
      >
        {mobileSliderDatas.map((data) => (
          <SwiperSlide key={data.id}>
            <MobileSliderCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileSlider;
