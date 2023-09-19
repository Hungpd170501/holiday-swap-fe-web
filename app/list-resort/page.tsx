import React, { Fragment } from "react";
import Header from "../components/Header";
import CardListResort from "../components/listResort/CardListResort";
import Footer from "../components/Footer";
import Provider from "../components/Provider";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";

export default async function listResort() {
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <Header currentUser={currentUser} />
      <Container>
        <div className="bg-[#F5F5F7] flex items-center justify-center ">
          <div className="text-5xl  pt-[250px] pb-[70px]">List Resort</div>
        </div>
        <div className="bg-white px-[50px] flex flex-col items-center justify-center">
          <CardListResort />
          <CardListResort />
          <CardListResort />
        </div>
      </Container>
      <Footer />
    </ClientOnly>
  );
}
