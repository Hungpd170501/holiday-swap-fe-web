"use client";

import React, { useState } from "react";
import Container from "./Container";
import Logo from "./navbar/Logo";
import Link from "./navbar/Link";
import ButtonLoginHeader from "./navbar/ButtonLoginHeader";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Navbar from "./navbar/Navbar";
import clsx from "clsx";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="w-full fixed z-50" onScroll={() => setScroll(true)}>
      <Container>
        <div
          className={clsx(
            `hidden md:block`,
            scroll ? `bg-black border-b-2` : ""
          )}
        >
          <div className="flex flex-row justify-between items-center gap-3 py-8">
            <Logo />
            <Link />
            <ButtonLoginHeader />
          </div>
        </div>

        <div className="sm:block md:hidden absolute w-full">
          <div className="flex flex-row justify-between items-center gap-3 py-8">
            <Logo />
            <div onClick={handleMenu} className="mx-8">
              {openMenu ? <IoMdClose size={30} /> : <BiMenu size={30} />}
            </div>
          </div>
        </div>
      </Container>
      {openMenu ? (
        <div className="md:hidden sm:block min-h-full transition-all overflow-x-hidden overflow-y-auto relative">
          <div
            className={`translate duration-300 h-full ${
              openMenu ? `translate-y-0` : "translate-y-full"
            }`}
          >
            <Navbar onClick={handleMenu} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
