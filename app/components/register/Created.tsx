"use client";

import React, { Fragment } from "react";
import HeadingRegister from "../HeadingRegister";
import Container from "../Container";
import Image from "next/image";
import { BsEye } from "react-icons/bs";
import ButtonRegister from "./BtnRegister";

interface CreatedProps {
    handleSubmit: () => void;
}

const Created: React.FC<CreatedProps> = ({ handleSubmit }) => {
  return (
    <Fragment>
      <HeadingRegister label="Created success" width="w-10/12" />
      <Container className="grid grid-cols-2 gap-320 py-10">
        <div>
          <div className="flex flex-col w-full h-[500px] rounded-md bg-slate-300">
            <div className="w-full h-full flex justify-center items-center relative">
              <Image
                src="/images/icons/house.png"
                width={50}
                height={50}
                alt="House"
                className=""
              />
              <div className="absolute flex w-full h-full p-5 justify-end items-end">
                <Image
                  src="/images/placeholder.jpg"
                  alt="Avartar"
                  width={50}
                  height={50}
                  className="rounded-full border border-white"
                />
              </div>
            </div>

            <div className="bg-white h-28 w-full flex justify-between px-3 py-5">
              <div className="flex flex-col">
                <div className="font-bold text-lg">Aparment Vung Tau</div>
                <div className="font-normal text-sm text-slate-400">
                  HCM, Viet Nam
                </div>
              </div>

              <div className="text-base font-bold h-full flex items-end">
                150 point
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="text-2xl font-semibold text-black">
            You've created your listing!
          </div>
          <div className="py-32 flex flex-col justify-center items-center">
            <BsEye size={40} />
            <div className="py-4">
              Your home won't be visible to other members
            </div>
            <div className="flex justify-center py-8">
              <ButtonRegister label="Finish" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Created;
