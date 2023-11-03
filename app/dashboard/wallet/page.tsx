import HistoryPayment from '@/app/components/wallet/HistoryPayment';
import React from 'react';
import { BiWallet } from 'react-icons/bi';
import Wallet from './Wallet';
import GetUserWallet from '@/app/actions/getUserWallet';
import GetTransfer from '@/app/actions/getTransfer';
import GetHistoryTransaction from '@/app/actions/getHistoryTransaction';

export default async function WalletPage() {
  const userWallet = await GetUserWallet();
  const transfer = await GetTransfer();
  const historyTransaction = await GetHistoryTransaction();
  return (
    <Wallet userWallet={userWallet} transfer={transfer} historyTransaction={historyTransaction} />
  );
}
