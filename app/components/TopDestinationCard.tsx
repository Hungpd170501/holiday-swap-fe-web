"use client";

import Image from "next/image";
import React, { useState } from "react";

const TopDestinationCard = () => {
  const [isHoverd, setIsHoverd] = useState(false);

  return (
    <div
      className="flex flex-row items-end justify-center min-w-auto"
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <div className={isHoverd ? "opacity-90" : ""}>
        <Image
          src="/images/vung-tau.jpg"
          alt="destination"
          height={421}
          width={600}
          className="object-cover rounded-xl relative"
        />
      </div>

      <div
        className={`text-white md:text-3xl md:px-[153px] text-lg px-[80px] flex flex-col items-center font-bold absolute ${
          isHoverd
            ? "-translate-y-14 duration-300"
            : "translate-y-0 duration-300"
        }`}
      >
        {isHoverd ? (
          <>
            <span>Vung Tau</span>
            <div className="text-base font-light text-white flex flex-col justify-center items-center">
              <span className="flex justify-center md:w-[270px]">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia,…
              </span>
              <span className="cursor-pointer text-sky-500 hover:text-sky-600">
                View destination
              </span>
            </div>
          </>
        ) : (
          <span className="pb-8">Vung Tau</span>
        )}
      </div>
    </div>
  );
};

export default TopDestinationCard;
