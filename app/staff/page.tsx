import React from "react";
import requireAuth from "../libs/requireAuth";
import DashBoardStaff from "./dashboardstaff/page";

export const metadata = {
  title: "DashBoard",
};

export default async function DashBoard() {
  return requireAuth(
    <div className="py-3">
      <div>
        <DashBoardStaff />
      </div>
    </div>
  );
}
