"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const TopDestinationCard = () => {
  const [isHoverdVT, setIsHoverdVT] = useState(false);
  const [isHoverdHCM, setIsHoverdHCM] = useState(false);
  const [isHoverDakLak, setIsHoverdDakLak] = useState(false);
  const [isHoverPT, setIsHoverdPT] = useState(false);
  const [isHoverGL, setIsHoverdGL] = useState(false);
  const [isHoverDL, setIsHoverdDL] = useState(false);

  return (
    <div className="flex flex-col gap-8 mt-10">
      <div className="flex flex-row items-center gap-8">
        <Link
          href="search-resort"
          className="flex flex-row items-end justify-center min-w-auto"
          onMouseEnter={() => setIsHoverdVT(true)}
          onMouseLeave={() => setIsHoverdVT(false)}
        >
          <div className={isHoverdVT ? "opacity-90" : ""}>
            <Image
              src="/images/vung-tau.jpg"
              alt="destination"
              height={421}
              width={600}
              className=" w-[600px] h-[230px] object-cover rounded-xl relative"
            />
          </div>

          <div
            className={`text-white md:text-3xl md:px-[153px] text-lg px-[80px] flex flex-col items-center font-bold absolute ${
              isHoverdVT
                ? "-translate-y-14 duration-300"
                : "translate-y-0 duration-300"
            }`}
          >
            {isHoverdVT ? (
              <>
                <span>Phu Quoc</span>
                <div className="text-base font-light text-white flex flex-col justify-center items-center">
                  <span className="flex justify-center md:w-[270px]">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,…
                  </span>
                  <span className="cursor-pointer text-sky-500 hover:text-sky-600">
                    View destination
                  </span>
                </div>
              </>
            ) : (
              <span className="pb-8">Phu Quoc</span>
            )}
          </div>
        </Link>
        <div
          className="flex flex-row items-end justify-center min-w-auto"
          onMouseEnter={() => setIsHoverdHCM(true)}
          onMouseLeave={() => setIsHoverdHCM(false)}
        >
          <div className={isHoverdHCM ? "opacity-90" : ""}>
            <Image
              src="/images/ho-chi-minh.jpeg"
              alt="destination"
              height={421}
              width={600}
              className=" w-[600px] h-[230px] object-cover rounded-xl relative"
            />
          </div>

          <div
            className={`text-white md:text-3xl md:px-[153px] text-lg px-[80px] flex flex-col items-center font-bold absolute ${
              isHoverdHCM
                ? "-translate-y-14 duration-300"
                : "translate-y-0 duration-300"
            }`}
          >
            {isHoverdHCM ? (
              <>
                <span>Ho Chi Minh</span>
                <div className="text-base font-light text-white flex flex-col justify-center items-center">
                  <span className="flex justify-center md:w-[270px]">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,…
                  </span>
                  <span className="cursor-pointer text-sky-500 hover:text-sky-600">
                    View destination
                  </span>
                </div>
              </>
            ) : (
              <span className="pb-8">Ho Chi Minh</span>
            )}
          </div>
        </div>
        <div
          className="flex flex-row items-end justify-center min-w-auto"
          onMouseEnter={() => setIsHoverdDL(true)}
          onMouseLeave={() => setIsHoverdDL(false)}
        >
          <div className={isHoverDL ? "opacity-90" : ""}>
            <Image
              src="/images/da-lat.jpg"
              alt="destination"
              height={421}
              width={600}
              className=" w-[600px] h-[230px] object-cover rounded-xl relative"
            />
          </div>

          <div
            className={`text-white md:text-3xl md:px-[153px] text-lg px-[80px] flex flex-col items-center font-bold absolute ${
              isHoverDL
                ? "-translate-y-14 duration-300"
                : "translate-y-0 duration-300"
            }`}
          >
            {isHoverDL ? (
              <>
                <span>Da Lat</span>
                <div className="text-base font-light text-white flex flex-col justify-center items-center">
                  <span className="flex justify-center md:w-[270px]">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,…
                  </span>
                  <span className="cursor-pointer text-sky-500 hover:text-sky-600">
                    View destination
                  </span>
                </div>
              </>
            ) : (
              <span className="pb-8">Da Lat</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-8">
        <div
          className="flex flex-row items-end justify-center min-w-auto"
          onMouseEnter={() => setIsHoverdDakLak(true)}
          onMouseLeave={() => setIsHoverdDakLak(false)}
        >
          <div className={isHoverDakLak ? "opacity-90" : ""}>
            <Image
              src="/images/dak-lak.jpg"
              alt="destination"
              height={421}
              width={600}
              className=" w-[600px] h-[230px] object-cover rounded-xl relative"
            />
          </div>

          <div
            className={`text-white md:text-3xl md:px-[153px] text-lg px-[80px] flex flex-col items-center font-bold absolute ${
              isHoverDakLak
                ? "-translate-y-14 duration-300"
                : "translate-y-0 duration-300"
            }`}
          >
            {isHoverDakLak ? (
              <>
                <span>Dak Lak</span>
                <div className="text-base font-light text-white flex flex-col justify-center items-center">
                  <span className="flex justify-center md:w-[270px]">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,…
                  </span>
                  <span className="cursor-pointer text-sky-500 hover:text-sky-600">
                    View destination
                  </span>
                </div>
              </>
            ) : (
              <span className="pb-8">Dak Lak</span>
            )}
          </div>
        </div>
        <div
          className="flex flex-row items-end justify-center min-w-auto"
          onMouseEnter={() => setIsHoverdPT(true)}
          onMouseLeave={() => setIsHoverdPT(false)}
        >
          <div className={isHoverPT ? "opacity-90" : ""}>
            <Image
              src="/images/phan-thiet.jpg"
              alt="destination"
              height={421}
              width={600}
              className=" w-[600px] h-[230px] object-cover rounded-xl relative"
            />
          </div>

          <div
            className={`text-white md:text-3xl md:px-[153px] text-lg px-[80px] flex flex-col items-center font-bold absolute ${
              isHoverPT
                ? "-translate-y-14 duration-300"
                : "translate-y-0 duration-300"
            }`}
          >
            {isHoverPT ? (
              <>
                <span>Phan Thiet</span>
                <div className="text-base font-light text-white flex flex-col justify-center items-center">
                  <span className="flex justify-center md:w-[270px]">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,…
                  </span>
                  <span className="cursor-pointer text-sky-500 hover:text-sky-600">
                    View destination
                  </span>
                </div>
              </>
            ) : (
              <span className="pb-8">Phan Thiet</span>
            )}
          </div>
        </div>
        <div
          className="flex flex-row items-end justify-center min-w-auto"
          onMouseEnter={() => setIsHoverdGL(true)}
          onMouseLeave={() => setIsHoverdGL(false)}
        >
          <div className={isHoverGL ? "opacity-90" : ""}>
            <Image
              src="/images/gia-lai-img.jpg"
              alt="destination"
              height={421}
              width={600}
              className=" w-[600px] h-[230px] object-cover rounded-xl relative"
            />
          </div>

          <div
            className={`text-white md:text-3xl md:px-[153px] text-lg px-[80px] flex flex-col items-center font-bold absolute ${
              isHoverGL
                ? "-translate-y-14 duration-300"
                : "translate-y-0 duration-300"
            }`}
          >
            {isHoverGL ? (
              <>
                <span>Gia Lai</span>
                <div className="text-base font-light text-white flex flex-col justify-center items-center">
                  <span className="flex justify-center md:w-[270px]">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia,…
                  </span>
                  <span className="cursor-pointer text-sky-500 hover:text-sky-600">
                    View destination
                  </span>
                </div>
              </>
            ) : (
              <span className="pb-8">Gia Lai</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinationCard;
