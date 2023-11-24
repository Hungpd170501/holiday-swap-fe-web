import Link from 'next/link';
import React from 'react';

export default function CurrentBooking() {
  return (
    <div className="hidden md:block md:w-auto md:h-auto md:py-10">
      <div className="flex flex-row justify-between items-center">
        <div className="text-common text-[20px] font-bold pb-8">Current Booking</div>
        <Link className="text-gray-400" href="#">
          View All Booking
        </Link>
      </div>
      <div className="px-8 flex flex-row">
        <div className="flex flex-col justify-between mr-20 ">
          <div className="mb-8"> Resort Name</div>
          <Link className="text-common" href="#">
            Lak TendCam, Huyen Lak, Dak Lak
          </Link>
        </div>
        <div className="flex flex-col justify-between mr-10">
          <div>Living Date</div>
          <div className="text-common"> February 1, 2030</div>
        </div>
        <div className="flex flex-col justify-between mr-10">
          <div>Total</div>
          <div>$523.20</div>
        </div>
        <div className="flex flex-col justify-between mr-10">
          <div> Payment Status</div>
          <div>
            <div className="text-green-600">Pending</div>
          </div>
        </div>
      </div>
    </div>
  );
}
