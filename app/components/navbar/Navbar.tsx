"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";

interface NavbarProps {
  onClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onClick }) => {
  return (
    <div className="flex-1 justify-self-center md:block md:pb-0 md:mt-0 min-h-[1000px] bg-black top-0">
      <div className="h-full px-6">
        <div className="pt-4 px-5">
          <IoMdClose size={30} color="white" onClick={onClick} />

          <div className="pt-6 flex flex-col justify-center">
            <div className="text-white py-5 border-b-[1px] border-white">
              Home
            </div>
            <div className="text-white py-5 border-b-[1px] border-white">
              Destination
            </div>
            <div className="text-white py-5 border-b-[1px] border-white">
              Apartment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
