import React, { Fragment } from "react";
import Point from "../../components/admin/Point";
import GetPoint from "@/app/actions/getPoint";

export const metadata = {
  title: "Manage Point Admin",
};

export default async function PointPage() {
  const point = await GetPoint();
  return <Fragment>
    <Point point={point} />
  </Fragment>
}
