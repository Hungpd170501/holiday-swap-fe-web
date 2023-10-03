import UpgreadeMembershipList from "@/app/components/staff/UpgradeMembershipList";
import React from "react";

export default function UpgreadeMembership() {
  return (
    <div>
      <div>
        Staff {">"} <span className="text-common">Upgrade Membership</span>
      </div>
      <div>
        <UpgreadeMembershipList />
      </div>
    </div>
  );
}
