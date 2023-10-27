import GetOwnershipStaff from "@/app/actions/getOwnershipStaff";
import ListApproveOwnership from "@/app/components/staff/ListApproveOwnership";
import React from "react";

export const metadata = {
  title: "List Approve Ownership",
};

export default async function ListApprove() {
  const ownershipStaff = await GetOwnershipStaff();
  return (
    <div>
      <ListApproveOwnership ownershipStaff={ownershipStaff} />
    </div>
  );
}
