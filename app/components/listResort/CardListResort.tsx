"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { Carousel } from "@material-tailwind/react";

interface CardListResortProps {
  data: any;
}

const CardListResort: React.FC<CardListResortProps> = ({ data }) => {
  const route = useRouter();
  return (
    <div className="flex flex-col cursor-pointer">
      <div>
        <Carousel className="relative rounded-t-xl w-full h-[400px] rounded-xl z-40">
          {data?.resortImages.slice(0, 5).map((item: any) => (
            <Image
              onClick={() => route.push(`/apartment/${data.id}`)}
              key={item.id}
              src={item.link}
              alt="destination"
              fill
              className="object-cover h-full rounded-xl"
            />
          ))}
        </Carousel>
      </div>
      <div
        onClick={() => route.push(`/apartment/${data.id}`)}
        className="w-full py-5"
      >
        <div className="text-base font-bold">{data?.resortName}</div>
        <div className="text-gray-600 text-base">Stay with Tin</div>
        <div className="text-gray-600 text-base">6 - 11 Nov</div>
        <div className="py-2 text-base">
          <div>
            <span className="font-bold">50 point</span> night
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListResort;
