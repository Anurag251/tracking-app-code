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

      {solutionData !== [] ? (
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
      ) : (
        "No Data Found"
      )}
    </div>
  );
};

export default Solutions;
