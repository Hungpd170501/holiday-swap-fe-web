import React from "react";
import requireAuth from "@/app/libs/requireAuth";

export const metadata = {
  title: "Edit Profile",
};

export default function EditProfile() {
  return requireAuth(<div>Edit Profile</div>);
}
