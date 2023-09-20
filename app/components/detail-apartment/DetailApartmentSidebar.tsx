import Link from "next/link";
import React from "react";
import { BsFillHouseCheckFill } from "react-icons/bs";

export default function DetailApartmentSidebar() {
  return (
    <div>
      <div className="w-full h-auto border border-gray-300 flex flex-col items-center py-2 ">
        <div className="flex flex-row px-4 items-center py-3">
          <BsFillHouseCheckFill size={50} color="orange" />
          <div className="text-[22px] ml-2 text-common font-semibold">
            $3,469 ($496/night)
          </div>
        </div>
        <div className="px-[20px] text-[12px] py-3 text-[#1487A2]">
          Monthly payments available with Affirm
        </div>
        <div className="text-[18px font-bold pb-2]">7-Night stay</div>
        <div className="pb-2">
          Checkin:{" "}
          <span className="text-[18px font-bold ]">Sat, Jan 20, 2024</span>
        </div>
        <div className="pb-2">
          Checkout:{" "}
          <span className="text-[18px font-bold ]">Sat, Jan 27, 2024</span>
        </div>
        <div className="pb-2">
          Cancellation policy:{" "}
          <span className="text-[18px font-bold ]">Moderate</span>
        </div>

        <button className="px-6 mb-2 text-white py-2 rounded-lg bg-common mt-6">
          Request Book
        </button>
        <button className="px-6 mb-2 text-white py-2 rounded-lg bg-common">
          Request Exchange
        </button>

        <div className="w-[300px] my-3   h-[1px] bg-gray-300"></div>
        <div className="text-[30px]">
          Holiday<span className="text-common">Swap</span>
        </div>
        <div>Full-service verified </div>
        <div className="flex flex-row mt-5 text-[15px]">
          <div>Questions?</div>
          <Link className="text-green-500" href="/#">
            Get in touch »
          </Link>
        </div>
      </div>
    </div>
  );
}
