import React from "react";

export default function MinMaxPrice() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex flex-col">
        <div className="pb-3">Min Price</div>
        <input
          type="text"
          className="peer p-2 pr-[8px] w-[125px] h-[48px] font-light bg-white border rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed"
        />
      </div>
      <div className="flex flex-col">
        <div className="pb-3">Max Price</div>
        <input
          type="text"
          className=" p-2 peer mb-10 pr-[8px] w-[125px] h-[48px] font-light bg-white border rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed"
        />
      </div>
    </div>
  );
}
