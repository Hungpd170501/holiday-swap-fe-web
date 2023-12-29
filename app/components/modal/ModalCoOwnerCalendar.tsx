'use client';

import useAparmentAmenitiesModal from '@/app/hooks/useApartmentAmenitiesModal';
import React, { ChangeEventHandler, useEffect, useState } from 'react';
import ModalBaseDetail from './ModalBaseDetail';
import Image from 'next/image';
import { Button, Calendar, Input, Modal, Space, message } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import { addDays, subDays } from 'date-fns';
import type { Dayjs } from 'dayjs';

import type { CalendarProps } from 'antd';
import { DateRange, DateRangePicker } from 'react-date-range';
import axios from 'axios';
import getAllByCoOwnerIdAndBetweenTimeAndTime from '@/app/actions/getAvailableTimesHasCreatedByCoOwnerId';
import getAvailableTimesHasCreatedByCoOwnerId from '@/app/actions/getAvailableTimesHasCreatedByCoOwnerId';
import getTimeHasBookedByCoOwnerId from '@/app/actions/getTimeHasBookedByCoOwnerID';

const initialDate = {
  startDate: new Date(),
  endDate: new Date(new Date().getTime() + 24 * 1000 * 1000),
  key: 'selection',
};
interface IDate {
  checkIn: string;
  checkOut: string;
}

