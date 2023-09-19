"use client";

import React from "react";
import { IconType } from "react-icons/lib";

interface HomeTypeProps {
  icon: IconType;
  label: string;
  onClick: (value: string) => void;
  selected: boolean;
}
const HomeType: React.FC<HomeTypeProps> = ({
  icon: Icon,
  label,
  onClick,
  selected,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex flex-col justify-center items-center p-5 border border-slate-300 rounded-lg ${
        selected ? "border-common" : ""
      } ${selected ? "text-common" : ""}`}
    >
      <Icon size={30} />
      <div>{label}</div>
    </div>
  );
};

export default HomeType;
