"use client";

import React from "react";
import { IconType } from "react-icons/lib";
import clsx from "clsx";

interface HomeTypeCardProps {
  icon: IconType;
  label: string;
  onClick: (value: string) => void;
  selected: boolean;
}
const HomeTypeCard: React.FC<HomeTypeCardProps> = ({
  icon: Icon,
  label,
  onClick,
  selected,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={clsx(
        `flex flex-col justify-center items-center w-40 py-5 border-2 border-slate-300 rounded-lg cursor-pointer hover:-translate-y-2 hover:duration-500 translate-y-0 duration-500`,
        selected ? "border-[#5C98F2]" : "",
        selected ? "text-common" : "",
        selected ? "hover:border-[#5C98F2]" : "hover:border-black"
      )}
    >
      <Icon size={30} />
      <div>{label}</div>
    </div>
  );
};

export default HomeTypeCard;
