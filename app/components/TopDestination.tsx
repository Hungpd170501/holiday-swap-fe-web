"use client";

import React from "react";
import TopDestinationCard from "./TopDestinationCard";

const TopDestination = () => {
  return (
    <div className="py-32 flex flex-col items-center">
      <div className="md:text-5xl text-3xl font-bold">
        Top <span className="text-common">Destinations</span>
      </div>
      <div className="text-[#8c8c8c] text-base flex flex-col items-center md:w-full w-auto py-14">
        <span>
          Explore our top destinations voted by more than 100,000+ customers
          around the world.
        </span>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <TopDestinationCard />
        <TopDestinationCard />
        <TopDestinationCard />
        <TopDestinationCard />
        <TopDestinationCard />
        <TopDestinationCard />
      </div>
    </div>
  );
};

export default TopDestination;
