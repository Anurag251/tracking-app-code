import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { urls } from "../url";
import Loading from "./loading.component";
const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    fetch(urls + "testimonial/")
      .then((res) => res.json())
      .then((data) => setTestimonialData(data));
  }, []);
  return (
    <div className="testimonial">
      <div className="title">Testimonial</div>

      {testimonialData[0] !== undefined ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {testimonialData.map((data, idx) => (
            <SwiperSlide key={idx}>
              <div className="item">
                <div className="image">
                  <img src={data.image} alt="" />
                </div>
                <p className="desc">{data.description}</p>

                <div className="name">{data.name}</div>
                <div className="time">
                  {data.date.slice(0, 10)} | {data.date.slice(11, 16)}
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

export default Testimonial;
