"use client";

import React from "react";
import SearchBanner from "../components/banner/SearchBanner";
import { BiSearch } from "react-icons/bi";

const SearchBarResot = () => {
  return (
    <div className="bg-resort-banner bg-cover bg-no-repeat bg-center flex items-center py-64 justify-center relative opacity-80">
      <div className="bg-white rounded-3xl md:w-[830px] w-auto flex-row z-20 grid md:grid-cols-4 sm:grid-cols-1 absolute mt-36">
        <div className="flex flex-col gap-2 p-6">
          <p>Name resort</p>
          <input
            placeholder="Type Your Keyword"
            className="py-3 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 p-6">
          <p>Destinations</p>
          <input
            placeholder="Type Your Keyword"
            className="py-3 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2 p-6">
          <p>Duration</p>
          <select className="py-3 outline-none rounded-b-lg">
            <option value="">Any</option>
            <option value="">1 day</option>
            <option value="">2 - 4 days</option>
          </select>
        </div>

        <div className="bg-common md:rounded-r-3xl md:rounded-l-none rounded-b-3xl py-5 flex flex-col justify-center items-center text-white hover:cursor-pointer hover:bg-sky-500">
          <BiSearch size={18} color="white" />
          <button>Search now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBarResot;
