import ManageApartment from "@/app/components/dashboard/ManageApartment";
import React from "react";
export default function EditApartment() {
  return (
    <div>
      <div>
        Dashboard {">"} <span>Ownership</span> {">"}{" "}
        <span className="text-common">Edit apartment</span>
      </div>
      <ManageApartment />
    </div>
  );
}
