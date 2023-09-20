import React from "react";
import MyProfile from "../components/profile/MyProfile";
import Sidebar from "../components/dashboard/Sidebar";

export const metadata = {
  title: "DashBoard",
};

export default function DashBoard() {
  return (
    <div className="py-3">
      <div>
        <MyProfile />
      </div>
    </div>
  );
}
