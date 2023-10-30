"use client";

import React, { Fragment, useState } from "react";
import SearchBarResot from "./SearchBarResot";
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
}

const ListAparment: React.FC<ListApartmentProps> = ({ listApartment }) => {
  const [dateRange, setDateRange] = useState(initialDateRange);
  return (
    <Fragment>
      <SearchBarResot />
      <Container className="pt-10 gap-5">
        <ListResort listApartment={listApartment} />
      </Container>
    </Fragment>
  );
};

export default ListAparment;
