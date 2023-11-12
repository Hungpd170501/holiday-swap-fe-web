'use client';

import React, { useState } from 'react';
import ApartmentDetailHeader from './ApartmentDetailHeader';
import ApartmentDetailBody from './ApartmentDetailBody';
import CalendarAparment from '../CalendarAparment';
import ApartmentBooking from './ApartmentBooking';
import { addDays, addMonths, subDays } from 'date-fns';
import ApartmentReivew from './ApartmentReivew';
import ApartmentReivewBox from './ApartmentReivewBox';
import useAparmentReviewModal from '@/app/hooks/useApartmentReviewModal';

interface ApartmentDetailProps {
  apartment?: any;
  currentUser?: any;
}

const ApartmentDetail: React.FC<ApartmentDetailProps> = ({ apartment, currentUser }) => {
  const initialDateRange = {
    startDate: new Date(apartment.availableTime.startTime),
    endDate: new Date(apartment.availableTime.endTime),
    key: 'selection',
  };
  const apartmentReviewModal = useAparmentReviewModal();

  const [dateRange, setDateRange] = useState(initialDateRange);
  const [apartmentAllowGuest, setApartmentAllowGuest] = useState(
    apartment.property.numberKingBeds * 2 +
      apartment.property.numberQueenBeds * 2 +
      apartment.property.numberSingleBeds +
      apartment.property.numberDoubleBeds * 2 +
      apartment.property.numberTwinBeds * 2 +
      apartment.property.numberFullBeds * 2 +
      apartment.property.numberSofaBeds +
      apartment.property.numberMurphyBeds
  );

  const [dateRangeDefault, setDateRangeDefault] = useState(initialDateRange);

  const getDatesOutsideDateRange = (dateRange: any) => {
    const startDate = dateRange.startDate;
    const endDate = dateRange.endDate;

    const startDateOutsideDateRange = addDays(endDate, 1);
    const endDateOutsideDateRange = subDays(addMonths(startDate, 30), 1);

    const datesOutsideDateRange = [];
    for (
      let i = startDateOutsideDateRange.getTime();
      i <= endDateOutsideDateRange.getTime();
      i += 24 * 60 * 60 * 1000
    ) {
      datesOutsideDateRange.push(new Date(i));
    }

    return datesOutsideDateRange;
  };

  const [dateOut, setDateOut] = useState(getDatesOutsideDateRange(dateRangeDefault));

  const handleChangeDateRange = (value: any) => {
    setDateRange(value.selection);
  };

  return (
    <div className="lg:mx-1 xl:mx-16 py-20">
      <div className="flex flex-col">
        <ApartmentDetailHeader apartment={apartment} />
      </div>

      <div className="flex flex-col md:grid md:grid-cols-12 md:gap-16 md:pb-14 xl:py-10 border-b border-gray-500">
        <div className="col-span-8">
          <ApartmentDetailBody
            apartment={apartment}
            dateOut={dateOut}
            dateRange={dateRange}
            dateRangeDefault={dateRangeDefault}
            handleChangeDateRange={handleChangeDateRange}
          />
        </div>
        <div className="col-span-4 sticky top-0 h-full">
          <ApartmentBooking
            currentUser={currentUser}
            apartment={apartment}
            dateOut={dateOut}
            dateRange={dateRange}
            dateRangeDefault={dateRangeDefault}
            handleChangeDateRange={handleChangeDateRange}
            apartmentAllowGuest={apartmentAllowGuest}
          />
        </div>
      </div>

      <div className="py-20 border-b border-gray-500">
        <ApartmentReivew />
      </div>

      <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <ApartmentReivewBox />
        <ApartmentReivewBox />
        <ApartmentReivewBox />
        <ApartmentReivewBox />
        <ApartmentReivewBox />
        <ApartmentReivewBox />

        <div className="">
          <button
            onClick={apartmentReviewModal.onOpen}
            type="button"
            className="text-center border border-slate-700 rounded-lg text-xl py-3 px-6 hover:bg-gray-100 transition-all duration-300 transform active:scale-95"
          >
            Show all 39 reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetail;
