'use client';

import React, { Fragment, useState } from 'react';
import SearchBanner from '../components/banner/SearchBanner';
import { BiSearch } from 'react-icons/bi';
import { AiFillCalendar, AiFillCaretDown, AiOutlinePlusCircle } from 'react-icons/ai';
import { GrSubtractCircle } from 'react-icons/gr';
import CalendarAparment from './CalendarAparment';
import dayjs from 'dayjs';

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

interface SearchBarResortProps {
  listResort: any;
  handleSubmitSearchApartment: (resortId: string, dateRange: any, numberOfGuest: number) => void;
}

const SearchBarResort: React.FC<SearchBarResortProps> = ({
  listResort,
  handleSubmitSearchApartment,
}) => {
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const [visibleGuest, setVisibleGuest] = useState(false);
  const [dateRange, setDateRange] = useState(initialDateRange);
  const [resortId, setResortId] = useState<string>('');
  const [adultsGuest, setAdultsGuest] = useState<number>(1);
  const [chidrenGuest, setChildrenGuest] = useState<number>(0);
  const [totalGuest, setTotalGuest] = useState<number>(0);

  const handleVisibleCalendar = () => {
    if (visibleGuest) {
      setVisibleGuest(false);
      setVisibleCalendar(!visibleCalendar);
    } else {
      setVisibleCalendar(!visibleCalendar);
    }
  };

  const handleVisibleGuest = () => {
    if (visibleCalendar) {
      setVisibleCalendar(false);
      setVisibleGuest(!visibleGuest);
    } else {
      setVisibleGuest(!visibleGuest);
    }
  };

  const handleDescreaseAdultGuest = (value: number) => {
    if (value <= 1) {
      return 1;
    }

    setAdultsGuest(value - 1);
    setTotalGuest(totalGuest - 1);
  };

  const handleInscreaseAdultGuest = (value: number) => {
    setAdultsGuest(value + 1);
    setTotalGuest(totalGuest + 1);
  };

  const handldeDescreaseChildrenGuest = (value: number) => {
    if (value <= 0) {
      return 0;
    }

    setChildrenGuest(value - 1);
    setTotalGuest(totalGuest - 1);
  };

  const handleInscreaseChildrenGuest = (value: number) => {
    setChildrenGuest(value + 1);
    setTotalGuest(totalGuest + 1);
  };

  const handleChangeResortId = (value: any) => {
    setResortId(value);
  };

  return (
    <Fragment>
      <div className="bg-resort-banner bg-cover bg-no-repeat bg-center flex items-center py-64 justify-center relative opacity-80">
        <div className="bg-white rounded-3xl md:w-[1200px] w-auto flex-row z-20 grid md:grid-cols-4 sm:grid-cols-1 absolute mt-36">
          <div className="flex flex-col gap-2 p-6">
            <p>Resort</p>
            <select
              value={resortId}
              onChange={(e) => handleChangeResortId(e.target.value)}
              className="py-3 outline-none border-0 border-transparent focus:ring-0 rounded-b-lg"
            >
              {listResort?.content.map((item: any, index: number) => (
                <option key={item.id} value={item.id}>
                  {item.resortName}
                </option>
              ))}
            </select>
          </div>

          <div onClick={handleVisibleCalendar} className="flex flex-col gap-2 p-6">
            <p>Check-in / Check-out</p>
            <div className="flex flex-row items-center justify-between py-3">
              <div className="flex flex-row gap-2 items-center">
                <AiFillCalendar size={20} />
                <div>Sat, 16 Sep - Mon, 19 Oct</div>
              </div>

              <AiFillCaretDown size={20} />
            </div>
          </div>

          <div onClick={handleVisibleGuest} className="flex flex-col gap-2 p-6">
            <p>Guests</p>
            <div className="py-3 flex flex-row items-center justify-between">
              <div className="">
                {adultsGuest} alduts, {chidrenGuest} children
              </div>
              <AiFillCaretDown size={20} />
            </div>
          </div>

          <div
            onClick={() => {
              handleSubmitSearchApartment(resortId, dateRange, totalGuest);
              setVisibleCalendar(false);
              setVisibleGuest(false);
            }}
            className="bg-common md:rounded-r-3xl md:rounded-l-none rounded-b-3xl py-5 flex flex-col justify-center items-center text-white hover:cursor-pointer hover:bg-sky-500"
          >
            <BiSearch size={18} color="white" />
            <button>Search now</button>
          </div>
        </div>
      </div>
      {visibleCalendar ? (
        <CalendarAparment
          value={dateRange}
          className="w-[700px] absolute top-[400px] left-96 z-50"
          onChange={(value: any) => setDateRange(value.selection)}
          minDate={new Date()}
        />
      ) : (
        ''
      )}

      {visibleGuest ? (
        <div className="w-[300px] flex flex-col absolute top-[400px] left-[48rem] z-30 p-5 rounded-md bg-white border border-gray-500">
          <div className="flex flex-row items-center justify-between py-3">
            <div className="flex flex-col">
              <div className="font-bold">Adults</div>
              <div className="text-xs text-gray-700">18+ yrs</div>
            </div>
            <div className="flex flex-row gap-3">
              <button onClick={() => handleDescreaseAdultGuest(adultsGuest)} type="button">
                <GrSubtractCircle size={20} />
              </button>
              <div>{adultsGuest}</div>
              <button onClick={() => handleInscreaseAdultGuest(adultsGuest)} type="button">
                <AiOutlinePlusCircle size={20} />
              </button>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between py-3">
            <div className="flex flex-col">
              <div className="font-bold">Children</div>
              <div className="text-xs text-gray-700">2 - 17 yrs</div>
            </div>
            <div className="flex flex-row gap-3">
              <button onClick={() => handldeDescreaseChildrenGuest(chidrenGuest)} type="button">
                <GrSubtractCircle size={20} />
              </button>
              <div>{chidrenGuest}</div>
              <button onClick={() => handleInscreaseChildrenGuest(chidrenGuest)} type="button">
                <AiOutlinePlusCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default SearchBarResort;
