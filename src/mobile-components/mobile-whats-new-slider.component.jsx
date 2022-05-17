import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { WhatsNewContext } from "../context/mobile-whats-new-context";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import WhatsNewCard from "./whats-new-slider-card.component";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const WhatsNewSlider = () => {
  const [whatsNewData] = useContext(WhatsNewContext);

  return (
    <div className="mobile-slider">
      <Swiper
        slidesPerView={2}
        loop={true}
        spaceBetween={10}
        className="mySwiper"
      >
        {whatsNewData.map((data) => (
          <SwiperSlide key={data.id}>
            <WhatsNewCard data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhatsNewSlider;
