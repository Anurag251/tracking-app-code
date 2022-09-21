import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { urls } from "../url";
import Loading from "./loading.component";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch(urls + "partners/")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);

  return (
    <div className="partners">
      <div className="title">Partners</div>

      {partners[0] !== undefined ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <a href={partner.link} target="blank">
                <div className="item">
                  <img src={partner.image} alt="" />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Partners;
