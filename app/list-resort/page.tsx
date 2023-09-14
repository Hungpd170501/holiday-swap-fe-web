import React from "react";
import Header from "../components/Header";
import CardListResort from "../components/listResort/CardListResort";
import Footer from "../components/Footer";

export default function listResort() {
  return (
    <div>
      <Header />
      <div className="bg-[#F5F5F7] flex items-center justify-center ">
        <div className="text-5xl  pt-[250px] pb-[70px]">List Resort</div>
      </div>
      <div className="bg-white px-[50px] flex flex-col items-center justify-center">
        <CardListResort />
        <CardListResort />
        <CardListResort />
      </div>
      <Footer />
    </div>
  );
}
