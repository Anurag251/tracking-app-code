import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const image1 =
  "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const image2 =
  "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const image3 =
  "https://images.pexels.com/photos/163792/model-planes-airplanes-miniatur-wunderland-hamburg-163792.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const image4 =
  "https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const image5 =
  "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const Solutions = () => {
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
        <SwiperSlide>
          <div className="item">
            <div
              className="image"
              style={{ backgroundImage: `url(${image1})` }}
            ></div>
            <div className="details">
              <h4 className="name">Warehouse Solutions</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam adipisci cum eligendi dolor suscipit impedit aspernatur
                nihil! Excepturi, veritatis. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quisquam adipisci cum eligendi
                dolor suscipit impedit aspernatur nihil! Excepturi, veritatis.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div
              className="image"
              style={{ backgroundImage: `url(${image2})` }}
            ></div>
            <div className="details">
              <h4 className="name">Warehouse Solutions</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam adipisci cum eligendi dolor suscipit impedit aspernatur
                nihil! Excepturi, veritatis. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quisquam adipisci cum eligendi
                dolor suscipit impedit aspernatur nihil! Excepturi, veritatis.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div
              className="image"
              style={{ backgroundImage: `url(${image3})` }}
            ></div>
            <div className="details">
              <h4 className="name">Warehouse Solutions</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam adipisci cum eligendi dolor suscipit impedit aspernatur
                nihil! Excepturi, veritatis. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quisquam adipisci cum eligendi
                dolor suscipit impedit aspernatur nihil! Excepturi, veritatis.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div
              className="image"
              style={{ backgroundImage: `url(${image4})` }}
            ></div>
            <div className="details">
              <h4 className="name">Warehouse Solutions</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam adipisci cum eligendi dolor suscipit impedit aspernatur
                nihil! Excepturi, veritatis. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quisquam adipisci cum eligendi
                dolor suscipit impedit aspernatur nihil! Excepturi, veritatis.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <div
              className="image"
              style={{ backgroundImage: `url(${image5})` }}
            ></div>
            <div className="details">
              <h4 className="name">Warehouse Solutions</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam adipisci cum eligendi dolor suscipit impedit aspernatur
                nihil! Excepturi, veritatis. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Quisquam adipisci cum eligendi
                dolor suscipit impedit aspernatur nihil! Excepturi, veritatis.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Solutions;
