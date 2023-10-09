"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../Heading";
import Input from "../input/Input";
import Modal from "./Modal";
import { toast } from "react-hot-toast";
import useCreatePlanModal from "@/app/hooks/useCreatePlanModal";
import { Select, Option, Textarea } from "@material-tailwind/react";
import useAxiosAuthClient from "@/app/hooks/useAxiosAuthClient";

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

export default function ModalCreatePlan() {
  const router = useRouter();
  const createPlanModal = useCreatePlanModal();
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<any[]>([]);
  const axiosAuthClient = useAxiosAuthClient();

  const handleChangeImage = (e: any) => {
    if (!e.target.files) {
      return null;
    } else {
      setFile(e.target.files[0]);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>();

  const setCustomeValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleChangePriceType = (e: ChangeEvent<HTMLSelectElement>) => {
    setCustomeValue("priceType", e);
  };

  const handleChangePlanPriceInterval = (e: ChangeEvent<HTMLSelectElement>) => {
    setCustomeValue("planPriceInterval", e);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const formData = new FormData();

    const planName = data.planName;
    const description = data.description;
    const price = data.price;
    const priceType = data.priceType;
    const planPriceInterval = data.planPriceInterval;

    formData.append("planName", data.planName);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("priceType", data.priceType);
    formData.append("planPriceInterval", data.planPriceInterval);
    formData.append("image", file as any);

    axiosAuthClient
      .post("/plan", formData)
      .then(() => {
        toast.success("Create plan success");
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = useCallback(() => {
    createPlanModal.onClose();
  }, [createPlanModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          id="planName"
          label="Plan Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="price"
          label="Price"
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Select
          id="priceType"
          onChange={() => handleChangePriceType}
          label="Price Type"
          value=""
        >
          {priceType.map((item) => (
            <Option key={item.id} value={item.priceType}>
              {item.priceType}
            </Option>
          ))}
        </Select>
        <Select
          onChange={() => handleChangePlanPriceInterval}
          label="Plan Price Interval"
          id="planPriceInterval"
          value=""
        >
          {planPriceInterval.map((item) => (
            <Option key={item.id} value={item.planPriceInterval}>
              {item.planPriceInterval}
            </Option>
          ))}
        </Select>
      </div>
      <div className="grid grid-cols-1">
        <input
          {...register("image", {
            required: "Recipe picture is required",
          })}
          type="file"
          id="image"
          onChange={handleChangeImage}
        />
      </div>
      <div className="grid grid-cols-1">
        <div className="w-full">
          <Textarea
            label="Description"
            id="description"
            {...register("description")}
          />
        </div>
      </div>
    </div>
  );

  //   const footerContent = (
  //     <div className="grid grid-cols-1">
  //       <hr />
  //       <div className="text-neutral-500 text-center mt-4 font-light">
  //         <div className="flex flex-row justify-center items-center gap-2">
  //           <div>
  //             First time using{" "}
  //             <span className="font-bold text-black">
  //               Holiday<span className="text-common">Swap</span>
  //             </span>
  //             ?
  //           </div>
  //           <div
  //             onClick={toggle}
  //             className="text-neutral-800 cursor-pointer hover:underline"
  //           >
  //             Create an account
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );

  return (
    <Modal
      disabled={isLoading}
      isOpen={createPlanModal.isOpen}
      title="Create Plan"
      actionLabel="Submit"
      onClose={createPlanModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
}
