"use client";

import Image from "next/image";
import React from "react";
import clsx from "clsx";

interface AminitiesInputProps {
  id: string;
  label: string;
  icon: string;
  onClick: (value: string) => void;
  selected: boolean;
}

const AminitiesInput: React.FC<AminitiesInputProps> = ({
  id,
  label,
  icon,
  onClick,
  selected,
}) => {
  return (
    <div
      id={id}
      onClick={() => onClick(label)}
      className={clsx(
        `flex flex-col justify-center items-center w-40 py-5 border-2 border-slate-300 rounded-lg cursor-pointer hover:-translate-y-2 hover:duration-500 translate-y-0 duration-500`,
        selected ? "border-[#5C98F2]" : "",
        selected ? "text-common" : "",
        selected ? "hover:border-[#5C98F2]" : "hover:border-black"
      )}
    >
      <Image src={icon} alt="aminites" width={35} height={35} />
      <div className="text-sm text-center">{label}</div>
    </div>
  );
};

export default AminitiesInput;
