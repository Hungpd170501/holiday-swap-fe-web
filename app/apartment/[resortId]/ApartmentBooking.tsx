"use client";

import React, { ChangeEvent, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { format } from "date-fns";
import { GrSubtractCircle } from "react-icons/gr";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CalendarAparment from "../CalendarAparment";

interface ApartmentBookingProps {
  dateRange: any;
  handleChangeDateRange: (value: any) => void;
}

const ApartmentBooking: React.FC<ApartmentBookingProps> = ({
  dateRange,
  handleChangeDateRange,
}) => {
  const [visibleGuest, setVisibleGuest] = useState(false);
  const [visibleCalendar, setVisibleCalendar] = useState(false);

  const handleVisibleCalendar = () => {
    if (visibleGuest) {
      setVisibleGuest(false);
      setVisibleCalendar(!visibleCalendar);
    } else {
      setVisibleCalendar(!visibleCalendar);
    }
  };

  const handleVisibleGuest = () => {
    if (visibleCalendar) {
      setVisibleCalendar(false);
      setVisibleGuest(!visibleGuest);
    } else {
      setVisibleGuest(!visibleGuest);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl flex flex-col border border-gray-400 shadow-lg sticky top-28">
      <span className="flex flex-row text-gray-800 text-lg py-5">
        <span className="font-bold text-lg text-black">95 point</span>/night
      </span>

      <div className="flex flex-col rounded-lg boder border-gray-600">
        {/* Check-in / Check-out */}
        <div
          onClick={handleVisibleCalendar}
          className={`grid grid-cols-2 rounded-t-lg  ${
            visibleCalendar ? "border-2 border-black" : "border border-gray-600"
          } `}
        >
          <div
            className={`p-2 border-r  ${
              visibleGuest ? "border-b-2 border-black" : "border-gray-600"
            }`}
          >
            <div className="text-xs">CHECK-IN</div>
            <input
              type="text"
              readOnly
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChangeDateRange({
                  ...dateRange,
                  startDate: new Date(e.target.value),
                })
              }
              className="border-0 text-base text-gray-600 focus:outline-none w-full"
              value={`${format(new Date(dateRange.startDate), "dd/MM/yyyy")}`}
            />
          </div>
          <div
            className={`p-2  ${
              visibleGuest ? "border-b-2 border-black" : "border-gray-600"
            }`}
          >
            <div className="text-xs">CHECK-OUT</div>
            <input
              type="text"
              readOnly
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChangeDateRange({
                  ...dateRange,
                  endDate: new Date(e.target.value),
                })
              }
              className="border-0 text-base text-gray-600 focus:outline-none w-full"
              value={`${format(new Date(dateRange.endDate), "dd/MM/yyyy")}`}
            />
          </div>
        </div>
        {visibleCalendar ? (
          <CalendarAparment
            value={dateRange}
            onChange={(value: any) => handleChangeDateRange(value)}
            className="w-[700px] absolute top-36 -left-[352px] z-30 !text-[1em]"
          />
        ) : (
          ""
        )}

        {/* Guest */}
        <div
          onClick={handleVisibleGuest}
          className={`flex flex-row justify-between items-center p-2 rounded-b-lg border-t-0  ${
            visibleGuest ? "border-black border-2" : "border-gray-600 border"
          }`}
        >
          <div className="flex flex-col">
            <div className="text-xs">GUEST</div>
            <div className="text-gray-800 text-base">1 guest</div>
          </div>

          {visibleGuest ? (
            <BsChevronUp size={25} />
          ) : (
            <BsChevronDown size={25} />
          )}
        </div>
        {visibleGuest ? (
          <div className="w-full flex flex-col absolute top-[200px] left-0 z-30 p-5 rounded-md bg-white border border-gray-500">
            <div className="flex flex-row items-center justify-between py-3">
              <div className="flex flex-col">
                <div className="font-bold">Adults</div>
                <div className="text-xs text-gray-700">18+ yrs</div>
              </div>
              <div className="flex flex-row gap-3">
                <button type="button">
                  <GrSubtractCircle size={20} />
                </button>
                <div>1</div>
                <button type="button">
                  <AiOutlinePlusCircle size={20} />
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between py-3">
              <div className="flex flex-col">
                <div className="font-bold">Children</div>
                <div className="text-xs text-gray-700">18+ yrs</div>
              </div>
              <div className="flex flex-row gap-3">
                <button type="button">
                  <GrSubtractCircle size={20} />
                </button>
                <div>1</div>
                <button type="button">
                  <AiOutlinePlusCircle size={20} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Button Booking */}
        <div className="py-4">
          <button className="w-full p-4 bg-common hover:bg-hover text-white text-center font-bold text-lg rounded-lg">
            Booking
          </button>
        </div>
      </div>

      {/* Fee service */}
      <div className="py-5 flex flex-col gap-4 border-b border-gray-600">
        <div className="flex flex-row justify-between items-center text-base text-gray-800">
          <div className="">95 point x 1 night</div>

          <div>95 point</div>
        </div>

        <div className="flex flex-row justify-between items-center text-base text-gray-800">
          <div className="">Cleaner fee</div>

          <div>10 point</div>
        </div>

        <div className="flex flex-row justify-between items-center text-base text-gray-800">
          <div className="">HolidaySwap service fee</div>

          <div>10 point</div>
        </div>
      </div>

      {/* Total */}

      <div className="pt-5 pb-4 flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center text-base text-black">
          <div className="">Total</div>

          <div>115 point</div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentBooking;
