import React, { Fragment } from "react";
import CardListResort from "../components/listResort/CardListResort";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import getListResort from "../actions/getListResort";

export const metadata = {
  title: "List Resort",
};

export default async function listResort() {
  const listResort = await getListResort();

  return (
    <ClientOnly>
      <Container>
        <div className="bg-[#F5F5F7] flex items-center justify-center ">
          <div className="text-5xl  pt-[250px] pb-[70px]">List Resort</div>
        </div>
        <div className="bg-white px-[50px] flex flex-col items-center justify-center">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-20 py-[30px]">
            {listResort?.content?.map((item: any) => (
              <CardListResort key={item.id} data={item} />
            ))}
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
}
