"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import InputCreateResort from "../createresort/InputCreateResort";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import useAxiosAuthClient from "@/app/hooks/useAxiosAuthClient";
import toast from "react-hot-toast";

const CreateProperty = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const axiosAuthClient = useAxiosAuthClient();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      propertyTypeName: "",
      propertyTypeDescription: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axiosAuthClient
      .post("/property-types", data)
      .then(() => {
        toast.success("Create Property Success!");
        reset();
      })
      .catch(() => {
        toast.error("Something went wrong!");
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
        {">"} <span className="text-common">Create Property</span>
      </div>
      <div className=" w-[600px] py-10">
        <div className="flex flex-row items-center w-full "></div>
      </div>

      <div className="w-[700px]">
        <div className=" flex flex-row mb-14">
          <InputCreateResort
            label="Property Name*"
            placeholder="Property Name"
            register={register}
            errors={errors}
            id="propertyTypeName"
            disabled={isLoading}
            required
          />
        </div>

        <div className=" flex flex-row mb-14">
          <InputCreateResort
            label="Property Description*"
            placeholder="Property Description"
            register={register}
            errors={errors}
            id="propertyTypeDescription"
            disabled={isLoading}
            required
          />
        </div>

        <div>
          <button
            disabled={isLoading}
            onClick={handleSubmit(onSubmit)}
            className="bg-[#5C98F2] px-4 py-3 mb-10 rounded-md text-white hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProperty;
