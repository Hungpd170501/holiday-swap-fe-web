"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../input/Input";
import Modal from "./Modal";
import { toast } from "react-hot-toast";
import useCreatePlanModal from "@/app/hooks/useCreatePlanModal";
import { Select, Textarea, Label, FileInput } from "flowbite-react";
import useAxiosAuthClient from "@/app/hooks/useAxiosAuthClient";
import { useSession } from "next-auth/react";
import axios from "axios";
import useCreateOwnershipModal from "@/app/hooks/useCreateOwnershipModal";
import { format } from "date-fns";
import CalendarAparment from "@/app/apartment/CalendarAparment";

export const priceType = [
  {
    id: 1,
    priceType: "ONE_TIME",
  },
  {
    id: 2,
    priceType: "RECURRING",
  },
];

export const planPriceInterval = [
  {
    id: 1,
    planPriceInterval: "MONTHLY",
  },
  {
    id: 2,
    planPriceInterval: "YEARLY",
  },
  {
    id: 3,
    planPriceInterval: "LIFETIME",
  },
  {
    id: 4,
    planPriceInterval: "NONE",
  },
];

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  key: "selection",
};

export default function ModalCreateOwnership() {
  const { data: session } = useSession();
  const router = useRouter();
  const createOwnershipModal = useCreateOwnershipModal();
  const dataResort = createOwnershipModal.dataResort;
  const currentUser = createOwnershipModal.currentUser;
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any[]>([]);
  const [resortId, setResortId] = useState();
  const [properties, setProperties] = useState<any[]>([]);
  const [propertyValue, setPropertyValue] = useState();
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [startYear, setStartYear] = useState(new Date());
  const [endYear, setEndYear] = useState(new Date());
  const axiosAuthClient = useAxiosAuthClient();

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return null;
    } else {
      const selectedFile = Array.from(e.target.files);
      if (selectedFile) {
        setFile(selectedFile);
      }
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const setCustomeValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleChangeResortId = (value: any) => {
    setResortId(value);
  };

  const handleChangePropertyValue = (value: any) => {
    setPropertyValue(value);
  };

  const handleVisibleCalendar = () => {
    setVisibleCalendar(!visibleCalendar);
  };

  useEffect(() => {
    const fetchProperty = async () => {
      if (resortId) {
        const data = await axios.get(
          `https://holiday-swap.click/api/v1/properties?resortId=${resortId}&numberGuest=0&pageNo=0&pageSize=10&sortBy=id`
        );
        setProperties(data.data.content);
      }
    };
    fetchProperty();
  }, [resortId]);

  useEffect(() => {
    setCustomeValue("propertyId", propertyValue);
  }, [propertyValue, file]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const formData = new FormData();

    const coOwnerId = {
      propertyId: data.propertyId as number,
      userId: currentUser.userId as number,
      roomId: data.roomId,
    };
    const coOwner = {
      endTime: "2028-01-01",
      startTime: "2023-01-01",
      type: "RIGHT_TO_USE",
      timeFrames: [
        {
          weekNumber: data.weekNumber as number,
        },
      ],
    };
    const coOwnerIdBlob = new Blob([JSON.stringify(coOwnerId)], {
      type: "application/json",
    });
    const coOwnerBlob = new Blob([JSON.stringify(coOwner)], {
      type: "application/json",
    });
    formData.append("coOwnerId", coOwnerIdBlob);
    formData.append("coOwner", coOwnerBlob);
    file.forEach((element) => {
      formData.append("contractImages", element);
    });

    const config = {
      headers: { Authorization: `Bearer ${session?.user.access_token}` },
    };

    axiosAuthClient
      .post("https://holiday-swap.click/api/co-owners", formData)
      .then(() => {
        toast.success("Create ownership success!");
        createOwnershipModal.onClose();

        reset();
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label value="Select resort" />
          <Select
            id="resortId"
            // value={resortId}
            onChange={handleChangeResortId}
          >
            {dataResort?.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.resortName}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <Label value="Select property" />
          <Select
            id="propertyId"
            value={propertyValue}
            onChange={handleChangePropertyValue}
          >
            {properties?.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.propertyName}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <div onClick={handleVisibleCalendar} className="grid grid-cols-1 gap-4">
        <div
          className={`grid grid-cols-2 rounded-lg  ${
            visibleCalendar ? "border-2 border-black" : "border border-gray-600"
          } `}
        >
          <div className={`p-2 border-r border-gray-600`}>
            <div className="text-xs">Start year</div>
            <input
              type="number"
              min={new Date().getFullYear()}
              max={new Date().getFullYear() + 25}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const selectedYear = parseInt(e.target.value);
                const newStartDate = new Date(selectedYear, 0, 1); // Month is 0-based, so 0 represents January
                setStartYear(newStartDate);
              }}
              className="border-0 text-base text-gray-600 focus:outline-none w-full"
              value={startYear.getFullYear()}
            />
          </div>
          <div className={`p-2 border-gray-600  `}>
            <div className="text-xs">End year</div>
            <input
              type="number"
              min={new Date().getFullYear()}
              max={new Date().getFullYear() + 25}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const selectedYear = parseInt(e.target.value);
                const newEndDate = new Date(selectedYear, 0, 1); // Month is 0-based, so 0 represents January
                setEndYear(newEndDate);
              }}
              className="border-0 text-base text-gray-600 focus:outline-none w-full"
              value={endYear.getFullYear()}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          id="weekNumber"
          label="Week number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="roomId"
          label="Room Number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
      <div className="grid grid-cols-1">
        <label>Contract Image</label>
        <FileInput
          {...register("contractImages", {
            required: "Recipe picture is required",
          })}
          id="contractImages"
          onChange={handleChangeImage}
          multiple
        />
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={createOwnershipModal.isOpen}
      title="Create Ownership"
      actionLabel="Submit"
      onClose={createOwnershipModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}
