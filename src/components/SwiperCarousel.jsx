import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";
import { FreeMode, Navigation, Thumbs } from "swiper";

const SwiperCarousel = ({dataItem}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
  return (
    <div className='swiper-custom'>
        <Swiper 
            style={{
              "--swiper-navigation-color": "gold",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2">
              {
                dataItem?.images?.map((image,id) => (
                  <SwiperSlide key={id}>
                    <img style={{width:'100%', height: '100%'}} src={image} alt="" />
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {
                dataItem?.images?.map((image,id) => (
                  <SwiperSlide key={id}>
                    <img style={{width:'100%', height: '100%'}} src={image} alt="" />
                  </SwiperSlide>
                ))
              }
            </Swiper>
    </div>
  )
}

export default SwiperCarousel