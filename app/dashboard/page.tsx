import React from "react";
import MyProfile from "../components/profile/MyProfile";

export default function DashBoard() {
  return (
    <div>
      <div className="flex flex-row items-center gap-10 py-20 px-20">
        <div>SideBar</div>
        <div>
          <MyProfile />
        </div>
      </div>
    </div>
  );
}
