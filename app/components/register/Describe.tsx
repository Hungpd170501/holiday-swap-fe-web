"use client";

import React, { Fragment } from "react";
import HeadingRegister from "../HeadingRegister";
import Container from "../Container";
import TextArea from "../input/TextArea";
import ButtonRegister from "./BtnRegister";
import Image from "next/image";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface DescribeProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  handleSubmit: () => void;
}

const Describe: React.FC<DescribeProps> = ({
  register,
  errors,
  handleSubmit,
}) => {
  return (
    <Fragment>
      <HeadingRegister
        label="How would you describe your home?"
        width="w-7/12"
      />
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14">
        <div className="flex flex-col gap-7">
          <div>
            <div className="text-lg font-bold">Your home: </div>
            <TextArea
              id="yourHome"
              placeholder="My home is my sanctuary. Located on the 5th floor, it's where I go to get away from the hustle and bustle of the city."
              register={register}
              errors={errors}
            />
          </div>

          <div>
            <div className="text-lg font-bold">Your neighborhood: </div>
            <TextArea
              id="yourNeighborhood"
              placeholder="I live on the Upper West Side of Manhattan.  My home is only a short walk from Central Park and perfect for anyone looking to visit all the best attractions."
              register={register}
              errors={errors}
            />
          </div>

          <ButtonRegister label="Continue" onClick={handleSubmit} />
        </div>

        <div className="h-full hidden md:block">
          <Image
            src="/images/describe.png"
            alt="Home"
            width={600}
            height={720}
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default Describe;
