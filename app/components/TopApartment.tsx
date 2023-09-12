"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Container from "./Container";
import Image from "next/image";

const TopApartment = () => {
  return (
    <div className="py-32 flex flex-col items-center">
      <div className="md:text-5xl text-3xl font-bold">
        Top <span className="text-common">Apartments</span>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="px-7 max-w-[1000px] gap-8"
      >
        <SwiperSlide className="">
          <Image
            src={"/images/vung-tau.jpg"}
            alt="Carousel"
            width={300}
            height={620}
            className="rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide className="">
          <Image
            src={"/images/vung-tau.jpg"}
            alt="Carousel"
            width={300}
            height={620}
            className="rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide className="">
          <Image
            src={"/images/vung-tau.jpg"}
            alt="Carousel"
            width={300}
            height={620}
            className="rounded-lg"
          />
        </SwiperSlide>

        <SwiperSlide className="">
          <Image
            src={"/images/vung-tau.jpg"}
            alt="Carousel"
            width={300}
            height={620}
            className="rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopApartment;
