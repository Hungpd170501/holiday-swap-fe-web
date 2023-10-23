import React from "react";
import Point from "./Point";
import getPoint from "@/app/actions/getPoint";

export const metadata = {
  title: "Manage Point Admin",
};


export default async function PointPage() {
  const point = await getPoint();
  return <Point point={point} />;
}
