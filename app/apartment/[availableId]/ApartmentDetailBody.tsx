"use client";

import useAparmentAmenitiesModal from "@/app/hooks/useApartmentAmenitiesModal";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CalendarAparment from "../CalendarAparment";
import {
  addDays,
  addMonths,
  differenceInDays,
  format,
  isAfter,
  isBefore,
  subDays,
} from "date-fns";
import GoogleMapReact from 'google-map-react-concurrent';
import { useDateRange } from "../DateRangeContext";

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

  console.log("Check date range default", dateRangeDefault)

  return (
    <div className="w-full py-4 flex flex-col">
      {/* Room host by */}
      <div className="flex flex-row gap-5 border-b border-gray-400 py-8">
        <div className="p-6 gap-2 border border-gray-500 rounded-lg flex flex-row items-center justify-center">
          <Image
            src="/images/icons/bed-room.png"
            alt="icon"
            width={25}
            height={25}
          />
          <div>Single bed</div>
        </div>

        <div className="p-6 gap-2 border border-gray-500 rounded-lg flex flex-row items-center justify-center">
          <Image
            src="/images/icons/bath-room.png"
            alt="icon"
            width={25}
            height={25}
          />
          <div>Private bath room</div>
        </div>

        <div className="p-6 gap-2 border border-gray-500 rounded-lg flex flex-row items-center justify-center">
          <Image
            src="/images/icons/bed-room.png"
            alt="icon"
            width={25}
            height={25}
          />
          <div>Single bed</div>
        </div>
      </div>

      {/* Second section */}

      <div className="flex flex-col py-8 border-b border-gray-500">
        <div className="flex flex-row gap-8 py-5">
          <Image
            src="/images/icons/bed-room.png"
            alt="icon"
            width={40}
            height={25}
          />
          <div className="flex flex-col">
            <div className="font-bold text-lg">Room in a rental unit</div>
            <div className="text-gray-600 text-base font-normal">
              Your own room in a home, plus access to shared spaces.
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-8 py-5">
          <Image
            src="/images/icons/bed-room.png"
            alt="icon"
            width={40}
            height={25}
          />
          <div className="flex flex-col">
            <div className="font-bold text-lg">Self check-in</div>
            <div className="text-gray-600 text-base font-normal">
              Check yourself in with the lockbox.
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-8 py-5">
          <Image
            src="/images/icons/bed-room.png"
            alt="icon"
            width={40}
            height={25}
          />
          <div className="flex flex-col">
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
        <div className="flex flex-col p-6 rounded-lg border border-gray-500 w-48">
          <Image
            src="/images/icons/bed-room.png"
            alt="icon"
            width={40}
            height={25}
          />

          <div className="py-4">
            <div className="font-bold">Bedroom</div>
            <div>1 king bed</div>
          </div>
        </div>
      </div>

      {/* What this place offers */}
      <div className="flex flex-col py-8 border-b border-gray-500">
        <div className="text-2xl font-bold py-5">What this place offers</div>
        <div className="grid grid-cols-2 gap-5">
          {apartment.property.inRoomAmenityType[0].inRoomAmenities
            .slice(0, 10)
            .map((item: any) => (
              <div key={item.id} className="flex flex-row gap-4 items-center">
                <Image
                  src={item.inRoomAmenityLinkIcon}
                  alt="icon"
                  width={30}
                  height={30}
                />
                <div>{item.inRoomAmenityName}</div>
              </div>
            ))}
        </div>

        <div
          onClick={() => apartmentAmenitiesModal.onOpen(apartment)}
          className="py-4"
        >
          <div className="py-3 px-4 border border-gray-500 rounded-lg w-48 text-center hover:bg-blue-gray-100 hover:cursor-pointer">
            Show all aminities
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="flex flex-col py-8 border-b border-gray-500">
        <div className="py-8">
          <div className="text-2xl font-bold">
            {" "}
            {calculateNightDifference(
              dateRange.startDate,
              dateRange.endDate
            ) === 0
              ? "Select checkout date"
              : `${
                  calculateNightDifference(
                    dateRange.startDate,
                    dateRange.endDate
                  ) === 1
                    ? `${calculateNightDifference(
                        dateRange.startDate,
                        dateRange.endDate
                      )} night`
                    : `${calculateNightDifference(
                        dateRange.startDate,
                        dateRange.endDate
                      )} nights`
                }`}
          </div>
          <div className="text-gray-500">
            {new Date(dateRange.startDate).getTime() ===
            new Date(dateRange.endDate).getTime()
              ? "Add your travel dates for exact pricing"
              : `${format(
                  new Date(dateRange.startDate),
                  "dd MMM yyyy"
                )} - ${format(new Date(dateRange.endDate), "dd MMM yyyy")}`}
          </div>
        </div>
        <CalendarAparment
          value={dateRange}
          onChange={(value: any) => {
            handleChangeDateRange(value);
            setDateRangeContext(value.selection);
          }}
          className="w-[90%] !text-[1em]"
          minDate={dateRangeDefault.startDate}
          disabledDates={dateOut}
        />
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
              key: "AIzaSyDTZQ9gsIrh6G2_HtnX7pTgFS74G_VVedU",
              version: "weekly",
            }}
            defaultCenter={{
              lat: apartment.resort.latitude,
              lng: apartment.resort.longitude,
            }}
            defaultZoom={12}
            yesIWantToUseGoogleMapApiInternals>
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
