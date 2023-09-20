import Sidebar from "../components/dashboard/Sidebar";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row gap-10 py-20">
      <div>
        <Sidebar />
      </div>
      <main>{children}</main>
    </div>
  );
}
