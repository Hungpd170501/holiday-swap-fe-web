import Provider from "../components/Provider";
import React from "react";
import SidebarAdmin from "../components/dashboard/SidebarAdmin";

export default async function DashboardStaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <div className="flex flex-row gap-10 pt-20">
        <div>
          <SidebarAdmin />
        </div>
        <main className="w-full pr-14">{children}</main>
      </div>
    </Provider>
  );
}
