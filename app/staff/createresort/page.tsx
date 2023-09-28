import UploadImageResortCreate from "@/app/components/staff/UploadImageResortCreate";
import React from "react";

export default function CreateResort() {
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
        <UploadImageResortCreate />
      </div>
      <div className="w-[700px]">
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Resort Name*</div>
          <input
            type="text"
            placeholder="Resort Name"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Address*</div>
          <input
            type="text"
            placeholder="Address"
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
            <option value="">-</option>
            <option value="">Spa Resort</option>
            <option value="">Moutaint Resort</option>
            <option value="">Sea Resort</option>
          </select>
        </div>
        <div className="flex flex-row items-center mb-14">
          <div className="w-[198px] text-gray-700">Wifi</div>
          <div className="flex flex-row ">
            <select className=" text-gray-800 mr-[20px] px-4 py-3 bg-[#F8F8F8] border-b border-gray-500 border-none focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent">
              <option value="">-</option>
              <option value="">Wifi Available</option>
              <option value="">None</option>
            </select>
          </div>
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Max Guest*</div>
          <input
            type="email"
            placeholder="Max Guest"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Price*</div>
          <input
            type="email"
            placeholder="Price"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Email*</div>
          <input
            type="email"
            placeholder="Email"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>
        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Phone*</div>
          <input
            type="email"
            placeholder="Phone"
            className=" text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div>

        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Detail*</div>
          <textarea
            className="w-full border border-gray-500 px-2 py-2"
            name=""
            id=""
            cols="50"
            rows="10"
          ></textarea>
        </div>
        <div>
          <button className="bg-[#5C98F2] px-4 py-3 mb-10 rounded-md text-white hover:bg-blue-500">
            Create Resort
          </button>
        </div>
      </div>
    </div>
  );
}
