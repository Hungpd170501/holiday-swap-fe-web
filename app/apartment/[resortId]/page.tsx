import getProperitesByResortId from "@/app/actions/getPropertiesByResortId";
import getResortById from "@/app/actions/getResortById";
import Container from "@/app/components/Container";
import React from "react";
import ApartmentDetail from "./ApartmentDetail";
import Head from "next/head";
import { Metadata } from "next";

interface IParams {
  resortId?: string;
}

export const generateMetadata = async ({ params }: { params: IParams }) => {
  const resort = await getResortById(params);

  return {
    title: resort.resortName,
  };
};

const ResortPage = async ({ params }: { params: IParams }) => {
  const resort = await getResortById(params);
  const properties = await getProperitesByResortId(params);

  return (
    <Container>
      <Head>
        <title>{resort.resortName}</title>
        {/* You can also set other metadata properties here */}
      </Head>
      <ApartmentDetail resort={resort} />
    </Container>
  );
};

export default ResortPage;
