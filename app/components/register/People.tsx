"use client";

import React, { Fragment } from "react";
import HeadingRegister from "../HeadingRegister";
import Container from "../Container";
import { peoples } from "./RegisterBody";
import SizeHomeInput from "./SizeHomeInput";
import ButtonRegister from "./BtnRegister";
import Image from "next/image";

interface PeopleProps {
  handleSubmit: () => void;
}

const People: React.FC<PeopleProps> = ({ handleSubmit }) => {
  return (
    <Fragment>
      <HeadingRegister
        label="How many people does your home sleep?"
        width="w-5/12"
        className="px-0 md:px-48"
      />
      <Container className="py-5 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col py-4">
          <div className="py-14">
            {peoples.map((item, index) => (
              <SizeHomeInput
                key={index}
                label={item.label}
                count={item.count}
                icon={item.icon}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <ButtonRegister label="Continue" onClick={handleSubmit} />
          </div>
        </div>

        <Image
          className="hidden md:block"
          src="/images/size.png"
          alt="Home"
          width={600}
          height={720}
        />
      </Container>
    </Fragment>
  );
};

export default People;
