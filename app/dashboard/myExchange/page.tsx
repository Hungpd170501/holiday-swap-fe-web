import MyExchangeList from "@/app/components/dashboard/MyExchangeList";
import React from "react";

export default function MyExchange() {
  return (
    <div>
      <div>
        Dashboard {">"} <span className="text-common">My Exchange</span>
      </div>
      <div>
        <MyExchangeList />
      </div>
    </div>
  );
}
