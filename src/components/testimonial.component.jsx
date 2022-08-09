import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import userImage1 from "../assets/images/about1.png";
import userImage2 from "../assets/images/profile.jpg";
import userImage3 from "../assets/images/how-to-use.png";
import userImage4 from "../assets/images/about2.png";
import { urls } from "../url";
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
    </div>
  );
};

export default Testimonial;
