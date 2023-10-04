import requireAuth from "../libs/requireAuth";
import React from "react";
import DashBoardAdmin from "./dashboard/DashBoardAdmin";
import DashboardAdminPage from "./dashboard/page";

export default async function AdminPage() {
  return requireAuth(
    <div className="py-3">
      <div>
        <DashboardAdminPage />
      </div>
    </div>
  );
}
