import React from 'react';
import InformationBooking from './InformationBooking';
import GetBookingHistoryById from '@/app/actions/getBookingHistoryById';
import GetListUser from '@/app/actions/getListUser';
import GetListResort from '@/app/actions/getListResort';

interface IParams {
  bookingId: any;
}

export default async function InformationBookingPage({ params }: { params: IParams }) {
  const booking = await GetBookingHistoryById(params);
  const ownerUser = await GetListUser({ email: booking?.ownerEmail });
  const ownerResort = await GetListResort('0', { resortName: booking?.resortName });
  return <InformationBooking booking={booking} ownerUser={ownerUser} ownerResort={ownerResort} />;
}
