import HistoryPayment from "@/app/components/wallet/HistoryPayment";
import React from "react";
import { BiWallet } from "react-icons/bi";
import Wallet from "./Wallet";
import getUserWallet from "@/app/actions/getUserWallet";
import getTransfer from "@/app/actions/getTransfer";

export default async function WalletPage() {
  const userWallet = await getUserWallet();
  const transfer = await getTransfer();
  return <Wallet userWallet={userWallet} transfer={transfer} />;
}
