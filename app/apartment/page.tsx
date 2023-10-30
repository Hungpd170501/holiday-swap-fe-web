import React from "react";
import ClientOnly from "../components/ClientOnly";
import ListAparment from "./ListAparment";
import GetListApartment from "../actions/getListApartment";

export const metadata = {
  title: "Apartments",
};

export default async function listResortPage() {
  const listApartment = await GetListApartment();
  return (
    <ClientOnly>
      <ListAparment listApartment={listApartment} />
    </ClientOnly>
  );
}
