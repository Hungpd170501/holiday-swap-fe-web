"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Link = () => {
  const route = useRouter();
  return (
    <div className="flex flex-row space-x-9 text-gray-500">
      <div
        onClick={() => route.push("/")}
        className="hover:text-black cursor-pointer"
      >
        Home
      </div>
      <div
        onClick={() => route.push("/list-resort")}
        className="hover:text-black cursor-pointer"
      >
        Resort
      </div>
      <div className="hover:text-black cursor-pointer">Apartment</div>
    </div>
  );
};

export default Link;
