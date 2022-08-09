import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { urls } from "../url";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const image1 =
  "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const Solutions = () => {
  const [solutionData, setSolutionData] = useState([]);

  useEffect(() => {
    fetch(urls + "logistic/")
      .then((res) => res.json())
      .then((data) => setSolutionData(data));
  }, []);

  return (
    <div className="solutions">
      <div className="title">Logistics Solutions</div>

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
        {solutionData.map((data, idx) => (
          <SwiperSlide key={idx}>
            <div className="item">
              <div
                className="image"
                style={{ backgroundImage: `url(${data.image})` }}
              ></div>
              <div className="details">
                <h4 className="name">{data.title}</h4>
                <p>{data.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Solutions;
