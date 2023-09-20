"use client";

import React, { Fragment } from "react";
import HeadingRegister from "../HeadingRegister";
import Container from "../Container";

const Images = () => {
  return (
    <Fragment>
      <HeadingRegister label="What does your home look like?" width="w-9/12" />
      <Container className="py-10 grid grid-cols-2">
        <div className="flex flex-col gap-5">
          <p className="text-lg font-bold">
            Add photos of your home and increase your chances of finalizing an
            exchange.
          </p>

          <div className="flex gap-5"></div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Images;
