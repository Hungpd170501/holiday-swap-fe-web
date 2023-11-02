"use client";

import Image from "next/image";
import React from "react";

interface BookingDetailProps {
  bookingDetail: any;
}

const BookingDetail: React.FC<BookingDetailProps> = ({ bookingDetail }) => {
  return (
    <div className="grid md:grid-cols-2 py-8 gap-10">
      <div className="w-full h-full">
        {/* Title */}
        <div className="py-3">
          <div className="text-3xl font-bold">Your booking is confirmed!</div>
          <div className="text-lg text-slate-500">
            You are going to Nha Trang
          </div>
        </div>

        {/* Information ownership */}
        <div className="flex flex-row gap-3 py-3">
          <div>
            <Image
              src="/images/placeholder.jpg"
              alt="avatar"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div>David</div>
            <div className="text-slate-500">Nha Trang, Viet Nam</div>
            <div className="text-slate-500">On HolidaySwap since 2015</div>
          </div>
        </div>

        {/* Image apartment */}
        <div className="py-3 w-full h-80 relative">
          <Image
            src="/images/resort1.jpg"
            fill
            alt="resort"
            className="absolute"
          />
        </div>

        {/* Information apartment */}
        <div className="py-3">
          <div className="text-xl">Name property</div>
          <div className="text-slate-400">Description</div>
        </div>
      </div>

      <div className="w-full h-full py-5">
        {/* Check-in Check-out */}
        <div className="py-3 border-b border-slate-300 flex flex-row items-center justify-between">
          <div className="flex flex-col text-lg text-slate-500">
            <div>Tuesday,</div>
            <div>Jul 31, 2019</div>
            <div>Check-in After 3PM</div>
          </div>
          <div className="flex flex-col text-lg text-slate-500">
            <div>Tuesday,</div>
            <div>Jul 31, 2019</div>
            <div>Check-in After 3PM</div>
          </div>
        </div>

        {/* Guest */}
        <div className="py-3 flex flex-col text-slate-500 border-b border-slate-300">
          <div>Guests</div>
          <div>2</div>
        </div>

        {/* Payment */}
        <div className="py-3 flex flex-col border-b border-slate-300">
          <div className="text-lg font-bold text-slate-600">Payment</div>
          <div className="flex flex-col gap-2 py-3">
            <div className="flex flex-row justify-between items-center text-slate-500">
              <div>150 point x 3 nights</div>
              <div>450</div>
            </div>
            <div className="flex flex-row justify-between items-center text-slate-500">
              <div>150 point x 3 nights</div>
              <div>450</div>
            </div>
            <div className="flex flex-row justify-between items-center text-slate-500">
              <div>150 point x 3 nights</div>
              <div>450</div>
            </div>
          </div>
        </div>

        {/* Total payment */}
        <div className="py-3 flex flex-row items-center justify-between border-b border-slate-300">
          <div>Total</div>
          <div>1500</div>
        </div>

        {/* Information guest */}
        <div className="py-3">
          <div className="text-lg text-slate-500">Information Guest</div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
