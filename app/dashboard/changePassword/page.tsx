import React from "react";
import requireAuth from "@/app/libs/requireAuth";

export const metadata = {
  title: "Change Password",
};

export default function DashBoard() {
  return requireAuth(
    <div className="w-[600px]">
      <div className="py-14">
        Dashboard {"  >  "}{" "}
        <span className="text-common"> Change Password</span>
      </div>
      <div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Old Password*</div>
          <input
            type="email"
            className=" text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>{" "}
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">New Password*</div>
          <input
            type="email"
            className=" text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>{" "}
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Confirm Password*</div>
          <input
            type="email"
            className=" text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <button className="bg-[#5C98F2] px-4 py-3 text-white rounded-md ml-56">
          Update Password
        </button>
      </div>
    </div>
  );
}
