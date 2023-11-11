'use client';

import useAparmentAmenitiesModal from '@/app/hooks/useApartmentAmenitiesModal';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CalendarAparment from '../CalendarAparment';
import { addDays, addMonths, differenceInDays, format, isAfter, isBefore, subDays } from 'date-fns';
import GoogleMapReact from 'google-map-react-concurrent';
import { useDateRange } from '../DateRangeContext';
import CalendarAparmentBody from '../CalendarAparmentBody';

interface ApartmentDetailBodyProps {
  apartment?: any;
  dateRange: any;
  dateOut: any;
  handleChangeDateRange: (value: any) => void;
  dateRangeDefault: any;
}

const ApartmentDetailBody: React.FC<ApartmentDetailBodyProps> = ({
  apartment,
  dateRange,
  dateOut,
  handleChangeDateRange,
  dateRangeDefault,
}) => {
  const apartmentAmenitiesModal = useAparmentAmenitiesModal();
  const { dateRangeContext, setDateRangeContext } = useDateRange();

  const calculateNightDifference = (startDate: any, endDate: any) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nightDifference = differenceInDays(end, start);
    return nightDifference;
  };

  useEffect(() => {
    setDateRangeContext(dateRange);
  }, [dateRange]);

  console.log('Check date range default', dateRangeDefault);

  return (
    <div className="w-full pb-4 flex flex-col">
      {/* Information of host */}
      <div className="flex flex-row  gap-2 border-b border-gray-400 pb-8  items-center">
        <Image
          src={apartment.user.avatar || '/images/placeholder.jpg'}
          alt="Avatar"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div className="text-bold text-lg text-black">Owner by {apartment.user.fullName}</div>
      </div>
      {/* Room host by */}
      <div className="flex flex-row  gap-5 border-b border-gray-400 pb-8 pt-8 ">
        <div className="px-1 py-3 gap-2 border border-gray-500 rounded-lg flex flex-col items-center justify-center  md:px-3 md:py-5 md:gap-2 md:border md:border-gray-500 md:rounded-lg md:flex md:flex-row md:items-center md:justify-center  lg:p-6 lg:gap-2 lg:border lg:border-gray-500 lg:rounded-lg lg:flex lg:flex-row lg:items-center lg:justify-center  xl:p-6 xl:gap-2 xl:border xl:border-gray-500 xl:rounded-lg xl:flex xl:flex-row xl:items-center xl:justify-center">
          <Image src="/images/icons/bed-room.png" alt="icon" width={25} height={25} />
          <div className="text-center">Single bed</div>
        </div>

        <div className="px-1 py-3 gap-2 border border-gray-500 rounded-lg flex flex-col items-center justify-center  md:px-3 md:py-5 md:gap-2 md:border md:border-gray-500 md:rounded-lg md:flex md:flex-row md:items-center md:justify-center  lg:p-6 lg:gap-2 lg:border lg:border-gray-500 lg:rounded-lg lg:flex lg:flex-row lg:items-center lg:justify-center  xl:p-6 xl:gap-2 xl:border xl:border-gray-500 xl:rounded-lg xl:flex xl:flex-row xl:items-center xl:justify-center">
          <Image src="/images/icons/bath-room.png" alt="icon" width={25} height={25} />
          <div className="text-center">Private bath room</div>
        </div>

        <div className="px-1 py-3 gap-2 border border-gray-500 rounded-lg flex flex-col items-center justify-center  md:px-3 md:py-5 md:gap-2 md:border md:border-gray-500 md:rounded-lg md:flex md:flex-row md:items-center md:justify-center  lg:p-6 lg:gap-2 lg:border lg:border-gray-500 lg:rounded-lg lg:flex lg:flex-row lg:items-center lg:justify-center  xl:p-6 xl:gap-2 xl:border xl:border-gray-500 xl:rounded-lg xl:flex xl:flex-row xl:items-center xl:justify-center">
          <Image src="/images/icons/bed-room.png" alt="icon" width={25} height={25} />
          <div className="text-center">Single bed</div>
        </div>
      </div>

      {/* Second section */}

      <div className="flex flex-col py-8 border-b border-gray-500">
        <div className="flex flex-row gap-8 py-5">
          <Image src="/images/icons/bed-room.png" alt="icon" width={40} height={25} />
          <div className="flex flex-col h-[50px] md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col">
            <div className="font-bold text-lg">Room in a rental unit</div>
            <div className="text-gray-600 text-base font-normal">
              Your own room in a home, plus access to shared spaces.
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-8 py-5">
          <Image src="/images/icons/bed-room.png" alt="icon" width={40} height={25} />
          <div className="flex flex-col h-[50px] md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col">
            <div className="font-bold text-lg">Self check-in</div>
            <div className="text-gray-600 text-base font-normal">
              Check yourself in with the lockbox.
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-8 py-5">
          <Image src="/images/icons/bed-room.png" alt="icon" width={40} height={25} />
          <div className="flex flex-col h-[50px] md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col">
            <div className="font-bold text-lg">Edouard is a Superhost</div>
            <div className="text-gray-600 text-base font-normal">
              Superhosts are experienced, highly rated Hosts.
            </div>
          </div>
        </div>
      </div>

      {/* Where your will sleep */}
      <div className="flex flex-col py-8 border-b border-gray-500">
        <div className="text-2xl font-bold py-5">Where you&apos;ll sleep</div>
        <div className="flex flex-col py-3 px-4 items-center justify-start rounded-lg border border-gray-500 w-[20vh] md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col ">
          <Image src="/images/icons/bed-room.png" alt="icon" width={40} height={25} />

          <div className="">
            <div className="font-bold text-center">Bedroom</div>
            <div className="text-center">{apartment.property.numberKingBeds} king bed</div>
          </div>
        </div>
      </div>

      {/* What this place offers */}
      <div className="flex flex-col py-8 border-b border-gray-500">
        <div className="text-2xl font-bold py-5">What this place offers</div>
        <div className="grid grid-cols-2 gap-5">
          {apartment.property.inRoomAmenityType[0].inRoomAmenities.slice(0, 10).map((item: any) => (
            <div key={item.id} className="flex flex-row gap-4 items-center">
              <Image src={item.inRoomAmenityLinkIcon} alt="icon" width={30} height={30} />
              <div>{item.inRoomAmenityName}</div>
            </div>
          ))}
        </div>

        <div onClick={() => apartmentAmenitiesModal.onOpen(apartment)} className="py-4">
          <div className="py-3 px-4 border border-gray-500 rounded-lg w-48 text-center hover:bg-blue-gray-100 hover:cursor-pointer">
            Show all aminities
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="flex flex-col py-8 border-b border-gray-500">
        <div className="py-8">
          <div className="text-2xl font-bold">
            {' '}
            {calculateNightDifference(dateRange.startDate, dateRange.endDate) === 0
              ? 'Select checkout date'
              : `${
                  calculateNightDifference(dateRange.startDate, dateRange.endDate) === 1
                    ? `${calculateNightDifference(dateRange.startDate, dateRange.endDate)} night`
                    : `${calculateNightDifference(dateRange.startDate, dateRange.endDate)} nights`
                }`}
          </div>
          <div className="text-gray-500">
            {new Date(dateRange.startDate).getTime() === new Date(dateRange.endDate).getTime()
              ? 'Add your travel dates for exact pricing'
              : `${format(new Date(dateRange.startDate), 'dd MMM yyyy')} - ${format(
                  new Date(dateRange.endDate),
                  'dd MMM yyyy'
                )}`}
          </div>
        </div>
        <div className="hidden md:block lg:block xl:block">
          <CalendarAparment
            value={dateRange}
            onChange={(value: any) => {
              handleChangeDateRange(value);
              setDateRangeContext(value.selection);
            }}
            className="w-[100%] !text-[1em]"
            minDate={dateRangeDefault.startDate}
            disabledDates={dateOut}
          />
        </div>
        <div className="md:hidden lg:hidden xl:hidden">
          <CalendarAparmentBody
            value={dateRange}
            onChange={(value: any) => {
              handleChangeDateRange(value);
              setDateRangeContext(value.selection);
            }}
            className="w-[100%] !text-[1em]"
            minDate={dateRangeDefault.startDate}
            disabledDates={dateOut}
          />
        </div>
      </div>
      <div className="flex flex-col py-8 border-b border-gray-500">
        <div className="text-2xl font-bold py-5">Location</div>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          {apartment.resort.locationFormattedName}
        </span>
      </div>
      <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0">
        <div className="rounded-xl overflow-hidden z-0">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDTZQ9gsIrh6G2_HtnX7pTgFS74G_VVedU',
              version: 'weekly',
            }}
            defaultCenter={{
              lat: apartment.resort.latitude,
              lng: apartment.resort.longitude,
            }}
            defaultZoom={12}
            yesIWantToUseGoogleMapApiInternals
          >
            <Marker
              key={apartment.resort.id}
              lat={apartment.resort.latitude}
              lng={apartment.resort.longitude}
              text={apartment.availableTime.pricePerNight}
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

interface MarkerProps {
  text?: number;
  lat?: number;
  lng?: number;
}

const Marker: React.FC<MarkerProps> = ({ text }) => (
  <span className="flex px-1 py-1 rounded-lg bg-white dark:bg-neutral-900 text-sm font-semibold items-center justify-center min-w-max shadow-lg hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors">
    <span>P{text}</span>
  </span>
);

export default ApartmentDetailBody;
