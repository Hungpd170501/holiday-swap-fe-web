import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

export default function ContactDetailSidebar() {
  return (
    <div className="pt-20 w-[430px]">
      <div className="text-[30px] pb-10">Nha Trang Apartment</div>
      <div className="pb-5">
        Travel Date : February 1, 2030{" "}
        <span className="text-common text-[15px]">( edit )</span>
      </div>
      <div className="py-5">Traveller: 3</div>

      <div className="w-full h-[1px] bg-gray-300 my-5"></div>
      <div className="text-common py-5">View Price Breakdown</div>
      <div className="w-full h-[1px] bg-gray-400 my-5"></div>

      <div className="flex flex-row items-center py-5 justify-between">
        <div>Coupon Code :</div>
        <div className="flex flex-row items-center">
          <div className="pr-2 text-common">Apply</div>
          <input
            className="w-[143px] py-2 border border-gray-500"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between pb-5">
        <div>Total Price</div>
        <div>$327.00</div>
      </div>
      <div className="w-full h-[1px] bg-gray-400"></div>
      <div className="flex flex-row gap-6 py-5">
        <div className="flex flex-row items-center text-[#5C98F2]">
          <AiOutlineCheck color="#5C98F2" className="mr-3" />
          Pay Full Amount
        </div>
        <div className="flex flex-row items-center">
          <AiOutlineCheck className="mr-3" />
          Pay 30% Deposit
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-400 my-5   "></div>
    </div>
  );
}
