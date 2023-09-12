import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-[#1A1A1A] w-full h-80 grid grid-cols-4 gap-8  px-[50px] items-center justify-center">
        <div>
          <div className="flex flex-row">
            <div className="text-white text-[25px] pb-[25px]">Holiday</div>
            <div className="text-[#5C98F2] text-[25px]">Swap</div>
          </div>
          <Image
            width={80}
            height={80}
            className="w-10 h-10 rounded-full mt-3 "
            src="/images/logo.png"
            alt="logo"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-white text-[25px] mb-[25px]">Contact</div>
          <div>
            <div className="text-[#A7A7A7]  font-thin pb-[20px]">
              T: 0856597778
            </div>
            <div className="text-[#A7A7A7]  font-thin pb-[20px]">
              E: Holidayswap@email.com
            </div>
            <div className="text-[#A7A7A7]  font-thin pb-[20px]">
              Page: Facebook.com/HolidaySwap
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white text-[25px] mb-[25px]">Useful Links</div>
          <div>
            <p className="text-[#A7A7A7]  font-thin pb-[20px] ">
              Travel Blog & Tip
            </p>
            <p className="text-[#A7A7A7]  font-thin  pb-[20px]">
              Working With Us
            </p>
            <p className="text-[#A7A7A7]  font-thin pb-[20px]">
              Be Our Partner
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white text-[25px] mb-[25px]">
            Pay Safely With Us
          </div>
          <div className=" text-[#A7A7A7] font-thin pb-[65px]">
            The payment is encrypted and transmitted securely with an SSL
            protocol.
          </div>
        </div>
      </div>
      <div className="bg-black w-full h-16 px-[20px] flex justify-center">
        <div className="grid grid-cols-2 gap-96">
          <div className="flex flex-row items-center justify-start">
            <Link className="text-[#A7A7A7] font-light px-3" href="/Home">
              Home
            </Link>
            <Link className="text-[#A7A7A7] font-light px-3" href="/About">
              About
            </Link>
            <Link className="text-[#A7A7A7] font-light px-3" href="/Blog">
              Blog
            </Link>
            <Link className="text-[#A7A7A7] font-light px-3" href="/Contact">
              Contact
            </Link>
          </div>
          <div className="text-[#A7A7A7] flex flex-row items-center justify-end">
            Copyright © 2023 HolidaySwap. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
