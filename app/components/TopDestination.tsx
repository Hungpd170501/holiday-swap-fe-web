"use client";

import React from "react";
import TopDestinationCard from "./TopDestinationCard";

const TopDestination = () => {
  return (
    <div className="py-32 flex flex-col items-center">
      <div className="text-5xl font-bold">
        Top <span className="text-common">Destination</span>
      </div>
      <div className="text-[#8c8c8c] text-base flex flex-col items-center w-full py-14">
        <span>Explore our top destinations voted by more than 100,000+</span>
        <span>customers around the world.</span>
      </div>

      <div className="grid grid-cols-3">
        <TopDestinationCard />
      </div>
    </div>
  );
};

export default TopDestination;
