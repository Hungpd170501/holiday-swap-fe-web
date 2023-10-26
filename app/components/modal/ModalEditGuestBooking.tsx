"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../input/Input";
import Modal from "./Modal";
import { addDays, addMonths, format, subDays } from "date-fns";
import CalendarAparment from "@/app/apartment/CalendarAparment";
import useEditDateBookingModal from "@/app/hooks/useEditDateBookingModal";
import useEditGuestBookingModal from "@/app/hooks/useEditGuestBookingMoadal";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

export default function ModalEditGuestBooking() {
  const [isLoading, setIsLoading] = useState(false);

  const editGuestBookingModal = useEditGuestBookingModal();
  const totalGuestProps = editGuestBookingModal.totalGuest;
  const apartmentAllowGuestProps = editGuestBookingModal.apartmentAllowGuest;
  const [totalGuest, setTotalGuest] = useState(totalGuestProps);
  const [apartmentAllowGuest, setApartmentAllowGuest] = useState(
    apartmentAllowGuestProps
  );
  const [adultsGuest, setAdultsGuest] = useState(1);
  const [childrenGuest, setChildrenGuest] = useState(0);

  const handleDescreaseAdultGuest = (value: number) => {
    if (value <= 1) {
      return 1;
    }

    setAdultsGuest(value - 1);
    setTotalGuest(totalGuest - 1);
  };

  const handleInscreaseAdultGuest = (value: number) => {
    if (
      value >= apartmentAllowGuest ||
      value + childrenGuest >= apartmentAllowGuest
    ) {
      return value;
    }

    setAdultsGuest(value + 1);
    setTotalGuest(totalGuest + 1);
  };

  const handldeDescreaseChildrenGuest = (value: number) => {
    if (value <= 0) {
      return 0;
    }

    setChildrenGuest(value - 1);
    setTotalGuest(totalGuest - 1);
  };

  const handleInscreaseChildrenGuest = (value: number) => {
    if (
      value >= apartmentAllowGuest ||
      value + adultsGuest >= apartmentAllowGuest
    ) {
      return value;
    }

    setChildrenGuest(value + 1);
    setTotalGuest(totalGuest + 1);
  };

  const bodyContent = (
    <div className="h-full w-full">
      <div className="flex flex-row items-center justify-between py-3">
        <div className="flex flex-col">
          <div className="font-bold">Adults</div>
          <div className="text-xs text-gray-700">Age 18+</div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <button
            onClick={() => handleDescreaseAdultGuest(adultsGuest)}
            type="button"
          >
            <MinusCircleOutlined
              style={{
                fontSize: 30,
                color: `${adultsGuest <= 1 ? "gray" : ""}`,
              }}
            />
          </button>
          <div className="w-5 text-center">{adultsGuest}</div>
          <button
            onClick={() => handleInscreaseAdultGuest(adultsGuest)}
            type="button"
          >
            <PlusCircleOutlined
              style={{
                fontSize: 30,
                color: `${totalGuest >= apartmentAllowGuest ? "gray" : ""}`,
              }}
            />
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between py-3">
        <div className="flex flex-col">
          <div className="font-bold">Children</div>
          <div className="text-xs text-gray-700">Ages 12 - 17</div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <button
            onClick={() => handldeDescreaseChildrenGuest(childrenGuest)}
            type="button"
          >
            <MinusCircleOutlined
              style={{
                fontSize: 30,
                color: `${childrenGuest <= 0 ? "gray" : ""}`,
              }}
            />
          </button>
          <div className="w-5 text-center">{childrenGuest}</div>
          <button
            onClick={() => handleInscreaseChildrenGuest(childrenGuest)}
            type="button"
          >
            <PlusCircleOutlined
              style={{
                fontSize: 30,
                color: `${totalGuest >= apartmentAllowGuest ? "gray" : ""}`,
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={editGuestBookingModal.isOpen}
      actionLabel="Save"
      onClose={editGuestBookingModal.onClose}
      body={bodyContent}
    />
  );
}