const ModalCoOwnerCalendar = (props: any) => {
  const [coOwnerId, setCoOwnerId] = useState<number>(props.coOwnerId);
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [pricePerNight, setPricePerNight] = useState<string>();
  const [timesHasCreated, setTimesHasCreated] = useState<IDate[]>([]);
  const [timesHasBooked, setTimesHasBooked] = useState<IDate[]>([]);
  const [timesDisable, setTimesDisable] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(initialDate);
  const [arrayTimeDisAble, setArrayTimeDisAble] = useState<IDate[]>([
    { checkIn: '', checkOut: '' },
  ]);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const createAvailableTime = () => {
    let body = JSON.stringify({
      startTime: startTime,
      endTime: endTime,
      pricePerNight: pricePerNight,
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://holiday-swap.click/api/v1/available-times/${coOwnerId}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(response);
        props.fetchAvailableTimeByCoOwnerId();
        setOpen(false);
        message.success('Create success!.');
      })
      .catch((error) => {
        message.error(error.response.data.message);
        console.log(error);
      });
  };

  const handleDateChange = (value: any) => {};
  // const fetchAvailableTimeHasCreatedByCoOwnerId = async () => {
  //   var avCreated = await getAvailableTimesHasCreatedByCoOwnerId({
  //     coOwnerId: coOwnerId,
  //   });
  //   const rs = avCreated.map((element: any) => {
  //     const startDate = element.startTime;
  //     const endDate = element.endTime;
  //     const obj = { checkIn: startDate, checkOut: endDate };
  //     return obj;
  //   });
  //   setTimesHasCreated(rs);
  // };
  // const fetchTimeHassBookedByCoOwnerId = async () => {
  //   var timesHasBooked = await getTimeHasBookedByCoOwnerId({
  //     coOwnerId: coOwnerId,
  //   });
  //   setTimesHasBooked(timesHasBooked);
  // };
  const fetchTimesDisable = async () => {
    var avCreated = await getAvailableTimesHasCreatedByCoOwnerId({
      coOwnerId: coOwnerId,
    });
    const rs = avCreated.map((element: any) => {
      const startDate = new Date(element.startTime);
      const endDate = new Date(element.endTime);
      const obj = { checkIn: startDate, checkOut: endDate };
      return obj;
    });
    var timesHasBooked = await getTimeHasBookedByCoOwnerId({
      coOwnerId: coOwnerId,
    });
    const rs2 = timesHasBooked.map((element: any) => {
      const startDate = new Date(element.checkIn);
      const endDate = new Date(element.checkOut);
      const obj = { checkIn: startDate, checkOut: endDate };
      return obj;
    });
   const rs3 =  rs.concat(rs2);
    setTimesDisable(rs3);
  };
  useEffect(() => {
    // fetchAvailableTimeHasCreatedByCoOwnerId();
    // fetchTimeHassBookedByCoOwnerId();
    fetchTimesDisable();
  }, []);
  useEffect(() => {
    // let checkDateInBoundary: Date[] = checkDateIsInBoundary(arrayTimeDisAble);
    // let dateDiffGreaterTwo = dateDiffIsGreaterTwo(arrayTimeDisAble);
    // let dateConsecutive = dateIsConsecutive(arrayTimeDisAble);
    // setTimesDisable([...checkDateInBoundary, ...dateDiffGreaterTwo, ...dateConsecutive]);
    // console.log('useEffect timeHasBooked');
  }, [timesHasCreated]);
  //#region function disable date
  const checkDateIsInBoundary = (array: IDate[]) => {
    let arr: Date[] = [];
    array.forEach((element) => {
      let checkIn = new Date(element.checkIn);
      checkIn.setHours(0, 0, 0, 0);
      let checkOut = new Date(element.checkOut);
      checkOut.setHours(0, 0, 0, 0);
      if (checkIn.getTime() == date.startDate.getTime()) {
        arr.push(checkIn);
      }
      if (checkOut.getTime() == date.endDate.getTime()) {
        arr.push(checkOut);
      }
    });
    return arr;
  };

  const dateDiffIsGreaterTwo = (array: IDate[]) => {
    let arr: Date[] = [];
    array.forEach((element) => {
      let checkIn = new Date(element.checkIn);
      let checkOut = new Date(element.checkOut);
      const timeDifference = checkOut.getTime() - checkIn.getTime();
      const daysDifference = timeDifference / (1000 * 3600 * 24);

      if (daysDifference > 1) {
        let theDateStart = checkIn;
        theDateStart = new Date(theDateStart.getTime() + 24 * 60 * 60 * 1000);
        while (theDateStart.getTime() < checkOut.getTime()) {
          arr.push(theDateStart);
          theDateStart = new Date(theDateStart.getTime() + 24 * 60 * 60 * 1000);
        }
      }
    });
    return arr;
  };

  const dateIsConsecutive = (array: IDate[]) => {
    let arr: Date[] = [];
    array.forEach((element) => {
      let checkIn = new Date(element.checkIn);
      let checkOut = new Date(element.checkOut);
      for (let index = 1; index < array.length; index++) {
        const nextCheckIn = new Date(array[index].checkIn);
        const nextCheckOut = new Date(array[index].checkOut);
        if (checkOut.getTime() == nextCheckIn.getTime()) {
          arr.push(nextCheckIn);
        } else if (checkIn.getTime() == nextCheckOut.getTime()) {
          arr.push(nextCheckOut);
        }
      }
    });
    return arr;
  };

  // const func4 = (ranges: any, array: IDate[]) => {
  //   const { selection } = ranges;
  //   const startDate = selection.startDate;

  //   const endDate = selection.endDate;
  //   let result: Date[] = [];
  //   array.forEach((element) => {
  //     let checkIn = new Date(element.checkIn);
  //     checkIn.setHours(0, 0, 0, 0);
  //     let checkOut = new Date(element.checkOut);
  //     checkOut.setHours(0, 0, 0, 0);

  //     if (startDate.getTime() <= checkIn.getTime()) {
  //       result.push(checkOut);
  //       // setDateOut(result);
  //     } else if (startDate.getTime() >= checkIn.getTime()) {
  //       result.push(checkIn);
  //       // setDateOut(result);
  //     }
  //   });
  //   let x: Date[] = dateDiffIsGreaterTwo(arrayTimeDisAble);

  //   x.forEach((e) => {
  //     result.push(new Date(e));
  //   });
  //   result.concat(x);

  //   setDateOut(result);
  // };
  //#endregion
  return (
    <>
      <Space>
        <Button type="link" onClick={showModal} icon={<ExportOutlined />}>
          Create new public times
        </Button>
      </Space>
      <Modal
        open={open}
        title="Create new public time "
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        // width={750}
      >
        <div className="justify-center">
          <DateRange
            dateDisplayFormat="yyyy-MM-dd"
            // showDateDisplay={false}
            // showMonthArrow={false}
            // showMonthAndYearPickers={false}
            // disabledDates={timesDisable}
            rangeColors={['#5C98F2']}
            ranges={[date]}
            date={new Date()}
            onChange={(value: any) => {
              setDate(value.selection);
              // handleDateChange(value);
              const offset = new Date().getTimezoneOffset();
              var startDate = new Date(value.selection.startDate.getTime() - offset * 60 * 1000);
              var endDate = new Date(value.selection.endDate.getTime() - offset * 60 * 1000);
              setStartTime(startDate.toISOString().split('T')[0]);
              setEndTime(endDate.toISOString().split('T')[0]);
            }}
            minDate={new Date()}
            maxDate={
              props.coOwner.endTime
                ? new Date(props.coOwner.endTime)
                : new Date(new Date().setFullYear(new Date().getFullYear() + 50))
            }
            disabledDay={(date) => {
              return timesDisable.some((d: any) => {
                const checkInDate = new Date(d.checkIn);
                const checkOutDate = new Date(d.checkOut);
                return date >= checkInDate && date <= checkOutDate;
              });
            }}
            weekStartsOn={1}
            weekdayDisplayFormat={'EEEEEE'}
            months={2}
            direction="horizontal"
            className="1px w-full"
          />
          <Input
            placeholder="Input price per night"
            className="rounded"
            type="number"
            min={1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPricePerNight(e.target.value);
            }}
          />
          <div className="flex justify-center pt-3">
            <button
              className="border rounded-lg border-curent h-10 text-white bg-[#5C98F2] hover:bg-sky-700 justify-self-center w-20"
              type="button"
              onClick={() => createAvailableTime()}
            >
              Create
            </button>
            <button
              className="border rounded-lg border-curent h-10 text-white bg-[#5C98F2] hover:bg-sky-700 justify-self-center w-20"
              type="button"
              onClick={() => alert()}
            >
              Create
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalCoOwnerCalendar;
