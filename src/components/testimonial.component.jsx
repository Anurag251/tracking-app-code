import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import userImage1 from "../assets/images/about1.png";
import userImage2 from "../assets/images/profile.jpg";
import userImage3 from "../assets/images/how-to-use.png";
import userImage4 from "../assets/images/about2.png";
const Testimonial = () => {
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
        <SwiperSlide>
          <div className="item">
            <div className="image">
              <img src={userImage1} alt="" />
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus voluptatum recusandae commodi similique libero nihil
              reiciendis iure eius, quia corrupti cumque ipsum saepe,
              consectetur quae? Repudiandae in qui perspiciatis error.
            </p>

            <div className="name">Naruto</div>
            <div className="time">10:00 PM | 2 May 2022</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="image">
              <img src={userImage2} alt="" />
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus voluptatum recusandae commodi similique libero nihil
              reiciendis iure eius, quia corrupti cumque ipsum saepe,
              consectetur quae? Repudiandae in qui perspiciatis error.
            </p>

            <div className="name">Sasuke</div>
            <div className="time">10:00 PM | 2 May 2022</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="image">
              <img src={userImage3} alt="" />
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus voluptatum recusandae commodi similique libero nihil
              reiciendis iure eius, quia corrupti cumque ipsum saepe,
              consectetur quae? Repudiandae in qui perspiciatis error.
            </p>

            <div className="name">Anurag</div>
            <div className="time">10:00 PM | 2 May 2022</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div className="image">
              <img src={userImage4} alt="" />
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus voluptatum recusandae commodi similique libero nihil
              reiciendis iure eius, quia corrupti cumque ipsum saepe,
              consectetur quae? Repudiandae in qui perspiciatis error.
            </p>

            <div className="name">Avishek</div>
            <div className="time">10:00 PM | 2 May 2022</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
