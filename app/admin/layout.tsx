import React from "react";
import SidebarStaff from "../components/dashboard/SidebarStaff";
import Provider from "../components/Provider";
import SidebarAdmin from "../components/dashboard/SidebarAdmin";

export default async function AdminLayout({
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
        <main className="w-full h-full pr-14">{children}</main>
      </div>
    </Provider>
  );
}
