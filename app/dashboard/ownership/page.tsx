import React, { Fragment } from "react";
import Ownership from "../../components/dashboard/Ownership";
import GetOwnershipByUserId from "@/app/actions/getOwnershipByUserId";
import GetListResort from "@/app/actions/getListResort";
import GetCurrentUser from "@/app/actions/getCurrentUser";

const OwnershipPage = async () => {
  const ownershipUser = await GetOwnershipByUserId();
  const listResort = await GetListResort("0");
  const currentUser = await GetCurrentUser();
  return (
    <Fragment>
      <Ownership
        ownershipUser={ownershipUser}
        resort={listResort}
        currentUser={currentUser}
      />
    </Fragment>
  );
};

export default OwnershipPage;
