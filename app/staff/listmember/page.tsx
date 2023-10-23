import getListUser from "@/app/actions/getListUser";
import ListMembershipAll from "@/app/components/staff/ListMembershipAll";
import React from "react";

export const metadata = {
  title: "List Membership Staff",
};

export default async function ListMember() {
  const users = await getListUser();
  return (
    <div>
      <ListMembershipAll users={users} />
    </div>
  );
}
