"use client";

import React, { Fragment, useState } from "react";
import SearchBanner from "../components/banner/SearchBanner";
import { BiSearch } from "react-icons/bi";
import {
  AiFillCalendar,
  AiFillCaretDown,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";
import CalendarAparment from "./CalendarAparment";
import dayjs from 'dayjs';

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const SearchBarResot = () => {
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [visibleGuest, setVisibleGuest] = useState(false);
  const [dateRange, setDateRange] = useState(initialDateRange);

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
    <Fragment>
      <div className="bg-resort-banner bg-cover bg-no-repeat bg-center flex items-center py-64 justify-center relative opacity-80">
        <div className="bg-white rounded-3xl md:w-[1200px] w-auto flex-row z-20 grid md:grid-cols-4 sm:grid-cols-1 absolute mt-36">
          <div className="flex flex-col gap-2 p-6">
            <p>Resort</p>
            <select className="py-3 outline-none rounded-b-lg">
              <option value="">Resort Nha Trang</option>
              <option value="">Resrot Khanh Hoa</option>
              <option value="">Resort Cam Ranh</option>
            </select>
          </div>

          <div
            onClick={handleVisibleCalendar}
            className="flex flex-col gap-2 p-6"
          >
            <p>Check-in / Check-out</p>
            <div className="flex flex-row items-center justify-between py-3">
              <div className="flex flex-row gap-2 items-center">
                <AiFillCalendar size={20} />
                <div>Sat, 16 Sep - Mon, 19 Oct</div>
              </div>

              <AiFillCaretDown size={20} />
            </div>
          </div>

          <div onClick={handleVisibleGuest} className="flex flex-col gap-2 p-6">
            <p>Guests</p>
            <div className="py-3 flex flex-row items-center justify-between">
              <div className="">2 alduts, 0 children</div>
              <AiFillCaretDown size={20} />
            </div>
          </div>

          <div className="bg-common md:rounded-r-3xl md:rounded-l-none rounded-b-3xl py-5 flex flex-col justify-center items-center text-white hover:cursor-pointer hover:bg-sky-500">
            <BiSearch size={18} color="white" />
            <button>Search now</button>
          </div>
        </div>
      </div>
      {visibleCalendar ? (
        <CalendarAparment
          value={dateRange}
          className="w-[700px] absolute top-[400px] left-96 z-30"
          onChange={(value: any) => setDateRange(value.selection)}/>
      ) : (
        ""
      )}

      {visibleGuest ? (
        <div className="w-[300px] flex flex-col absolute top-[400px] left-[48rem] z-30 p-5 rounded-md bg-white border border-gray-500">
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
    </Fragment>
  );
};

export default SearchBarResot;
