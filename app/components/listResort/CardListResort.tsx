"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";

interface CardListResortProps {
  data: any;
}

const CardListResort: React.FC<CardListResortProps> = ({ data }) => {
  const route = useRouter();
  return (
    <div
      onClick={() => route.push(`/list-resort/${data.id}`)}
      className="flex flex-col cursor-pointer "
    >
      <div className="overflow-hidden object-cover rounded-t-xl w-full h-[200px] ">
        <Image
          src={data?.resortImages[0]?.link}
          alt="destination"
          height={800}
          width={350}
          className="object-cover rounded-t-xl relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
        />
      </div>
      <div className="bg-white w-[350px] h-[270px] shadow-xl rounded-b-xl pl-[50px] pr-[100px] py-[30px] md:W-[20px]">
        <div className="text-[20px]">{data?.resortName}</div>
        <div className="flex flex-row items-center py-2 ">
          <AiTwotoneStar color="yellow" />
          <AiTwotoneStar color="yellow" />
          <AiTwotoneStar color="yellow" />
          <AiTwotoneStar color="yellow" />
          <span className="pl-1">(1 Review)</span>
        </div>
        <div className="flex flex-row items-center pt-3 pb-5">
          <BsClock />
          <span className="pl-1">5 Hours</span>
        </div>
        <div className="flex flex-row">
          <div>From</div>
          <div className="text-xl text-blue-300 pl-5">$700</div>
        </div>
      </div>
    </div>
  );
};

export default CardListResort;
