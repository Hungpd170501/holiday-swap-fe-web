import React from "react";
import Input from "../components/input/Input";
import Link from "next/link";

export default function page() {
  return (
    <div
      className="w-[837px] h-auto border shadow-md rounded-md bg-white mx-[320px]
    my-[100px]"
    >
      <div className="flex flex-col items-center justify-center px-[20px]">
        <div className=" py-[40px] text-[30px]">Login</div>
        <div className="bg-gray-500 w-full h-[0.5px]"></div>
        <div className="grid grid-cols-2 gap-5 w-full py-[30px]">
          {/* <Input label="Username or Email" type="text" id="email" />
          <Input label="Password" type="password" id="email" /> */}
        </div>
        <button className="bg-[#5C98F2] w-full h-[56px] rounded-md text-white">
          Login
        </button>
        <div className="flex flex-row items-end justify-end w-full">
          <Link href="/#">
            <div className="text-blue-400 text-[15px] py-[20px]">
              Forget Password
            </div>
          </Link>
        </div>
        <div className="bg-gray-500 w-full  h-[0.5px]"></div>
        <div className="py-[40px] flex flex-col items-center">
          <div className="text-[25px]">Don't have account?</div>
          <Link href="/register" className="text-blue-400">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
