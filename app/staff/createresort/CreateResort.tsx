"use client";

import UploadImageResortCreate from "@/app/components/staff/UploadImageResortCreate";
import React, { useState } from "react";
import InputCreateResort from "./InputCreateResort";
import { FieldValues, useForm } from "react-hook-form";
import InputCreatePropertyType from "./InputCreatePropertyType";
import InputAmenitiesType from "./InputAmenitiesType";

interface CreateResortProps {
  amenities?: any;
}

const CreateResort: React.FC<CreateResortProps> = ({ amenities }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      resortRequest: {
        resortName: "",
        locationId: 0,
        ameniteis: [],
        propertyTypes: [],
      },
      resortImage: [],
    },
  });
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
          <InputCreateResort
            label="Resort Name*"
            placeholder="Resort Name"
            register={register}
            errors={errors}
            id="resortName"
            disabled={isLoading}
            required
          />
        </div>
        {/* <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Address*</div>
          <input
            type="text"
            placeholder="Address"
            className="text-gray-800 px-1 w-full bg-[#F8F8F8] border-b border-gray-500 focus:outline-none focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent"
          />
        </div> */}
        <div className="flex flex-row items-center mb-10">
          <InputCreatePropertyType />
        </div>
        <div className="flex flex-row items-center mb-14">
          <InputAmenitiesType />
        </div>

        {/* <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Detail*</div>
          <textarea
            className="w-full border border-gray-500 px-2 py-2"
            name=""
            id=""
            cols={50}
            rows={10}
          ></textarea>
        </div> */}
        <div>
          <button className="bg-[#5C98F2] px-4 py-3 mb-10 rounded-md text-white hover:bg-blue-500">
            Create Resort
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateResort;
