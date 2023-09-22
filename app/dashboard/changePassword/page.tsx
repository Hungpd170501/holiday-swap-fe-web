import React from "react";
import requireAuth from "@/app/libs/requireAuth";

export const metadata = {
  title: "Change Password",
};

export default function DashBoard() {
  return requireAuth(<div>Change password</div>);
}
