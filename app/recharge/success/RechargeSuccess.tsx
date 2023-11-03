'use client';

import Container from '@/app/components/Container';
import React, { useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import axios from 'axios';

const RechargeSuccess = () => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const moneyTransferId = pathName?.slice(18, 23);
  const axiosAuthClient = useAxiosAuthClient();

  const responseCode = '00';

  useEffect(() => {
    // axiosAuthClient.get(
    //   `https://holiday-swap.click/api/v1/payment/payment_infor/${moneyTransferId}?vnp_ResponseCode=${responseCode}`
    // );
    if (session?.user.access_token) {
      const config = {
        headers: { Authorization: `Bearer ${session?.user.access_token}` },
      };

      axios.get(
        `https://holiday-swap.click/api/v1/payment/payment_infor/${moneyTransferId}?vnp_ResponseCode=${responseCode}`,
        config
      );
    }
  }, [pathName, session?.user.access_token]);
  return (
    <Container>
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <h1 className="text-4xl font-bold">Recharge success</h1>
      </div>
    </Container>
  );
};

export default RechargeSuccess;
