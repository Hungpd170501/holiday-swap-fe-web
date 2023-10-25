"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { differenceInDays, format } from "date-fns";
import { GrSubtractCircle } from "react-icons/gr";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CalendarAparment from "../CalendarAparment";
import { useRouter } from "next/navigation";

interface ApartmentBookingProps {
  dateRange: any;
  apartment: any;
  dateOut: any;
  handleChangeDateRange: (value: any) => void;
  apartmentAllowGuest: number;
}

const ApartmentBooking: React.FC<ApartmentBookingProps> = ({
  dateRange,
  apartment,
  dateOut,
  handleChangeDateRange,
  apartmentAllowGuest,
}) => {
  const [visibleGuest, setVisibleGuest] = useState(false);
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [adultsGuest, setAdultsGuest] = useState(1);
  const [childrenGuest, setChildrenGuest] = useState(0);
  const [totalGuest, setTotalGuest] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  const handleDescreaseAdultGuest = (value: number) => {
    if (value <= 1) {
      return 1;
    }

    setAdultsGuest(value - 1);
    setTotalGuest(totalGuest - 1);
  };

  const handleInscreaseAdultGuest = (value: number) => {
    if (
      value >= apartmentAllowGuest ||
      value + childrenGuest >= apartmentAllowGuest
    ) {
      return value;
    }

    setAdultsGuest(value + 1);
    setTotalGuest(totalGuest + 1);
  };

  const handldeDescreaseChildrenGuest = (value: number) => {
    if (value <= 0) {
      return 0;
    }

    setChildrenGuest(value - 1);
    setTotalGuest(totalGuest - 1);
  };

  const handleInscreaseChildrenGuest = (value: number) => {
    if (
      value >= apartmentAllowGuest ||
      value + adultsGuest >= apartmentAllowGuest
    ) {
      return value;
    }

    setChildrenGuest(value + 1);
    setTotalGuest(totalGuest + 1);
  };

  const calculateNightDifference = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nightDifference = differenceInDays(end, start);
    return nightDifference;
  };

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

  useEffect(() => {
    // Calculate the number of nights
    const nightDifference = calculateNightDifference(
      dateRange.startDate,
      dateRange.endDate
    );

    // Calculate the price for the nights
    const nightsPrice = nightDifference * apartment.availableTime.pricePerNight;

    // Calculate the HolidaySwap service fee
    const serviceFee = (nightsPrice * 10) / 100;

    // Calculate the total price (nights price + cleaning fee + service fee)
    const total = nightsPrice + 10 + serviceFee;

    // Update the total price in the state
    setTotalPrice(total);
  }, [dateRange, apartment]);

  return (
    <div className="bg-white p-4 rounded-xl flex flex-col border border-gray-400 shadow-lg sticky top-28">
      <span className="flex flex-row text-gray-800 text-lg py-5">
        <span className="font-bold text-2xl text-black">
          {totalPrice} point{" "}
          <span className="text-gray-600 text-lg">total</span>
        </span>
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
            disabledDates={dateOut}
            minDate={dateRange.startDate}
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
            <div className="text-gray-800 text-base">
              {totalGuest === 1
                ? `${totalGuest} guest`
                : `${totalGuest} guests`}
            </div>
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
                <button
                  onClick={() => handleDescreaseAdultGuest(adultsGuest)}
                  type="button"
                >
                  <GrSubtractCircle size={20} />
                </button>
                <div className="w-5 text-center">{adultsGuest}</div>
                <button
                  onClick={() => handleInscreaseAdultGuest(adultsGuest)}
                  type="button"
                >
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
                <button
                  onClick={() => handldeDescreaseChildrenGuest(childrenGuest)}
                  type="button"
                >
                  <GrSubtractCircle size={20} />
                </button>
                <div className="w-5 text-center">{childrenGuest}</div>
                <button
                  onClick={() => handleInscreaseChildrenGuest(childrenGuest)}
                  type="button"
                >
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
          <button
            onClick={() => router.push("/booking")}
            className="w-full p-4 bg-common hover:bg-hover text-white text-center font-bold text-lg rounded-lg"
          >
            Booking
          </button>
        </div>
      </div>

      {/* Fee service */}
      <div className="py-5 flex flex-col gap-4 border-b border-gray-600">
        <div className="flex flex-row justify-between items-center text-base text-gray-800">
          <div className="">
            {apartment.availableTime.pricePerNight} point x{" "}
            {calculateNightDifference(
              dateRange.startDate,
              dateRange.endDate
            ) === 1
              ? `${calculateNightDifference(
                  dateRange.startDate,
                  dateRange.endDate
                )} night`
              : `${calculateNightDifference(
                  dateRange.startDate,
                  dateRange.endDate
                )} nights`}
          </div>

          <div>
            {calculateNightDifference(dateRange.startDate, dateRange.endDate) *
              apartment.availableTime.pricePerNight}{" "}
            point
          </div>
        </div>

        <div className="flex flex-row justify-between items-center text-base text-gray-800">
          <div className="">Cleaner fee</div>

          <div>10 point</div>
        </div>

        <div className="flex flex-row justify-between items-center text-base text-gray-800">
          <div className="">HolidaySwap service fee</div>

          <div>
            {Number(
              calculateNightDifference(dateRange.startDate, dateRange.endDate) *
                apartment.availableTime.pricePerNight *
                (10 / 100)
            ).toFixed(1)}{" "}
            point
          </div>
        </div>
      </div>

      {/* Total */}

      <div className="pt-5 pb-4 flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center text-base text-black">
          <div className="">Total</div>

          <div>{totalPrice} point</div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentBooking;
