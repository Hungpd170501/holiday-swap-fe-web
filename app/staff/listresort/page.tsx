import getListResort from "@/app/actions/getListResort";
import ListResortAll from "@/app/components/staff/ListResortAll";
import React from "react";

export default async function ListResort() {
  const resorts = await getListResort("0");
  return (
    <div>
      <ListResortAll resorts={resorts} />
    </div>
  );
}
