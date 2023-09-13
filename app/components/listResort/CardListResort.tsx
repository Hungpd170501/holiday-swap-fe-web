import Image from "next/image";
import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
export default function CardListResort() {
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-20 py-[30px] ">
        <div className="flex flex-col ">
          <div className="overflow-hidden object-cover rounded-t-xl ">
            <Image
              src="/images/resort1.jpg"
              alt="destination"
              height={800}
              width={350}
              className="object-cover rounded-t-xl relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
            />
          </div>
          <div className="bg-white w-[350px] h-[270px] shadow-xl rounded-b-xl pl-[50px] pr-[100px] py-[30px] md:W-[20px]">
            <div className="text-[20px]">Resort Terra Mi-A Phan Thiet</div>
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
        <div className="flex flex-col">
          <div className="overflow-hidden object-cover rounded-t-xl ">
            <Image
              src="/images/resort2.jpg"
              alt="destination"
              height={800}
              width={350}
              className="object-cover rounded-t-xl relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
            />
          </div>
          <div className="bg-white w-[350px] h-[270px] shadow-xl rounded-b-xl pl-[50px] pr-[100px] py-[30px]">
            <div className="text-[20px]">Tuan Chau resort Ha Long</div>
            <div className="flex flex-row items-center py-2 ">
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <span className="pl-1">(1 Review)</span>
            </div>
            <div className="flex flex-row items-center pt-3 pb-5">
              <BsClock />
              <span className="pl-1">10 Hours</span>
            </div>
            <div className="flex flex-row">
              <div>From</div>
              <div className="text-xl text-blue-300 pl-5">$500</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-hidden object-cover rounded-t-xl ">
            <Image
              src="/images/resort3.jpg"
              alt="destination"
              height={800}
              width={350}
              className="object-cover rounded-t-xl relative hover:scale-110 hover:transition-transform duration-500 hover:duration-500"
            />
          </div>
          <div className="bg-white w-[350px] h-[270px] shadow-xl rounded-b-xl pl-[50px] pr-[100px] py-[30px]">
            <div className="text-[20px]">New Phu Quoc resort</div>
            <div className="flex flex-row items-center py-2 ">
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              <AiTwotoneStar color="yellow" />
              {/* <AiTwotoneStar color="yellow" /> */}
              <span className="pl-1">(1 Review)</span>
            </div>
            <div className="flex flex-row items-center pt-3 pb-5">
              <BsClock />
              <span className="pl-1">3 Hours</span>
            </div>
            <div className="flex flex-row">
              <div>From</div>
              <div className="text-xl text-blue-300 pl-5">$200</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
