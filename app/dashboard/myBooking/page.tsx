import getBookingHistory from "@/app/actions/getBookingHistory";
import MyBookingList from "@/app/components/dashboard/MyBookingList";
import Link from "next/link";
import React from "react";

export default async function MyBooking() {
  const historyBooking = await getBookingHistory();
  return (
    <div>
      <div>
        Dashboard {">"} <span className="text-common">My Booking</span>
      </div>
      <div>
        <MyBookingList historyBooking={historyBooking} />
      </div>
    </div>
  );
}
