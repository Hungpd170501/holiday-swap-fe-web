import React from "react";
import Ownership from "./Ownership";
import getOwnershipByUserId from "@/app/actions/getOwnershipByUserId";
import getListResort from "@/app/actions/getListResort";
import GetCurrentUser from "@/app/actions/getCurrentUser";

const OwnershipPage = async () => {
  const ownershipUser = await getOwnershipByUserId();
  const listResort = await getListResort("0");
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
