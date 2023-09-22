import React from "react";
import RechargeCard from "../components/recharge/RechargeCard";
import Container from "../components/Container";
import requireAuth from "../libs/requireAuth";

export default function Recharge() {
  return requireAuth(
    <div>
      <div className="bg-[#F5F5F7] flex items-center justify-center ">
        <div className="text-5xl  pt-[250px] pb-[70px]">List Resort</div>
      </div>
      <div>
        <RechargeCard />
      </div>
    </div>
  );
}
