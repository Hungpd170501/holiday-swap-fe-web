'use client';

import Container from '@/app/components/Container';
import React, { useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import axios from 'axios';
import Link from 'next/link';

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
    <Container className="bg-green-50">
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="font-bold text-[30px] py-3">Deposit successful!</div>
        <div>
          You have successfully deposited <span className="text-common">300 points</span> into your
          wallet
        </div>
        <div>
          <img className="w-60 h-60 " src="/images/check-mark.png" alt="" />
        </div>
        <Link
          href="./dashboard/wallet"
          className="-ml-10 bg-green-400 text-white font-bold rounded-md px-5 py-2"
        >
          Back to wallet
        </Link>
      </div>
    </Container>
  );
};

export default RechargeSuccess;
