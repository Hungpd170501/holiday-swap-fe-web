"use client";

import Image from "next/image";
import React, { useState } from "react";

const TopDestinationCard = () => {
  const [isHoverd, setIsHoverd] = useState(false);

  return (
    <div
      className="flex flex-row items-end justify-center"
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
        className={`text-white text-3xl px-[153px] flex flex-col items-center font-bold absolute ${
          isHoverd ? "-translate-y-14 duration-300" : ""
        }`}
      >
        {isHoverd ? (
          <>
            <span>Vung Tau</span>
            <div className="text-base font-light text-white flex flex-col justify-center items-center">
              <span className="">
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
