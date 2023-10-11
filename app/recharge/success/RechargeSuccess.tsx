"use client";

import Container from "@/app/components/Container";
import React, { useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import useAxiosAuthClient from "@/app/hooks/useAxiosAuthClient";

const RechargeSuccess = () => {
  const pathName = usePathname();
  const moneyTransferId = pathName?.slice(18, 20);
  const axiosAuthClient = useAxiosAuthClient();

  const responseCode = "00";
  useEffect(() => {
    axiosAuthClient.get(
      `/payment/payment_infor/${moneyTransferId}?vnp_ResponseCode=${responseCode}`
    );
  }, [pathName]);
  return (
    <Container>
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <h1 className="text-4xl font-bold">Recharge success</h1>
      </div>
    </Container>
  );
};

export default RechargeSuccess;
