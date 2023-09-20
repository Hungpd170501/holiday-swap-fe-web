import React from "react";
import DetailApartmentTop from "../components/detail-apartment/DetailApartmentTop";
import DetailApartmentSidebar from "../components/detail-apartment/DetailApartmentSidebar";
import DetailApartmentBot from "../components/detail-apartment/DetailApartmentBot";
import Header from "../components/Header";

export default function page() {
  return (
    <>
      <div className="bg-blue-200 h-[370px] w-full flex items-center justify-center ">
        <div className="text-5xl mt-10">Detail Apartment</div>
      </div>
      <div className="flex flex-row px-20 py-3 gap-5">
        <div>
          <DetailApartmentTop />
          <DetailApartmentBot />
        </div>
        <div>
          <DetailApartmentSidebar />
        </div>
      </div>
    </>
  );
}
