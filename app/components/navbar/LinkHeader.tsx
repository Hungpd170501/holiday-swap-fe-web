"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";

const LinkHeader = () => {
  const route = useRouter();
  const pathname = usePathname();

  console.log("Router", route);

  return (
    <div className="flex flex-row space-x-9 text-gray-500">
      <div
        onClick={() => route.push("/")}
        className={`hover:text-black cursor-pointer flex flex-col items-center ${
          pathname === "/" ? "text-black" : ""
        }`}
      >
        Home
        {pathname === "/" ? (
          <span className="bg-gray-300 rounded-full w-2 h-2"></span>
        ) : (
          <span></span>
        )}
      </div>
      <div
        onClick={() => route.push("/list-resort")}
        className={`hover:text-black cursor-pointer flex flex-col items-center ${
          pathname === "/list-resort" ? "text-black" : ""
        }`}
      >
        Resort
        {pathname === "/list-resort" ? (
          <span className="bg-gray-300 rounded-full w-2 h-2"></span>
        ) : (
          <span></span>
        )}
      </div>
      <div className="hover:text-black cursor-pointer">Apartment</div>
    </div>
  );
};

export default LinkHeader;
