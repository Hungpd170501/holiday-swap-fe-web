import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import DetailSwiperButton from "./DetailSwiperButton";
import DetailApartmentBot from "./DetailApartmentBot";

interface CarouselProps {
  slices: string[];
}

const DetailApartmentCarosel: React.FC<CarouselProps> = ({ slices }) => {
  return (
    <div className="flex gap-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ height: 100 }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row-reverse",
          }}
        >
          <DetailSwiperButton>
            <FaArrowLeft size={10} />
          </DetailSwiperButton>

          {slices?.map((s: any, index: any) => (
            <div className="flex flex-col ">
              <SwiperSlide key={index}>
                <div className="flex flex-row">
                  <div>
                    <img
                      src={s}
                      alt="destination"
                      height={100}
                      width={200}
                      className="object-cover  relative"
                      style={{ height: 100 }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default DetailApartmentCarosel;
