import HistoryPayment from "@/app/components/wallet/HistoryPayment";
import React from "react";
import { BiWallet } from "react-icons/bi";

export default function Wallet() {
  return (
    <div>
      <div>
        Dashboard {">"} <span className="text-common">My Wallet</span>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="bg-white w-full rounded-3xl h-auto px-5 py-8 shadow-xl mt-10">
          <div className="flex flex-row items-center">
            <div className="pr-10">
              <BiWallet size={100} color="#5C98F2" />
            </div>
            <div className="flex flex-col">
              <div className="text-[30px]">Account balance</div>
              <div className="flex flex-row items-center">
                <img
                  className="w-[50px] h-[50px]"
                  src="/images/coin.png"
                  alt=""
                />
                <div className="text-[30px] ml-1 font-bold">608</div>
              </div>
            </div>
          </div>
          <div className="w-full h-[5px] bg-[#24ADEC] rounded-3xl my-5"></div>
          <div className="flex flex-row items-center justify-around w-full">
            <div>
              <div className="flex flex-row items-center">
                <div className="bg-[#f1e4f1] w-auto h-auto rounded-lg px-5 py-3 flex flex-row items-center">
                  <div className="bg-white rounded-full w-11 h-11 flex flex-col justify-center items-center mr-[10px]">
                    <div className="text-[25px] text-[#e6abe6]">21</div>
                  </div>
                  <div className="flex flex-col">
                    <div>Number of refills</div>
                    <div className="text-gray-500">
                      Total: <span>200k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center">
                <div className="bg-[#e4f1ef] w-auto h-auto rounded-lg px-5 py-3 flex flex-row items-center">
                  <div className="bg-white rounded-full w-11 h-11 flex flex-col justify-center items-center mr-[10px]">
                    <div className="text-[25px] text-[#b0e0d8]">4</div>
                  </div>
                  <div className="flex flex-col">
                    <div>Number of payments</div>
                    <div className="text-gray-500 flex flex-row items-center">
                      <div>Total: </div>
                      <span className="flex flex-row items-center ml-1">
                        <img
                          className="w-[15px] h-[15px]"
                          src="/images/coin.png"
                          alt=""
                        />
                        400
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center">
                <div className="bg-[#eff1e4] w-auto h-auto rounded-lg px-5 py-3 flex flex-row items-center">
                  <div className="bg-white rounded-full w-11 h-11 flex flex-col justify-center items-center mr-[10px]">
                    <div className="text-[25px] ">21</div>
                  </div>
                  <div className="flex flex-col">
                    <div>Number of refills</div>
                    <div className="text-gray-500">
                      Total: <span>200k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 w-[1000px] rounded-b-3xl h-auto px-5 py-4 shadow-xl"></div>
        <div className="bg-gray-300 w-[900px] rounded-b-3xl h-auto px-5 py-4 shadow-xl"></div>
      </div>
      <div className="mt-16 text-[25px] mb-2 text-common font-bold">
        Wallet History
      </div>
      <div className="bg-white w-full rounded-3xl h-auto shadow-2xl">
        <HistoryPayment />
      </div>
    </div>
  );
}
