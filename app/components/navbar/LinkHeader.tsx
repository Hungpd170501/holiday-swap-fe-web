"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter, usePathname, redirect } from "next/navigation";
import React, { useEffect } from "react";

const LinkHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-row space-x-9 text-gray-500">
      <div
        onClick={() => router.push("/")}
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
        onClick={() => router.push("/apartment")}
        className={`hover:text-black cursor-pointer flex flex-col items-center ${
          pathname === "/apartment" ? "text-black" : ""
        }`}
      >
        Aparment
        {pathname === "/apartment" ? (
          <span className="bg-gray-300 rounded-full w-2 h-2"></span>
        ) : (
          <span></span>
        )}
      </div>
      <div
        onClick={() => router.push("/dashboard")}
        className="hover:text-black cursor-pointer"
      >
        Apartment
      </div>
    </div>
  );
};

export default LinkHeader;
