import React from "react";
import MyProfile from "../components/profile/MyProfile";
import requireAuth from "../libs/requireAuth";

export const metadata = {
  title: "DashBoard",
};

export default async function DashBoard() {
  return requireAuth(
    <div className="py-3">
      <div>
        <MyProfile />
      </div>
    </div>
  );
}
