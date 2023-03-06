import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./landing.css";
import photo from "../../assets/images/landing.svg";

function LandingCarousel() {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper-landing"
      >
        <SwiperSlide className="landing-slide">
          <img src={photo} alt="" />
        </SwiperSlide>
        <SwiperSlide className="landing-slide">
          <img src={photo} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LandingCarousel;
