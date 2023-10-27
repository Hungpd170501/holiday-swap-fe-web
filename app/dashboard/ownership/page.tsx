import React from "react";
import Ownership from "../../components/dashboard/Ownership";
import GetOwnershipByUserId from "@/app/actions/getOwnershipByUserId";
import GetListResort from "@/app/actions/getListResort";
import GetCurrentUser from "@/app/actions/getCurrentUser";

const OwnershipPage = async () => {
  const ownershipUser = await GetOwnershipByUserId();
  const listResort = await GetListResort("0");
  const currentUser = await GetCurrentUser();
  return (
    <Ownership
      ownershipUser={ownershipUser}
      resort={listResort}
      currentUser={currentUser}
    />
  );
};

export default OwnershipPage;
