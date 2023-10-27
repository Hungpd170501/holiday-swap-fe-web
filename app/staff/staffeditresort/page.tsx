import UploadImageResortEdit from "@/app/components/staff/UploadImageResortEdit";
import React from "react";

export default function StaffEditResort() {
  return (
    <div>
      <div>
        Dashboard {">"} <span className="text-common">Create Resort</span>
      </div>
      <div className=" w-[600px] py-10">
        <div className="flex flex-row items-center w-full "></div>
      </div>
      <div className="mb-14">
        <div className="mb-3">Upload Image*</div>
        <UploadImageResortEdit />
      </div>
      <div className="w-[700px]">
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Resort Name*</div>
          <input
            type="text"
            placeholder="Thuc"
            value="JW Marriott Phu Quoc Emerald Bay Resort & Spa"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Address*</div>
          <input
            type="text"
            placeholder="Thuc"
            value="Khem Beach, An Thoi, Phu Quoc, Kien Giang."
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className="flex flex-row items-center mb-10">
          <div className="w-[198px] text-gray-700">Type</div>
          <select
            name=""
            id=""
            className=" text-gray-800 px-4 py-3 bg-[#F8F8F8] border-b border-gray-500 border-none focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          >
            <option value="">Spa Resort</option>
            <option value="">Moutaint Resort</option>
            <option value="">Sea Resort</option>
          </select>
        </div>
        <div className="flex flex-row items-center mb-14">
          <div className="w-[198px] text-gray-700">Wifi</div>
          <div className="flex flex-row ">
            <select className=" text-gray-800 mr-[20px] px-4 py-3 bg-[#F8F8F8] border-b border-gray-500 border-none focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent">
              <option value="">Wifi Available</option>
              <option value="">None</option>
            </select>
          </div>
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Max Guest*</div>
          <input
            type="email"
            placeholder="Thuc"
            value="2000"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Price*</div>
          <input
            type="email"
            placeholder="Thuc"
            value="1200$ - 2500$"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Email*</div>
          <input
            type="email"
            placeholder="Thuc"
            value="buitrithuc1008@gmail.com"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Phone*</div>
          <input
            type="email"
            placeholder="Thuc"
            value="0856597778"
            className=" text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Price*</div>
          <input
            type="email"
            placeholder="Thuc"
            value="1200$ - 2500$"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Detail*</div>
          <textarea
            className="w-full border border-gray-500 px-2 py-2"
            name=""
            id=""
            cols={50}
            rows={10}
            value="Leave your guidebooks at home and dive into the local cultures that make each destination so special. We’ll connect you with our exclusive experiences. Each trip is carefully crafted to let enjoy your vacation.
A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents."
          ></textarea>
        </div>
        <div>
          <button className="bg-[#5C98F2] px-4 py-3 mb-10 rounded-md text-white hover:bg-blue-500">
            Update Resort
          </button>
        </div>
      </div>
    </div>
  );
}
