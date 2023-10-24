"use client";

import React, { useState } from "react";
import Container from "../components/Container";
import Calendar from "../components/input/Calendar";
import SearchBooking from "./SearchBooking";
import ListRoom from "./ListRoom";
import BookingPriceCard from "./BookingPriceCard";
import BookingInformation from "./BookingInformation";

interface BookingProps {
  currentUser?: any;
}

const Booking: React.FC<BookingProps> = ({ currentUser }) => {
  const [roomId, setRoomId] = useState(null);
  const [dateRange, setDateRange] = useState(null);
  const [selectedRoomData, setSelectedRoomData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleChooseRoomProp = (roomId: any, data: any, visible: any) => {
    setRoomId(roomId);
    setSelectedRoomData(data);
    setIsVisible(visible);
  };

  const handleDateRange = (dateRange: any) => {
    setDateRange(dateRange);
  };

  return (
    <Container>
      <div className="grid grid-cols-2 gap-28 py-32 px-20">
        <div className="w-full">
          <BookingInformation />
        </div>
        <div className="w-full sticky">
          <BookingPriceCard />
        </div>
      </div>
    </Container>
  );
};

export default Booking;
