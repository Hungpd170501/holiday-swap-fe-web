"use client";

import React from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import dayjs from 'dayjs';

interface CalendarApartmentProps {
  value: Range | any;
  onChange: (value: RangeKeyDict | any) => void;
  disabledDates?: Date[];
  className?: string;
}

const CalendarAparment: React.FC<CalendarApartmentProps> = ({
  value,
  onChange,
  disabledDates,
  className,
}) => {
  return (
    <DateRange
      dateDisplayFormat="yyyy-MM-dd"
      rangeColors={["#5C98F2"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      months={2}
      direction="horizontal"
      showDateDisplay={false}
      minDate={dayjs().toDate()}
      maxDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1095000)}
      disabledDates={disabledDates}
      className={`${className}`}
    />
  );
};

export default CalendarAparment;
