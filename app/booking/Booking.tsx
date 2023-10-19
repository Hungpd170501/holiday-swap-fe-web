"use client";

import React, { useState } from "react";
import Container from "../components/Container";
import Calendar from "../components/input/Calendar";
import SearchBooking from "./SearchBooking";
import ListRoom from "./ListRoom";
import BookingPriceCard from "./BookingPriceCard";

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
  }

  return (
    <Container>
      <div className="py-32 grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <SearchBooking handleDateRange={handleDateRange}  />
          <div className="py-7">
            <ListRoom handleChooseRoomProp={handleChooseRoomProp} />
          </div>
        </div>

        {isVisible ? (
          <div className="col-span-1">
            <BookingPriceCard data={selectedRoomData} roomId={roomId} dateRange={dateRange} currentUser={currentUser} />
          </div>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};

export default Booking;
