"use client";

import React, { Fragment, useState } from "react";
import SearchBarResort from "./SearchBarResort";
import Container from "../components/Container";
import CalendarAparment from "./CalendarAparment";
import ListResort from "./ListResort";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  key: "selection",
};

interface ListApartmentProps {
  listApartment: any;
  listResort: any;
}

const ListAparment: React.FC<ListApartmentProps> = ({
  listApartment,
  listResort,
}) => {
  const [resortId, setResortId] = useState<string>("");
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date().getTime() + 24 * 60 * 60 * 100000000,
    key: "selection",
  });
  const [numberOfGuest, setNumberOfGuest] = useState<number>(1);

  const handleSubmitSearchApartment = (
    resortId: string,
    dateRange: any,
    numberOfGuest: number
  ) => {
    setResortId(resortId);
    setDateRange(dateRange);
    setNumberOfGuest(numberOfGuest);
  };

  return (
    <Fragment>
      <SearchBarResort
        listResort={listResort}
        handleSubmitSearchApartment={handleSubmitSearchApartment}
      />
      <Container className="pt-10 gap-5">
        <ListResort
          listApartment={listApartment}
          resortId={resortId}
          dateRange={dateRange}
          numberOfGuest={numberOfGuest}
        />
      </Container>
    </Fragment>
  );
};

export default ListAparment;
