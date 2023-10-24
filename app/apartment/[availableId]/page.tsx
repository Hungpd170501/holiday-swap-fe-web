import getProperitesByResortId from "@/app/actions/getPropertiesByResortId";
import getResortById from "@/app/actions/getResortById";
import Container from "@/app/components/Container";
import React from "react";
import ApartmentDetail from "./ApartmentDetail";
import Head from "next/head";
import { Metadata } from "next";
import getApartmentById from "@/app/actions/getAparmetById";

interface IParams {
  availableId?: string;
}

export const generateMetadata = async ({ params }: { params: IParams }) => {
  const apartment = await getApartmentById(params);

  return {
    title: apartment?.property.propertyName,
  };
};

const ResortPage = async ({ params }: { params: IParams }) => {
  const apartment = await getApartmentById(params);

  return (
    <Container>
      <ApartmentDetail apartment={apartment} />
    </Container>
  );
};

export default ResortPage;
