"use client";
import React, { useState } from "react";
import Container from "../Container";
import Link from "next/link";
import {
  FieldValues,
  useForm,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";
import useAxiosAuth from "@/app/hooks/useAxiosAuth";
import Button from "../Button";
import axios from "axios";
import useAxiosAuthClient from "@/app/hooks/useAxiosAuthClient";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

export default function RechargeCard() {
  const [clickedCard, setClickedCard] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("1000000");
  const [orderInfor, setOrderInfor] = useState("nap_tien_vnp");
  const returnUrl = "http://localhost:3000";
  const axiosAuthClient = useAxiosAuthClient();
  const router = useRouter();

  const handleCardClick = (index: number) => {
    if (clickedCard === index) {
      // Nếu bạn bấm vào thẻ đã được chọn, hãy tắt nó đi
      setClickedCard(0);
    } else {
      // Nếu bạn bấm vào thẻ khác, hãy chọn nó
      setClickedCard(index);
    }
  };

  const cardData = [
    {
      text: "100 point",
      price: "120.000 VND",
      amount: 120000,
    },
    {
      text: "200 point",
      price: "230.000 VND",
      amount: 230000,
    },
    {
      text: "300 point",
      price: "340.000 VND",
      amount: 340000,
    },
    {
      text: "400 point",
      price: "450.000 VND",
      amount: 450000,
    },
    {
      text: "500 point",
      price: "560.000 VND",
      amount: 560000,
    },
    {
      text: "600 point",
      price: "670.000 VND",
      amount: 670000,
    },
  ];

  const handleTopup = async () => {
    const res = await axiosAuthClient(
      `/payment/Create_payment?amount=${amount}&orderInfor=${orderInfor}&returnURL=${returnUrl}`
    );
    if (res.status === 200) {
      router.push(res.data.url);
    } else {
      toast.error("Some thing went wrong!");
    }
  };
  return (
    <div className="px-20">
      <div className="px-20">
        <div className="text-[35px] font-bold text-common border border-gray-500 px-3 py-3 justify-center rounded-3xl flex flex-row my-10 items-center">
          <div> Nạp tiền qua Vn Pay</div>
          <input className="w-[30px] h-[30px] ml-3" type="checkbox" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="grid grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`w-[300px] h-auto bg-white shadow-md rounded-lg flex flex-col items-center py-10 mb-4 cursor-pointer hover:-translate-y-2 hover:duration-500 translate-y-0 duration-500 ${
                clickedCard === index ? "border border-red-500" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="px-10 flex flex-row items-center justify-center">
                <div className="text-[30px] font-bold">{card.text}</div>
                <img
                  className="w-[50px] h-[50px] ml-5"
                  src="./images/point.jpg"
                  alt=""
                />
              </div>
              <div className="text-[20px] py-5">{card.price}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-row w-full justify-center">
          <div className="flex flex-col items-center mt-16">
            <div className="text-common text-[30px] font-bold mb-4">
              Enter the number of points to top-up
            </div>
            <input
              className="border border-gray-500 w-[700px] px-4 py-2 focus-visible:outline-none rounded-lg"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button
              className=" bg-[#5C98F2] px-4 py-4 rounded-xl text-white mt-10 hover:bg-blue-500"
              type="button"
              onClick={handleTopup}
            >
              Thanh Toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
