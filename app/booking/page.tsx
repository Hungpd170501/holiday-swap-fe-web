import React from "react";
import Booking from "./Booking";
import GetCurrentUser from "../actions/getCurrentUser";

export default async function BookingPage() {
  const currentUser = await GetCurrentUser();
  return <Booking currentUser={currentUser} />;
}
