"use client";

import React, { useState } from "react";
import useAxiosAuthClient from "../hooks/useAxiosAuthClient";
import useLoginModal from "../hooks/useLoginModal";
import toast from "react-hot-toast";

interface BookingPriceCardProps {
  data: any;
  roomId: any;
  dateRange: any;
  currentUser?: any;
}
const BookingPriceCard: React.FC<BookingPriceCardProps> = ({
  data,
  roomId,
  dateRange,
  currentUser,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const axiosAuthClient = useAxiosAuthClient();
  const loginModal = useLoginModal();

  const handleBooking = () => {
    setIsLoading(true);

    if (!currentUser) {
      loginModal.onOpen();
      setIsLoading(false);
      return null;
    }

    const config = { headers: { "Content-type": "application/json" } };

    const data = {
      propertyId: 1,
      roomId: roomId,
      userId: currentUser.userId,
      checkInDate: new Date(dateRange.startDate),
      checkOutDate: new Date(dateRange.endDate),
    };

    axiosAuthClient
      .post(`https://holiday-swap.click/api/booking/create`, data, config)
      .then(() => {
        toast.success("Booking success!");
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-white p-4 flex flex-col rounded-md">
      <div className="border-b border-dotted border-gray-500">
        <div className="font-bold text-lg py-6">Price Details</div>

        <div className="flex flex-col py-4">
          <div className="flex flex-row justify-between items-center">
            <div className="text-base font-normal">1 room x 1 night</div>
            <div className="text-base font-normal">
              {data.pricePerNight} point
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center py-4">
        <button
          disabled={isLoading}
          onClick={handleBooking}
          type="button"
          className="bg-common hover:bg-blue-500 w-full p-3 rounded-md font-bold text-white text-lg"
        >
          Booking
        </button>
      </div>
    </div>
  );
};

export default BookingPriceCard;
