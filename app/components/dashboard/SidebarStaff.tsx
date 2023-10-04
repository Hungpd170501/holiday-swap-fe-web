"use client";

import React, { useState } from "react";
import { GrPersonalComputer, GrSecure, GrUpgrade } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { PiNotepadBold } from "react-icons/pi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoBanSharp } from "react-icons/io5";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const SidebarStaff = () => {
  const pathName = usePathname();
  const sidebarMyaccount = [
    {
      name: "Dashboard",
      href: "/staff",
      icon: GrPersonalComputer,
      current: pathName === "/staff" ? true : false,
    },
    {
      name: "List Resort",
      href: "/staff/listresort",
      icon: FiEdit,
      current: pathName === "/staff/listresort" ? true : false,
    },
    {
      name: "Create Resort",
      href: "/staff/createresort",
      icon: GrSecure,
      current: pathName === "/staff/createresort" ? true : false,
    },
  ];
  const sidebarMember = [
    {
      name: "List Membership",
      href: "/staff/listmember",
      icon: PiNotepadBold,
      current: pathName === "/staff/listmember" ? true : false,
    },
    {
      name: "Upgrade Member",
      href: "/staff/upgrademembership",
      icon: GrUpgrade,
      current: pathName === "/staff/upgrademembership" ? true : false,
    },
    {
      name: "Banned",
      href: "/staff/banned",
      icon: IoBanSharp,
      current: pathName === "/staff/banned" ? true : false,
    },
  ];
  const sidebarExchange = [
    {
      name: "List Approve",
      href: "/staff/listapprove",
      icon: MdOutlineSwapHorizontalCircle,
      current: pathName === "/staff/listapprove" ? true : false,
    },
    {
      name: "Infomation",
      href: "/staff/infomation",
      icon: LiaFileInvoiceDollarSolid,
      current: pathName === "/staff/infomation" ? true : false,
    },
  ];
  return (
    <div className="pt-[20px] pl-5 pr-5">
      <div className="hidden lg:flex lg:min-h-full lg:rounded-md lg:w-72 lg:flex-col h-full">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#F8F8F8] px-6 pb-4 border-r-2">
          <div className="flex h-16 shrink-0 items-center">
            <h1 className="text-3xl font-bold text-gray-700">Resort</h1>
          </div>

          <div className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {sidebarMyaccount.map((option) => (
                    <li key={option.name}>
                      <Link
                        href={option.href}
                        className={classNames(
                          option.current
                            ? "bg-common text-white"
                            : "text-gray-400 hover:text-white hover:bg-common",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <option.icon className="text-gray-300 group-hover:text-white h-6 w-6 shrink-0" />
                        {option.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex h-16 shrink-0 items-center">
            <h1 className="text-3xl font-bold text-gray-700">Member</h1>
          </div>
          <div className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {sidebarMember.map((option) => (
                    <li key={option.name}>
                      <Link
                        href={option.href}
                        className={classNames(
                          option.current
                            ? "bg-common text-white"
                            : "text-gray-400 hover:text-white hover:bg-common",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <option.icon className="text-gray-300 group-hover:text-white h-6 w-6 shrink-0" />
                        {option.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex h-16 shrink-0 items-center">
            <h1 className="text-3xl font-bold text-gray-700">Approve</h1>
          </div>
          <div className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {sidebarExchange.map((option) => (
                    <li key={option.name}>
                      <Link
                        href={option.href}
                        className={classNames(
                          option.current
                            ? "bg-common text-white"
                            : "text-gray-400 hover:text-white hover:bg-common",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <option.icon className="text-gray-300 group-hover:text-white h-6 w-6 shrink-0" />
                        {option.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-[#5C98F2] px-4 py-3 rounded-md text-white">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarStaff;
