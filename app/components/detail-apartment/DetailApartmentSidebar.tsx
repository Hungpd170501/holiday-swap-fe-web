import Link from "next/link";
import React from "react";
import { BsFillHouseCheckFill } from "react-icons/bs";
import TabRightSideBar from "../detailResort/TabRightSideBar";

export default function DetailApartmentSidebar() {
  return (
    <div>
      <div className="w-full h-auto border border-gray-300 flex flex-col items-center py-2 ">
        <div className="flex flex-row px-4 items-center py-3">
          <BsFillHouseCheckFill size={50} color="orange" />
          <div className="text-[27px] ml-2 text-common font-semibold">
            $3,469 ($496/night)
          </div>
        </div>
        <div className="px-[20px] text-[14px] py-3 text-[#1487A2]">
          Monthly payments available with Affirm
        </div>
        <div className="text-[20px] font-bold pb-2]">7-Night stay</div>
        <div className="pb-2 text-[20px]">
          Checkin:{" "}
          <span className="text-[20px] font-bold ]">Sat, Jan 20, 2024</span>
        </div>
        <div className="pb-2 text-[20px]">
          Checkout:{" "}
          <span className="text-[20px] font-bold ]">Sat, Jan 27, 2024</span>
        </div>
        <div className="pb-2 text-[20px]">
          Cancellation policy:{" "}
          <span className="text-[20px] font-bold ]">Moderate</span>
        </div>
        <button className="px-14 mb-2 text-white py-2 rounded-lg bg-common">
          Request Exchange
        </button>

        <div className="w-[300px] my-3   h-[1px] bg-gray-300"></div>
        <div className="text-[35px] font-bold">
          Holiday<span className="text-common font-bold">Swap</span>
        </div>
        <div className="text-[14px]">Full-service verified </div>
        <div className="flex flex-row mt-5 text-[15px]">
          <div>Questions?</div>
          <Link className="text-green-500" href="/#">
            Get in touch »
          </Link>
        </div>
      </div>
      <div className="w-[387px] h-auto bg-white shadow-xl rounded-lg mb-[40px] mt-[50px]">
        <div className="px-[40px] ">
          <div className="py-2 text-[20px] font-bold text-common">
            Best Change
          </div>
          <TabRightSideBar />
        </div>
      </div>
    </div>
  );
}
