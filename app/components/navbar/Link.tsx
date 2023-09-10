"use client";

import React from "react";

const Link = () => {
  return (
    <div className="flex flex-row space-x-9 text-gray-500">
      <div className="hover:text-black cursor-pointer">Home</div>
      <div className="hover:text-black cursor-pointer">Destination</div>
      <div className="hover:text-black cursor-pointer">Apartment</div>
    </div>
  );
};

export default Link;
