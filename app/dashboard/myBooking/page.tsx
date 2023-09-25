import MyBookingList from "@/app/components/dashboard/MyBookingList";
import Link from "next/link";
import React from "react";

export default function MyBooking() {
  return (
    <div>
      <div>
        Dashboard {">"} <span className="text-common">My Booking</span>
      </div>
      <div>
        <MyBookingList />
      </div>
    </div>
  );
}
