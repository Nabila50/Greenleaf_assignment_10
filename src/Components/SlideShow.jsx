import React from "react";
// import Swiper from "swiper";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router";

const SlideShow = () => {
  return (
    <div className="relative w-full h-[500px] ">
      <Swiper
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            className="w-full h-[500px] object-cover opacity-40"
            src="https://i.ibb.co/0ymhSCvH/1.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px] object-cover opacity-40"
            src="https://i.ibb.co/93ZbKS4R/4.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px] object-cover opacity-50"
            src="https://i.ibb.co/WvyPc3LB/2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[500px] object-cover opacity-50"
            src="https://i.ibb.co/6cPNsWKf/3.jpg"
            alt=""
          />
        </SwiperSlide>
        ...
      </Swiper>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-20 text-center px-4">
        <h1 className="text-white text-7xl font-bold mb-4">Welcome</h1>
        <p className="text-white text-xl mb-6">Where you can find yourself</p>
        
      </div>
    </div>
  );
};

export default SlideShow;
