"use client";

import React from "react";
import { Fragment } from "react";
import HeadingRegister from "../HeadingRegister";
import { homeTypes, residenceTypes } from "./RegisterBody";
import Container from "../Container";
import HomeTypeCard from "./HomeTypeCard";
import ButtonRegister from "./BtnRegister";
import Image from "next/image";

interface HomeTypeProps {
  onClick: (value: string) => void;
  selected: any;
  handleSubmit: () => void;
}

const HomeType: React.FC<HomeTypeProps> = ({
  onClick,
  selected,
  handleSubmit,
}) => {
  return (
    <Fragment>
      <HeadingRegister label="What's your home like?" width="w-2/12" />
      <Container className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col">
            <div className="font-normal">
              Let potential exchange partners learn more about you, motivating
              them to swap homes with you!
            </div>

            <div className="font-normal">
              It takes two minutes, and you'll be able to decide to welcome
              other members to your home.
            </div>

            <div className="flex flex-col py-4">
              <div className="py-4">
                <p>Home type</p>
                <div className="flex gap-5">
                  {homeTypes.map((home, index) => (
                    <HomeTypeCard
                      onClick={onClick}
                      selected={selected === home.label}
                      key={index}
                      icon={home.icon}
                      label={home.label}
                    />
                  ))}
                </div>
              </div>

              <div className="py-4">
                <p>Residence type</p>
                <div className="flex gap-5">
                  {residenceTypes.map((item, index) => (
                    <HomeTypeCard
                      onClick={onClick}
                      selected={selected === item.label}
                      key={index}
                      icon={item.icon}
                      label={item.label}
                    />
                  ))}
                </div>
              </div>

              <ButtonRegister onClick={handleSubmit} label="Continue" />
            </div>
          </div>

          <div className="hidden md:block">
            <Image src="/images/home.png" alt="Home" width={600} height={720} />
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default HomeType;
