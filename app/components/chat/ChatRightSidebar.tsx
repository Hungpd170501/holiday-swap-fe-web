"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BsMoonStarsFill } from "react-icons/bs";
import ChatDatePicker from "../chat/ChatDatePicker";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="-mt-[48px] bg-gray-200 h-[668px]">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Your Trip" {...a11yProps(0)} />
          <Tab label="Hung Trip" {...a11yProps(1)} />
          <Tab label="Hợp Đồng" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
          <img
            className="w-[300px] h-[180px]"
            src="./images/resort2.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-row items-center justify-between py-3">
          <div className="text-[20px]">Thức House</div>

          <div className="flex flex-row items-center">
            <BsMoonStarsFill size={25} />
            <div className="text-gray-500 text-[15px]">9h Night</div>
          </div>
        </div>
        <div className="-mt-[18px] text-[13px] text-gray-500 font-bold ml-2">
          Ho Chi Minh city
        </div>
        <div className="mt-6">
          <div>Số Lượng người ở </div>
          <input
            type="text"
            className="border border-gray-400 px-2 py-2 w-full rounded-md"
          />
        </div>
        <div className="flex flex-row w-[300px] gap-2">
          <ChatDatePicker />
          <ChatDatePicker />
        </div>
        <div className="w-full h-[1px] bg-slate-400 mt-8"></div>
        <div className="flex flex-row items-center justify-between mt-2 ">
          <div>Total</div>
          <div>2000 Point</div>
        </div>
        <button className="bg-[#5C98F2] px-24 py-3 rounded-lg text-white mt-4">
          Chấp Thuận
        </button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div>
          <img
            className="w-[300px] h-[180px]"
            src="./images/resort1.jpg"
            alt=""
          />
        </div>

        <div className="flex flex-row items-center justify-between py-3">
          <div className="text-[20px]">Thức House</div>

          <div className="flex flex-row items-center">
            <BsMoonStarsFill size={25} />
            <div className="text-gray-500 text-[15px]">9h Night</div>
          </div>
        </div>
        <div className="-mt-[18px] text-[13px] text-gray-500 font-bold ml-2">
          Ho Chi Minh city
        </div>
        <div className="mt-6">
          <div>Số Lượng người ở </div>
          <input
            type="text"
            className="border border-gray-400 px-2 py-2 w-full rounded-md"
          />
        </div>
        <div className="flex flex-row w-[300px] gap-2">
          <ChatDatePicker />
          <ChatDatePicker />
        </div>
        <div className="w-full h-[1px] bg-slate-400 mt-8"></div>
        <div className="flex flex-row items-center justify-between mt-2 ">
          <div>Total</div>
          <div>2000 Point</div>
        </div>
        <button className="bg-[#5C98F2] px-24 py-3 rounded-lg text-white mt-5 hover:bg-blue-600">
          Chấp Thuận
        </button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
