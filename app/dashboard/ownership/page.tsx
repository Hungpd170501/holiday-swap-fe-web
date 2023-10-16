import React from "react";
import Ownership from "./Ownership";
import getOwnershipByUserId from "@/app/actions/getOwnershipByUserId";

const OwnershipPage = async () => {
  const ownershipUser = await getOwnershipByUserId();
  return <Ownership ownershipUser={ownershipUser} />;
};

export default OwnershipPage;
