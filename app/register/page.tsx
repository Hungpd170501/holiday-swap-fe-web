import React from "react";
import Header from "../components/Header";
import Input from "../components/input/Input";
import BtnRegister from "../components/register/btnRegister";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Register() {
  return (
    <div>
      <Header />
      <div className="bg-[#F5F5F7] flex items-center justify-center ">
        <div className="text-5xl  pt-[250px] pb-[70px]">Register</div>
      </div>
      <div className="px-20 flex-col w-full bg-white">
        <div className="flex items-center py-12 text-xs w-full">
          asdasl;dk;asdkl;asd asdklajslkdjasldkjalsdjlsakd.
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input
            type="text"
            id="userName"
            label="Username*"
            placeholder="Username"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="Password"
          />
          <Input
            type="password"
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input
            type="text"
            id="firstName"
            label="First Name"
            placeholder="First Name"
          />
          <Input
            type="text"
            id="lastName"
            label="Last Name"
            placeholder="Last Name"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>Birth Date*</div>
          <Input type="email" id="email" label="Email*" placeholder="Email" />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <Input type="text" id="phone" label="Phone" placeholder="Phone" />
          {/* <Input
            type="text"
            id="lastName"
            label="Last Name"
            placeholder="Last Name"
          /> */}
        </div>
        <div className="flex flex-row w-full items-center justify-center pt-10 pb-4    ">
          <input type="checkbox" />
          <div>
            * Creating an account means you're okay with our Terms of Service
            and Privacy Statement.
          </div>
        </div>
        <BtnRegister />
        <div className="bg-[#A7A7A7] w-full h-[0.5px] my-[50px]"></div>
        <div className="w-full flex flex-col items-center  justify-center">
          <div className="text-[20px] font-bold pb-2">Already Member?</div>
          <Link className="text-blue-300 pb-[60px]" href={"/login"}>
            Login
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
