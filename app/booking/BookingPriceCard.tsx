"use client";

import React, { useState } from "react";
import useAxiosAuthClient from "../hooks/useAxiosAuthClient";
import useLoginModal from "../hooks/useLoginModal";
import toast from "react-hot-toast";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const BookingPriceCard = () => {
  return (
    <div className="bg-white p-4 flex flex-col rounded-xl shadow-xl sticky top-44">
      <div className="w-full py-4 border-b border-gray-400">
        {/* Information Apartment */}
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1 h-44 w-full relative">
            <Image
              src="/images/resort1.jpg"
              fill
              alt="image"
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-between col-span-2">
            <div className="text-sm">A deluxe quiet double room in London</div>
            <div className="flex flex-row items-center">
              <AiFillStar size={15} />
              4.8
            </div>
          </div>
        </div>
      </div>

      {/* Price Details */}
      <div className="flex flex-col py-8 w-full border-b border-gray-400">
        <div className="text-2xl font-bold py-3">Price Details</div>
        <div className="flex flex-row justify-between text-base text-gray-600">
          <div>Cleaning fee</div>
          <div>80 point</div>
        </div>
      </div>

      {/* Total */}
      <div className="flex flex-row justify-between py-8 text-base font-bold">
        <div>Total</div>
        <div>80 point</div>
      </div>
    </div>
  );
};

export default BookingPriceCard;
