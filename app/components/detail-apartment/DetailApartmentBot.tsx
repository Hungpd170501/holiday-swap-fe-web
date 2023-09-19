"use client";
import * as React from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiFillWarning } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import DetailApartmentCarosel from "./DetailApartmentCarosel";

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

export default function DetailApartmentBot() {
  const items = [
    "https://ak-d.tripcdn.com/images/0223412000araigzyE744_R_960_660_R5_D.jpg",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/487029186.jpg?k=b1758cc14fda25f1ab205c6be7b5476a3c247acf0c31edab52ac4ebaa6362406&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/293030706.jpg?k=d465d2b1e06e722dd3ac6ef6e6a5d0e03f94834e0f0d4145735a1d73c278371a&o=&hp=1",
    "https://fati-boutique-hotel-apartment-vung-tau.hotelmix.vn/data/Photos/OriginalPhoto/11823/1182388/1182388315/Fati-Boutique-Hotel-Apartment-Vung-Tau-Exterior.JPEG",
    "https://danhkhoi.com.vn/static/upload/images/Du-An/Aria-Vung-Tau/Aria-Vung-Tau-3.jpg",
    "https://q-xx.bstatic.com/xdata/images/hotel/max500/398318583.jpg?k=6d88fcfdb9ecd80aa3f0730f21d8511b68dcf5e47a329cd2d5b772cc1daa9be5&o=",
    "https://q-cf.bstatic.com/images/hotel/max1024x768/280/280360427.jpg",
    "https://fati-boutique-hotel-apartment-vung-tau.hotelmix.vn/data/Photos/OriginalPhoto/11823/1182388/1182388315/Fati-Boutique-Hotel-Apartment-Vung-Tau-Exterior.JPEG",
    "https://danhkhoi.com.vn/static/upload/images/Du-An/Aria-Vung-Tau/Aria-Vung-Tau-3.jpg",
    "https://q-xx.bstatic.com/xdata/images/hotel/max500/398318583.jpg?k=6d88fcfdb9ecd80aa3f0730f21d8511b68dcf5e47a329cd2d5b772cc1daa9be5&o=",
    "https://q-cf.bstatic.com/images/hotel/max1024x768/280/280360427.jpg",
    "https://fati-boutique-hotel-apartment-vung-tau.hotelmix.vn/data/Photos/OriginalPhoto/11823/1182388/1182388315/Fati-Boutique-Hotel-Apartment-Vung-Tau-Exterior.JPEG",
    "https://danhkhoi.com.vn/static/upload/images/Du-An/Aria-Vung-Tau/Aria-Vung-Tau-3.jpg",
    "https://q-xx.bstatic.com/xdata/images/hotel/max500/398318583.jpg?k=6d88fcfdb9ecd80aa3f0730f21d8511b68dcf5e47a329cd2d5b772cc1daa9be5&o=",
    "https://q-cf.bstatic.com/images/hotel/max1024x768/280/280360427.jpg",
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };
  return (
    <Box sx={{ width: "100%" }} className="border  border-gray-300">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="POSTING DETAILS" {...a11yProps(0)} />
          <Tab label="ABOUT THE RESORT" {...a11yProps(1)} />
          <Tab label="RESORT REVIEWS (163)" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
          <div className="mb-3">
            <div className="py-3 text-[20px] font-bold">Kitchen</div>
            <div className="flex flex-row w-full px-3  ">
              <ul className="list-disc pl-4">
                <li className="text-[19px]">Coffee maker</li>
                <li className="text-[19px]">Dishwasher</li>
              </ul>
              <ul className="list-disc px-[200px]">
                <li className="text-[19px]">Microwave</li>
                <li className="text-[19px]">Oven</li>
              </ul>
              <ul className="list-disc pl-4">
                <li className="text-[19px]">Refrigerator (full-size)</li>
                <li className="text-[19px]">Stovetop</li>
              </ul>
            </div>
          </div>
          <div className="mb-3">
            <div className="py-3 text-[20px] font-bold">Entertainment</div>
            <div className="flex flex-row w-full px-3  ">
              <ul className="list-disc pl-4">
                <li className="text-[19px]">DVD player</li>
                <li className="text-[19px]">Internet access</li>
              </ul>
              <ul className="list-disc pl-[186px]">
                <li className="text-[19px]">Radio or music player</li>
                <li className="text-[19px]">Telephone</li>
              </ul>
              <ul className="list-disc pl-[140px]">
                <li className="text-[19px]">TV </li>
              </ul>
            </div>
          </div>
          <div className="mb-3">
            <div className="py-3 text-[20px] font-bold">Features</div>
            <div className="flex flex-row w-full px-3  ">
              <ul className="list-disc pl-4">
                <li className="text-[19px]">Air conditioning</li>
                <li className="text-[19px]">Patio or balcony</li>
              </ul>
              <ul className="list-disc px-[180px]">
                <li className="text-[19px]">Washer and dryer (in-unit)</li>
                <li className="text-[19px]">Whirlpool tub</li>
              </ul>
            </div>
          </div>
          <div className="mb-3">
            <div className="py-3 text-[20px] font-bold">Policies</div>
            <div className="flex flex-row w-full px-3  ">
              <ul className="list-disc pl-4">
                <li className="text-[19px]">No pets</li>
              </ul>
              <ul className="list-disc px-[240px]">
                <li className="text-[19px]">No smoking</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center py-2">
              <AiFillWarning className="mr-3" color="orange" size={25} />
              <div className="text-[19px]">
                All units have a water view - either oceanview or intercoastal.
              </div>
            </div>
            <div className="flex flex-row items-center py-2">
              <BiNotepad className="mr-3" color="orange" size={25} />
              <div className="text-[19px]">
                Guests are permitted one parking space per reservation, at an
                additional fee of $14 daily.
              </div>
            </div>
          </div>
          <div className="w-[850px] px-2">
            <div className="text-[19px] py-4">
              This is a RedWeek.com full-service rental with booking protection.
              Key details have been verified, and all inquiries and bookings
              will be handled by the RedWeek full-service team.
            </div>
            <div className="text-[19px]">
              Contact us with questions, or book online with your credit card.
              You will receive your final confirmation within 5 days.
            </div>
          </div>
          <div className="bg-gray-200 w-full h-auto mt-10 flex flex-col items-center justify-center">
            <div className="py-5">Interested in this posting?</div>
            <button className="text-white bg-blue-500 px-40 py-4 mb-4">
              REQUEST TO BOOK
            </button>

            <div className="mb-5 text-[20px] font-bold text-common">Or</div>
            <button className="text-white bg-blue-500 px-40 py-4 mb-4">
              REQUEST TO EXCHANGE
            </button>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div>
          <div className="flex flex-row">
            <img
              className=" border-[8px] border-b-[14px] border-gray-400 overflow-hidden  w-[250px] h-[250px] mt-4 "
              src="./images/resort1.jpg"
              alt=""
              style={{ transform: "rotate(-10deg)" }}
            />
            <div className="w-[600px] px-10">
              <div className="text-common text-[30px]">Khách sạn Nha Trang</div>
              <div className="pb-6 text-gray-500 pl-2">
                Thành Phố Nha Trang, Tỉnh Khánh Hòa
              </div>
              <div>
                <div>
                  {showFullContent ? (
                    <>
                      <div className="mb-1">
                        Marriott's BeachPlace Towers Fort Lauderdale, Florida
                        From its prime oceanfront location, Marriott's
                        BeachPlace Towers commands spectacular views of the
                        Atlantic and the Intracoastal Waterway. Here, you can
                        relax how you want - unwind at the outdoor pool or
                        whirlpool hot tubs and take in the beautiful views of
                        the Atlantic Ocean, or enjoy the convenience a drink and
                        snack of your choice at the Splash Pool Bar & Grill. The
                        fitness center is perfect for burning off excess energy,
                        and kids will adore the dedicated children's activity
                        program. Coffee, snacks and other vacation essentials
                        are available at The Marketplace Express!
                      </div>
                      <div className="mb-1">
                        After a day of seaside fun, unwind in your spacious
                        villa - these inviting studio, one- bedroom and two-
                        bedroom retreats provide ample living and dining space,
                        with enough room for the whole family or a group of
                        friends. In addition, one- and two- bedroom units also
                        include a full kitchen, in-suite washer and dryer and
                        oversized soaking tub for the ultimate relaxation after
                        a day of adventure. Wi-Fi access is also available, so
                        you can share your experience with everyone back at
                        home.
                      </div>
                      <div>
                        Fort Lauderdale is one of Florida's most vibrant cities,
                        offering the best of both worlds. Pristine beaches
                        beckon you with miles of sand and sparkling water, while
                        the dynamic city offers an exciting array of arts,
                        entertainment and culture that begs you to explore. No
                        matter what time of year, Fort Lauderdale is a sun
                        lover’s paradise. Whether you’re searching for
                        relaxation or exhilaration, you’ll discover your ideal
                        vacation here.
                      </div>
                    </>
                  ) : (
                    <>
                      Marriott's BeachPlace Towers Fort Lauderdale, Florida From
                      its prime oceanfront location, Marriott's BeachPlace
                      Towers...
                    </>
                  )}
                </div>
                <button onClick={toggleContent}>
                  {showFullContent ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
          <div className="w-[800px]  mt-20 pl-10">
            <DetailApartmentCarosel slices={items} />
          </div>
          <div className="w-full h-[1px] bg-gray-200 mt-10"></div>
          <div className="py-5">
            <div>21 S Fort Lauderdale Beach Blvd</div>

            <div>Fort Lauderdale, Florida 33316</div>
          </div>
          <div className="w-full h-[1px] bg-gray-200 "></div>
          <div className="text-[12px] mt-5">
            Accuracy not guaranteed. Contact the resort to confirm the address
            before making plans.
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
