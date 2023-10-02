"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Link from "next/link";

export default function HistoryPayment() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab
              className="-py-2 focus:bg-[#1FAAE6] focus:text-white focus:rounded-lg focus:-py-3 font-bold focus:font-bold"
              label={<span>recharge </span>}
              value="1"
            />
            <Tab
              className="-py-2 focus:bg-[#1FAAE6] focus:text-white focus:rounded-lg focus:-py-3 font-bold focus:font-bold"
              label={<span>Payment </span>}
              value="2"
            />
            {/* <Tab
              className="-py-2 focus:bg-[#1FAAE6] focus:text-white focus:rounded-lg focus:-py-3 font-bold focus:font-bold"
              label="Item Three"
              value="3"
            /> */}
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <div className=" mb-5 flex flex-row items-center bg-green-50 rounded-3xl w-full justify-between ">
              <div className="flex flex-row items-center">
                <img
                  className="w-14 h-14 rounded-full"
                  src="/images/avt.jpg"
                  alt="asd"
                />
                <div className="flex flex-col ml-2">
                  <div className="text-[20px] font-semibold">Bui Tri Thuc</div>
                  <div className="text-gray-500">Membership</div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-2">June, 1, 2024, </div>
                <span>21:01 PM</span>
              </div>
              <div>
                <div>200.000</div>
              </div>
              <div className="flex flex-row items-center">
                <img className="w-5 h-5 " src="/images/coin.png" alt="" />
                <div>+160</div>
              </div>
              <div className="">
                <div className="text-green-700  rounded-3xl px-3 py-2 border border-green-500 w-auto h-auto">
                  Success
                </div>
              </div>
            </div>
            <div className=" mb-5 flex flex-row items-center bg-green-50 rounded-3xl  w-full justify-between ">
              <div className="flex flex-row items-center">
                <img
                  className="w-14 h-14 rounded-full"
                  src="/images/avt.jpg"
                  alt="asd"
                />
                <div className="flex flex-col ml-2">
                  <div className="text-[20px] font-semibold">Bui Tri Thuc</div>
                  <div className="text-gray-500">Membership</div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-2">August, 7, 2024, </div>
                <span>01:01 AM</span>
              </div>
              <div>
                <div>200.000</div>
              </div>
              <div className="flex flex-row items-center">
                <img className="w-5 h-5 " src="/images/coin.png" alt="" />
                <div>+160</div>
              </div>
              <div className="">
                <div className="text-green-700  rounded-3xl px-3 py-2 border border-green-500 w-auto h-auto">
                  Success
                </div>
              </div>
            </div>
            <Link
              href=""
              className=" mb-5 flex flex-row items-center bg-green-50 rounded-3xl  w-full justify-between "
            >
              <div className="flex flex-row items-center">
                <img
                  className="w-14 h-14 rounded-full"
                  src="/images/avt.jpg"
                  alt="asd"
                />
                <div className="flex flex-col ml-2">
                  <div className="text-[20px] font-semibold">Bui Tri Thuc</div>
                  <div className="text-gray-500">Membership</div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-2">June, 23, 2024, </div>
                <span>11:01 AM</span>
              </div>
              <div>
                <div>200.000</div>
              </div>
              <div className="flex flex-row items-center">
                <img className="w-5 h-5 " src="/images/coin.png" alt="" />
                <div>+160</div>
              </div>
              <div className="">
                <div className="text-green-700  rounded-3xl px-3 py-2 border border-green-500 w-auto h-auto">
                  Success
                </div>
              </div>
            </Link>
            <div className=" mb-2 flex flex-row items-center bg-red-50 rounded-3xl  w-full justify-between ">
              <div className="flex flex-row items-center">
                <img
                  className="w-14 h-14 rounded-full"
                  src="/images/avt.jpg"
                  alt="asd"
                />
                <div className="flex flex-col ml-2">
                  <div className="text-[20px] font-semibold">Bui Tri Thuc</div>
                  <div className="text-gray-500">Membership</div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-2">Jun, 3, 2024, </div>
                <span>19:01 PM</span>
              </div>
              <div>
                <div>200.000</div>
              </div>
              <div className="flex flex-row items-center">
                <img className="w-5 h-5 " src="/images/coin.png" alt="" />
                <div>--</div>
              </div>
              <div className="">
                <div className="text-red-700  rounded-3xl px-3 py-2 border border-red-500 w-auto h-auto">
                  Failed
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div>
            <div className=" mb-5 flex flex-row items-center  rounded-3xl w-full justify-between ">
              <div className="flex flex-row items-center">
                <img
                  className="w-14 h-14 rounded-full"
                  src="/images/avt.jpg"
                  alt="asd"
                />
                <div className="flex flex-col ml-2">
                  <div className="text-[20px] font-semibold">Bui Tri Thuc</div>
                  <div className="text-gray-500">Membership</div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-2">June, 1, 2024, </div>
                <span>21:01 PM</span>
              </div>
              <div>
                <div>Six Senses Ninh Van Bay</div>
              </div>
              <div className="flex flex-row items-center">
                <img className="w-5 h-5 " src="/images/coin.png" alt="" />
                <div className="ml-2">-860</div>
              </div>
              <div className="">
                <div className="text-green-700  rounded-3xl px-3 py-2 border border-green-500 w-auto h-auto">
                  Success
                </div>
              </div>
            </div>
            <div className=" mb-5 flex flex-row items-center  rounded-3xl w-full justify-between ">
              <div className="flex flex-row items-center">
                <img
                  className="w-14 h-14 rounded-full"
                  src="/images/avt.jpg"
                  alt="asd"
                />
                <div className="flex flex-col ml-2">
                  <div className="text-[20px] font-semibold">Bui Tri Thuc</div>
                  <div className="text-gray-500">Membership</div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-2">August, 1, 2024, </div>
                <span>13:01 PM</span>
              </div>
              <div>
                <div>InterContinental Danang Sun Peninsula Resort</div>
              </div>
              <div className="flex flex-row items-center">
                <img className="w-5 h-5 " src="/images/coin.png" alt="" />
                <div className="ml-2">-2860</div>
              </div>
              <div className="">
                <div className="text-green-700  rounded-3xl px-3 py-2 border border-green-500 w-auto h-auto">
                  Success
                </div>
              </div>
            </div>
            <div className=" mb-5 flex flex-row items-center  rounded-3xl w-full justify-between ">
              <div className="flex flex-row items-center">
                <img
                  className="w-14 h-14 rounded-full"
                  src="/images/avt.jpg"
                  alt="asd"
                />
                <div className="flex flex-col ml-2">
                  <div className="text-[20px] font-semibold">Bui Tri Thuc</div>
                  <div className="text-gray-500">Membership</div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="mr-2">June, 1, 2024, </div>
                <span>21:01 PM</span>
              </div>
              <div>
                <div>Vinpearl Luxury Da Nang</div>
              </div>
              <div className="flex flex-row items-center">
                <img className="w-5 h-5 " src="/images/coin.png" alt="" />
                <div className="ml-2">-1860</div>
              </div>
              <div className="">
                <div className="text-green-700  rounded-3xl px-3 py-2 border border-green-500 w-auto h-auto">
                  Success
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
