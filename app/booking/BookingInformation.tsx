"use client";

import React, { Fragment, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import Input from "../components/input/Input";
import { useForm, FieldValues } from "react-hook-form";
import { AiOutlinePlusCircle } from "react-icons/ai";

const BookingInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const [guests, setGuests] = useState([
    { email: "", fullName: "", phoneNumber: "" },
  ]);

  const addGuest = () => {
    setGuests([...guests, { email: "", fullName: "", phoneNumber: "" }]);
  };

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-row items-center">
          <div className="p-3 rounded-full bg-transparent hover:bg-gray-300">
            <FiChevronLeft size={20} />
          </div>
          <div className="text-3xl font-bold">Confirm and Pay</div>
        </div>

        {/* Date and Guest */}
        <div className="flex flex-col gap-5 pt-12 pb-8 border-b border-gray-400">
          <div className="text-xl font-bold">Your booking</div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="text-base text-black font-semibold">Dates</div>
              <div className="text-gray-600">13 – 18 Dec</div>
            </div>
            <div className="text-black font-semibold underline">Edit</div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <div className="text-base text-black font-semibold">Guests</div>
              <div className="text-gray-600">1 guest</div>
            </div>
            <div className="text-black font-semibold underline">Edit</div>
          </div>
        </div>

        {/* Information guest */}
        <div className="flex flex-col pt-12 pb-8 border-b border-gray-400">
          <div className="text-xl font-bold">Guest Info</div>
          <div className="flex flex-row justify-end gap-2 cursor-pointer">
            <div className="flex flex-row items-center" onClick={addGuest}>
              <AiOutlinePlusCircle size={15} />
              <div className="text-sm font-base">Add new guest</div>
            </div>
          </div>
          {guests.map((guest, index) => (
            <div key={index} className="flex flex-col">
              <div className="pt-5 text-lg font-bold">
                {index === 0 ? "" : `Guest ${index + 1}`}
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Input
                  type="text"
                  label={`Email`}
                  id={`email${index}`}
                  register={register}
                  required
                  errors={errors}
                />
                <Input
                  type="text"
                  label={`Full Name`}
                  id={`fullName${index}`}
                  register={register}
                  required
                  errors={errors}
                />
              </div>
              <div className="grid grid-cols-1">
                <Input
                  type="text"
                  label={`Phone Number`}
                  id={`phoneNumber${index}`}
                  register={register}
                  required
                  errors={errors}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingInformation;
