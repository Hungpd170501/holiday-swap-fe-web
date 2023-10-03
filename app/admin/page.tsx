import React from "react";
import requireAuth from "../libs/requireAuth";
import DashboardAdmin from "../components/admin/DashboardAdmin";

export const metadata = {
  title: "DashBoard",
};

export default async function DashBoard() {
  return requireAuth(
    <div className="py-3">
      <div>
        <DashboardAdmin />
      </div>
    </div>
  );
}
