import React from "react";
import ClientOnly from "../components/ClientOnly";
import ListAparment from "./ListAparment";

export const metadata = {
  title: "Apartments",
};

export default function listResortPage() {
  return (
    <ClientOnly>
      <ListAparment />
    </ClientOnly>
  );
}
