import React from "react";
import { AiFillThunderbolt, AiOutlineFundView } from "react-icons/ai";
import { BiSolidBed } from "react-icons/bi";
import { FaSwimmingPool, FaUserAlt } from "react-icons/fa";
import { LiaSmokingBanSolid } from "react-icons/lia";
import { ImSpoonKnife } from "react-icons/im";
import { HiReceiptRefund } from "react-icons/hi";
import { FaBath, FaCcPaypal } from "react-icons/fa6";
import { GiBathtub, GiHouse } from "react-icons/gi";
import { BsQuestionCircle, BsWifi } from "react-icons/bs";
import { MdBalcony } from "react-icons/md";

export default function PropertyCard() {
  return (
    <>
      <div className="bg-white rounded-lg w-full h-auto py-3 px-2 shadow-lg mb-4">
        <div className="flex flex-row items-center">
          <h4 className="font-semibold mr-3 text-[20px] cursor-pointer hover:underline">
            Villa Three Bedroom
          </h4>
          <p className="text-[#06AEC3] text-[15px] bg-green-50 px-[2px] py-[2px]">
            Private Swimming Pool
          </p>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col">
            <div className="mt-5 mb-2">
              <img
                className="w-[210px] h-[100px] rounded-md"
                src="/images/resort1.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="py-2">
                <BiSolidBed size={30} />
              </div>
              <p className="text-[17px] font-bold">
                2 single beds and 2 king beds
              </p>
            </div>
            <div className="flex flex-row items-center mt-2">
              <AiOutlineFundView color="#06AEC3" />
              <span className="text-[15px] text-[#06AEC3] ml-2">
                Garden View
              </span>
            </div>
            <div className="flex flex-row items-center mt-2">
              <LiaSmokingBanSolid color="#616161" />
              <span className="text-[15px] ml-2 text-gray-700">
                None Smoking
              </span>
            </div>
            <div className="flex flex-row items-center mt-2">
              <GiHouse color="#616161" />
              <span className="text-[15px] ml-2 text-gray-700">
                190m² | Floor: 1
              </span>
            </div>
            <div className="flex flex-row items-center mt-2">
              <FaSwimmingPool color="#616161" />
              <span className="text-[15px] ml-2 text-gray-700">
                Private Swimming Pool
              </span>
            </div>
            <div className="flex flex-row items-center mt-2">
              <BsWifi color="#06AEC3" />
              <span className="text-[15px] ml-2 text-[#06AEC3]">
                Free Wi-Fi
              </span>
            </div>
            <div className="flex flex-row items-center mt-2">
              <MdBalcony color="#616161" />
              <span className="text-[15px] ml-2 text-gray-700">Balcony</span>
            </div>
            <div className="flex flex-row items-center mt-2 mb-2">
              <FaBath color="#616161" />
              <span className="text-[15px] ml-2 text-gray-700">Bathub</span>
            </div>
            <div className="text-common underline cursor-pointer">
              Room Amenities
            </div>
          </div>
          <div className="w-full h-auto mt-5 border border-gray-500 rounded-xl overflow-hidden">
            <table className="w-full h-full">
              <thead className="bg-[#F5F7FA] text-black  justify-center ">
                <td className="text-[20px] font-semibold  px-4 py-1">
                  Your Choices{" "}
                </td>
                <td className=" text-[20px] font-semibold text-center px-4 py-1 ">
                  Sleeps{" "}
                </td>
                <td className="  text-[20px] font-semibold text-center px-4 py-1">
                  Today's Price{" "}
                </td>
              </thead>
              <tbody>
                <td className="relative border-r border-black border-opacity-20 px-4 py-4">
                  <div className="absolute w-full px-4 top-0 left-0 ">
                    <div className="flex flex-row  mt-5 w-full justify-between items-center">
                      <div className="flex flex-row items-center">
                        <ImSpoonKnife color="#06AEBD" size={20} />
                        <div className="text-[#06AEBD] text-[15px] ml-2">
                          Includes 4 breakfasts
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <BsQuestionCircle />
                      </div>
                    </div>
                    <div className="flex flex-row  mt-3">
                      <HiReceiptRefund size={20} />
                      <div className=" text-[15px] ml-2">Non-refundable </div>
                    </div>
                    <div className="flex flex-row  mt-3">
                      <AiFillThunderbolt color="#06AEBD" size={20} />
                      <div className=" text-[15px] text-[#06AEBD] ml-2">
                        Instant Confirmation
                      </div>
                    </div>
                    <div className="flex flex-row  mt-3">
                      <FaCcPaypal size={20} />
                      <div className=" text-[15px]  ml-2">Prepay online </div>
                    </div>
                  </div>
                </td>
                <td className="relative border-r border-black border-opacity-30">
                  <div className="absolute top-10 left-0 right-0 flex flex-row items-center justify-center">
                    <FaUserAlt />
                    <div className="ml-2">x4</div>
                  </div>
                </td>
                <td className="relative">
                  <div className="absolute right-0 bottom-0 flex flex-row justify-end items-end px-4 py-4 gap-5">
                    <div className="flex flex-col justify-end items-end">
                      <p className=" text-red-400 bg-red-50 px-1 py-1 text-[10px]">
                        Value deal
                      </p>
                      <div className="underline text-[20px] font-bold ">
                        VND ?
                      </div>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                      <p className="text-red-700 text-[15px]">
                        Only 1 room left
                      </p>
                      <button className="bg-[#2B5BEA] text-white px-2 py-2 rounded-md">
                        Access Lower Price
                      </button>
                    </div>
                  </div>
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
