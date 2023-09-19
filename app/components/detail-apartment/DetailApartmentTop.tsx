import React from "react";
import { FaBath, FaBed, FaKitchenSet } from "react-icons/fa6";
import { MdOutlineApartment } from "react-icons/md";

export default function DetailApartmentTop() {
  return (
    <div className="">
      <div className="bg-[#CDE0D2] w-[900px] h-[400px] relative flex flex-col mb-5  ">
        <div className="flex flex-row">
          <div>
            <img
              className=" border-[8px] border-b-[14px] border-gray-400 overflow-hidden absolute w-[150px] h-[150px] "
              src="./images/resort1.jpg"
              alt=""
              style={{ transform: "rotate(10deg)" }}
            />
          </div>
          <div className="bg-green-300 w-[200px] h-[30px] absolute right-0 mt-6"></div>
          <div className="pl-48 pt-7">
            <div className="text-[30px] text-common py-2">
              Khách sạn Nha Trang
            </div>
            <div>Thành Phố Nha Trang, Tỉnh Khánh Hòa</div>
          </div>
        </div>
        <div className="px-10">
          <div className=" flex flex-row mt-20">
            <div className="flex flex-row">
              <div className="bg-white w-[50px] h-[50px] rounded-full  flex flex-row items-center justify-center">
                <FaBed size={30} />
              </div>
              <div className="px-5">
                <div>2 Bedrooms</div>
                <div>Sleeps 8</div>
                <div>Beds: 2 King, 2 Sofa beds</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="bg-white w-[50px] h-[50px] rounded-full  flex flex-row items-center justify-center ml-[100px]">
                <MdOutlineApartment size={30} />
              </div>
              <div className="px-5">
                <div>2 Bedrooms</div>
                <div>Sleeps 8</div>
                <div>Beds: 2 King, 2 Sofa beds</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row  mt-10">
            <div className="flex flex-row items-center">
              <div className="bg-white w-[50px] h-[50px] rounded-full  flex flex-row items-center justify-center ">
                <FaBath size={30} />
              </div>
              <div className="px-5">
                <div>2 Bathrooms</div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="bg-white w-[50px] h-[50px] rounded-full  flex flex-row items-center justify-center ml-[200px]">
                <FaKitchenSet size={30} />
              </div>
              <div className="px-5">
                <div>Full kitchen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
