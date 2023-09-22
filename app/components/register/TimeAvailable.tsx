"use client";

import React, { useState } from "react";
import { Fragment } from "react";
import HeadingRegister from "../HeadingRegister";
import Container from "../Container";
import Image from "next/image";
import Calendar from "../input/Calendar";
import { Range } from "react-date-range";
import ButtonRegister from "./BtnRegister";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface TimeAvailableProps {
  handleSubmit: () => void;
}

const TimeAvailable: React.FC<TimeAvailableProps> = ({ handleSubmit }) => {
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  return (
    <Fragment>
      <HeadingRegister label="When is your home available?" width="w-8/12" />
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <Image
              src="/images/icons/calendar.png"
              width={35}
              height={35}
              alt="icon-calendar"
            />
            <div className="flex flex-col">
              <p className="font-bold text-lg">
                Add your periods of availability
              </p>
              <p className="font-light text-sm">
                Click on any date to add a period of availability
              </p>
            </div>
          </div>

          <div className="w-auto flex justify-center">
            <Calendar
            value={dateRange}
            onChange={(value: any) => setDateRange(value.selection)}
          />
          </div>

          <div className="flex justify-center">
            <ButtonRegister label="Continue" onClick={handleSubmit} />
          </div>
        </div>

        <div className="hidden md:block">
          <Image
            src="/images/calendar.png"
            width={600}
            height={720}
            alt="calendar"
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default TimeAvailable;
