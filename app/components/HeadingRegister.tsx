"use client";

import React, { Fragment } from "react";

interface HeadingRegsiterProps {
  label: string;
  width: string;
  className?: string;
}

const HeadingRegister: React.FC<HeadingRegsiterProps> = ({
  label,
  width,
  className,
}) => {
  return (
    <Fragment>
      <div
        className={`bg-[#F5F5F7] flex items-center justify-center ${className}`}
      >
        <div className="text-xl md:text-5xl pt-[150px] px-5 text-center md:pt-[250px] pb-[70px]">
          {label}
        </div>
      </div>
      <div className={`border-common border-2 ${width}`}></div>
    </Fragment>
  );
};

export default HeadingRegister;
