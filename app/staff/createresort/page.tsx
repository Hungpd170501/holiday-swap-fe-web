import UploadImageResortCreate from "@/app/components/staff/UploadImageResortCreate";
import React from "react";
import CreateResort from "./CreateResort";
import getAmenityResortType from "@/app/actions/getAmenityResortType";
import getPropertyType from "@/app/actions/getPropertyType";

export default async function CreateResortPage() {
  const amineties = await getAmenityResortType();
  const propertyTypes = await getPropertyType();
  return (
    <CreateResort
      amenitiesArray={amineties}
      propertyTypesArray={propertyTypes}
    />
  );
}
