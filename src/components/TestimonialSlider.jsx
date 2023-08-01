import React from "react";

// import testimonial Data
import { testimonialsData } from "../data";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

import { Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper slidesPerView={"auto"} centeredSlides={true} spaceBetween={20} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
      {testimonialsData.map((slide, index) => {
        const { image, message, name, web } = slide;
        return (
          <SwiperSlide
            key={index}
            className="bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] mx-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left gap-x-[30px]"
          >
            {/* Avatar image */}
            <img className="w-[100px]" src={image} alt="" />

            {/* text */}
            <div>
              <div className="text-lg text-primary font-bold">{name}</div>
              <div className="mb-4 font-semibold text-accent-primary">{web}</div>
              <p className="xl:max-w-[300px] max-w-[500px]">{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
