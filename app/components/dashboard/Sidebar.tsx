"use client";

import React, { useState } from "react";
import { GrPersonalComputer, GrSecure } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const pathName = usePathname();
  const sidebarOptions = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: GrPersonalComputer,
      current: pathName === "/dashboard" ? true : false,
    },
    {
      name: "Edit Profile",
      href: "/dashboard/editProfile",
      icon: FiEdit,
      current: pathName === "/dashboard/editProfile" ? true : false,
    },
    {
      name: "Change password",
      href: "/dashboard/changePassword",
      icon: GrSecure,
      current: pathName === "/dashboard/changePassword" ? true : false,
    },
  ];
  return (
    <div className="p-3">
      <div className="hidden lg:flex lg:min-h-full lg:rounded-md lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2">
          <div className="flex h-16 shrink-0 items-center">
            <h1 className="text-3xl font-bold">My Account</h1>
          </div>

          <div className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {sidebarOptions.map((option) => (
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
