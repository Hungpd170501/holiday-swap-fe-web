"use client";

import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useCallback, useState } from "react";

interface UserMenuProps {
  currentUser?: Object | any | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      <div
        onClick={toggleOpen}
        className="cursor-pointer flex items-center gap-3"
      >
        <Image
          src="/images/placeholder.jpg"
          alt="Avartar"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="text-gray-400">{currentUser?.username}</div>
      </div>

      {isOpen ? (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-52 bg-white overflow-hidden right-20 top-24 text-sm">
          <div className="flex flex-col cursor-pointer">
            <Fragment>
              <MenuItem
                onClick={() => router.push("/dashboard")}
                label="Dashboard"
              />
              <MenuItem label="Edit Profile" />
              <hr />
              <MenuItem onClick={() => signOut()} label="Logout" />
            </Fragment>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UserMenu;
