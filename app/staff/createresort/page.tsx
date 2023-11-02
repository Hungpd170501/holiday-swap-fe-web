import UploadImageResortCreate from "@/app/components/staff/UploadImageResortCreate";
import React from "react";
import CreateResort from "./CreateResort";
import GetAmenityResortType from "@/app/actions/getAmenityResortType";
import GetPropertyType from "@/app/actions/getPropertyType";

export const metadata = {
  title: "Create Resort",
};

export default async function CreateResortPage() {
  const amineties = await GetAmenityResortType();
  const propertyTypes = await GetPropertyType();
  return (
    <CreateResort
      amenitiesArray={amineties}
      propertyTypesArray={propertyTypes}
    />
  );
}
