import UploadImageResortCreate from "@/app/components/staff/UploadImageResortCreate";
import React from "react";
import CreateResort from "./CreateResort";
import getResortAmenities from "@/app/actions/getResortAmenities";

export default async function CreateResortPage() {
  const amineties = await getResortAmenities();
  return <CreateResort amenities={amineties} />;
}
