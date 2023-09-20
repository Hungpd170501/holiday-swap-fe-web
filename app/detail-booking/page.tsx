import Container from "../components/Container";
import React from "react";
import DetailBookingStep from "../components/detail-booking/DetailBookingStep";

export default function DetailBooking() {
  return (
    <div>
      <div className="bg-[#F5F5F7] flex items-center justify-center ">
        <div className="text-5xl  pt-[250px] pb-[70px]">Payment Page</div>
      </div>
      <Container>
        <div>
          <DetailBookingStep />
        </div>
      </Container>
    </div>
  );
}
