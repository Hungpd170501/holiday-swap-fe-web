"use client";

import Image from "next/image";
import React from "react";

const TopDestinationCard = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/images/vung-tau.jpg"
        alt="destination"
        height={421}
        width={600}
        className="object-cover rounded-xl absolute"
      />
      <div className="text-white text-xl font-bold relative">Vung Tau</div>
    </div>
  );
};

export default TopDestinationCard;
