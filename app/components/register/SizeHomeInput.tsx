"use client";

import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";

interface SizeHomeInputProps {
  icon: IconType;
  label: string;
  count: number;
}

const SizeHomeInput: React.FC<SizeHomeInputProps> = ({
  icon: Icon,
  label,
  count,
}) => {
  const [number, setNumber] = useState(count);

  const descreaseCount = (count: number) => {
    if (count <= 1) {
      return 0;
    }

    setNumber((value) => value - 1);
  };

  const increaseCount = (count: number) => {
    setNumber((value) => value + 1);
  };

  return (
    <div className="grid grid-cols-2 gap-6 py-4">
      <div className="gap-3 flex items-center">
        <Icon size={50} />
        <p>{label}</p>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => descreaseCount(number)}
          type="button"
          className="hover:opacity-90 mr-8"
        >
          <GrSubtractCircle size={30} />
        </button>
        <div className="w-4">{number}</div>
        <button
          onClick={() => increaseCount(number)}
          type="button"
          className="hover:opacity-90 ml-8"
        >
          <AiOutlinePlusCircle size={30} />
        </button>
      </div>
    </div>
  );
};

export default SizeHomeInput;
