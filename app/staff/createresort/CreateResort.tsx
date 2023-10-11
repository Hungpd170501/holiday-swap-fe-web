"use client";

import UploadImageResortCreate from "@/app/components/staff/UploadImageResortCreate";
import React, { useState } from "react";
import InputCreateResort from "./InputCreateResort";
import {
  FieldValues,
  useForm,
  useFieldArray,
  SubmitHandler,
  Field,
  Controller,
} from "react-hook-form";
import InputCreatePropertyType from "./InputCreatePropertyType";
import InputAmenitiesType from "./InputAmenitiesType";
import useAxiosAuthClient from "@/app/hooks/useAxiosAuthClient";
import { Textarea } from "@material-tailwind/react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface CreateResortProps {
  amenitiesArray?: any;
  propertyTypesArray?: any;
}

const CreateResort: React.FC<CreateResortProps> = ({
  amenitiesArray,
  propertyTypesArray,
}) => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any[]>([]);
  const router = useRouter();

  const handleChange = (e: any) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles) {
      setFile(selectedFiles);
    }
  };

  const axiosAuthClient = useAxiosAuthClient();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();

  const setCustomeValue = (id: string, value: any[]) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleAmenitiesChange = (newAmenities: any[]) => {
    setCustomeValue("amenities", newAmenities);
  };

  const handlePropertiesChange = (newProperties: any[]) => {
    setCustomeValue("propertyTypes", newProperties);
  };

  const handleImageChange = (newImage: any[]) => {
    setCustomeValue("resortImage", newImage);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const formData = new FormData();

    const requestData = {
      resortName: data.resortName,
      resortDescription: data.resortDescription,
      locationId: null,
      amenities: data.amenities,
      propertyTypes: data.propertyTypes,
    };
    const resortDataBlob = new Blob([JSON.stringify(requestData)], {
      type: "application/json",
    });
    formData.append("resort", resortDataBlob);
    file.forEach((element) => {
      formData.append("resortImage", element);
    });
    const config = {
      headers: { Authorization: `Bearer ${session?.user.access_token}` },
    };

    axios
      .post("https://holiday-swap.click/api/v1/resorts", formData, config)
      .then(() => {
        toast.success("Create resort success");
        reset();
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div>
        <span className="hover:underline" onClick={() => router.push("/staff")}>
          Dashboard
        </span>{" "}
        {">"} <span className="text-common">Create Resort</span>
      </div>
      <div className=" w-[600px] py-10">
        <div className="flex flex-row items-center w-full "></div>
      </div>
      <div className="mb-14">
        <div className="mb-3">Upload Image*</div>
        {/* <UploadImageResortCreate handleImageChange={handleImageChange} /> */}
        <div>
          <input
            {...register("resortImage", {
              required: "Recipe picture is required",
            })}
            type="file"
            id="resortImage"
            multiple
            onChange={handleChange}
          />
        </div>
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

        <div className=" flex flex-row mb-14">
          <div className="w-[277px] text-gray-700">Description</div>
          <Textarea
            label="Description*"
            {...register("resortDescription")}
            id="resortDescription"
            disabled={isLoading}
            required
          />
        </div>

        <div className="flex flex-row mb-10">
          <InputCreatePropertyType
            propertyTypesResort={propertyTypesArray}
            handlePropertiesChange={handlePropertiesChange}
          />
        </div>
        <div className="flex flex-row mb-14">
          <InputAmenitiesType
            amenities={amenitiesArray}
            handleAmenitiesChange={handleAmenitiesChange}
          />
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
          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-[#5C98F2] px-4 py-3 mb-10 rounded-md text-white hover:bg-blue-500"
          >
            Create Resort
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateResort;
