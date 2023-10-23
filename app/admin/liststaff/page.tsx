import React from "react";
import ListStaff from "./ListStaff";
import getListUser from "@/app/actions/getListUser";

export const metadata = {
  title: "Manage Staff Admin",
};

export default async function ListStaffPage() {
  const listUser = await getListUser();
  return <ListStaff listUser={listUser} />;
}
