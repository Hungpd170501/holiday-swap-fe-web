"use client";

import Image from "next/image";
import React from "react";
import SearchBanner from "./SearchBanner";

const Banner = () => {
  return (
    <div className="flex-1 py-4">
      <div className="flex gap-8 space-x-5 w-full">
        <div className="min-w-full w-28 z-20">
          <div className="text-black text-[40px] md:text-[64px]">
            Find new holiday to <span className="text-common">exchange</span>{" "}
            and enjoy
          </div>
          <div className="text-[#8c8c8c] py-14 text-sm px-3 md:px-0 md:text-base">
            Discover amzaing places at exclusive deals. <br /> Eat, Shop, Visit
            interesting places around the world.
          </div>
          <SearchBanner />
        </div>
        <Image
          alt="banner"
          src="/images/banner.jpeg"
          width={600}
          height={1080}
          className="object-cover hidden md:block rounded-[50px] relative"
        />
      </div>
    </div>
  );
};

export default Banner;
