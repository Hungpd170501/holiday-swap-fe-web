"use client";

import React, { Fragment } from "react";
import { locations } from "./RegisterBody";
import HeadingRegister from "../HeadingRegister";
import Container from "../Container";
import MapRegister from "./MapRegister";
import { FormControl, RadioGroup } from "@mui/material";
import LocationInput from "./LocationInput";
import ButtonRegister from "./BtnRegister";
import Image from "next/image";

interface LocationPros {
  handleSubmit: () => void;
}

const Location: React.FC<LocationPros> = ({ handleSubmit }) => {
  return (
    <Fragment>
      <HeadingRegister label="Tell us more about your home" width="w-3/12" />
      <Container className="py-5 grid grid-cols-2">
        <div>
          <MapRegister />

          <div className="flex-col py-5">
            <p>Location</p>

            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                {locations.map((item, index) => (
                  <LocationInput key={index} label={item.label} />
                ))}
              </RadioGroup>
            </FormControl>
            <ButtonRegister onClick={handleSubmit} label="Continue" />
          </div>
        </div>

        <Image src="/images/location.png" alt="Home" width={600} height={720} />
      </Container>
    </Fragment>
  );
};

export default Location;
