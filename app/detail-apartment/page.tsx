import React from "react";
import DetailApartmentTop from "../components/detail-apartment/DetailApartmentTop";
import DetailApartmentSidebar from "../components/detail-apartment/DetailApartmentSidebar";
import DetailApartmentBot from "../components/detail-apartment/DetailApartmentBot";

export default function page() {
  return (
    <div className="flex flex-row px-28 py-96">
      <div>
        <DetailApartmentTop />
        <DetailApartmentBot />
      </div>
      <div>
        <DetailApartmentSidebar />
      </div>
    </div>
  );
}
