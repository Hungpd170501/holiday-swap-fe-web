import React, { Fragment, useState } from "react";
import CardListResort from "../components/listResort/CardListResort";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import getListResort from "../actions/getListResort";
import DetailPropertyModal from "../components/modal/ModalBaseDetail";
import ListResort from "./ListResort";
import SearchBarResot from "./SearchBarResot";
import CalendarAparment from "./CalendarAparment";
import ListAparment from "./ListAparment";

// export const metadata = {
//   title: "List Resort",
// };

export default function listResortPage() {
  return (
    <ClientOnly>
      <ListAparment />
    </ClientOnly>
  );
}
