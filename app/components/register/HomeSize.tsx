"use client";

import React, { Fragment } from "react";
import HeadingRegister from "../HeadingRegister";
import Container from "../Container";
import Input from "../input/Input";
import ButtonRegister from "./BtnRegister";
import Image from "next/image";
import SizeHomeInput from "./SizeHomeInput";
import { sizes } from "./RegisterBody";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface HomeSizeProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  handleSubmit: () => void;
}

const HomeSize: React.FC<HomeSizeProps> = ({
  register,
  errors,
  handleSubmit,
}) => {
  return (
    <Fragment>
      <HeadingRegister label="What size is your home?" width="w-4/12" />
      <Container className="py-5 grid grid-cols-2 gap-5">
        <div className="flex flex-col py-4">
          <Input
            register={register}
            errors={errors}
            type="number"
            id="size"
            label="Size"
            placeholder="30"
          />
          <div className="py-14">
            {sizes.map((item, index) => (
              <SizeHomeInput
                key={index}
                label={item.label}
                count={item.count}
                icon={item.icon}
              />
            ))}
          </div>

          <ButtonRegister label="Continue" onClick={handleSubmit} />
        </div>

        <Image src="/images/size.png" alt="Home" width={600} height={720} />
      </Container>
    </Fragment>
  );
};

export default HomeSize;
