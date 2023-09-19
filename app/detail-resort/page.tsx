import React from "react";
import HeaderDetailResort from "../components/detailResort/HeaderDetailResort";
import Header from "../components/Header";
import DetailContentTop from "../components/detailResort/DetailContentTop";
import ImageDetailResort from "../components/detailResort/ImageDetailResort";
import DetailContent from "../components/detailResort/DetailContent";
import Footer from "../components/Footer";
// import SimpleMap from "../components/detailResort/Map";
import RightSideBar from "../components/detailResort/RightSideBar";
import TimeShareTable from "../components/detailResort/TimeShareTable";

export default async function DetailResort() {
  return (
    <div className="flex flex-col ">
      <div className="px-[70px]">
        <HeaderDetailResort />
      </div>
      <div className="w-full h-[0.5px] bg-gray-300 mt-[0px]"></div>
      <div className="px-[70px]">
        <DetailContentTop />
      </div>
      <div className="px-[70px] pb-[20px]">
        <ImageDetailResort />
      </div>
      <div className="flex flex-row px-[70px]  ">
        <DetailContent />
        <RightSideBar />
      </div>

      <div className="flex flex-row px-[70px] py-10 ">
        <TimeShareTable />
      </div>
    </div>
  );
}
