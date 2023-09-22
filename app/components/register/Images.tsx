"use client";

import React, { Fragment } from "react";
import HeadingRegister from "../HeadingRegister";
import Container from "../Container";
import ImageUpload from "../input/ImageUpload";
import Image from "next/image";
import ButtonRegister from "./BtnRegister";

interface ImagesProps {
  handleSubmit: () => void;
}

const Images: React.FC<ImagesProps> = ({ handleSubmit }) => {
  return (
    <Fragment>
      <HeadingRegister label="What does your home look like?" width="w-9/12" />
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <p className="text-lg font-bold text-center">
            Add photos of your home and increase your chances of finalizing an
            exchange.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            <ImageUpload />
            <ImageUpload />
            <ImageUpload />
            <ImageUpload />
            <ImageUpload />
          </div>

          <div className="flex justify-center">
            <ButtonRegister label="Continue" onClick={handleSubmit} />
          </div>
        </div>

        <div className="h-full hidden md:block">
          <Image src="/images/images.png" alt="Home" width={600} height={720} />
        </div>
      </Container>
    </Fragment>
  );
};

export default Images;
