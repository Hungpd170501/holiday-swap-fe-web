'use client';

import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, Space, message } from 'antd';
import { ExportOutlined } from '@ant-design/icons';

import { DateRange } from 'react-date-range';
import axios from 'axios';
import GetAvailableTimesHasCreatedByCoOwnerId from '@/app/actions/getAvailableTimesHasCreatedByCoOwnerId';
import GetTimeHasBookedByCoOwnerId from '@/app/actions/getTimeHasBookedByCoOwnerId';

interface IDate {
  checkIn: string;
  checkOut: string;
}

const isDateInISOWeekNumber = (date: Date, targetWeekNumbers: number[]) => {
  const isoWeekNumber = getISOWeekNumber(date);
  return !targetWeekNumbers.includes(isoWeekNumber);
};

const getISOWeekNumber = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const tempDate = new Date(Date.UTC(year, month, day));
  const dayOfWeek = tempDate.getUTCDay() || 7;
  tempDate.setUTCDate(tempDate.getUTCDate() + 4 - dayOfWeek);
  const startOfYear: Date = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil(((+tempDate - +startOfYear) / 86400000 + 1) / 7);
  return weekNumber;
};

const dateIsConsecutive = (array: IDate[]) => {
  array?.forEach((element) => {
    let checkIn = new Date(element.checkIn);
    let checkOut = new Date(element.checkOut);
    for (let index = 1; index < array.length; index++) {
      const nextCheckIn = new Date(array[index].checkIn);
      const nextCheckOut = new Date(array[index].checkOut);
      if (checkOut.getTime() == nextCheckIn.getTime()) {
        element.checkOut = nextCheckOut.toString();
      }
    }
  });
};

const func4 = (ranges: any, array: IDate[]) => {
  const { selection } = ranges;
  const startDate = selection.startDate;

  const endDate = selection.endDate;
  let result: Date[] = [];
  array.forEach((element) => {
    let checkIn = new Date(element.checkIn);
    checkIn.setHours(0, 0, 0, 0);
    let checkOut = new Date(element.checkOut);
    checkOut.setHours(0, 0, 0, 0);

    if (startDate.getTime() <= checkIn.getTime()) {
      result.push(checkOut);
      // setDateOut(result);
    } else if (startDate.getTime() >= checkIn.getTime()) {
      result.push(checkIn);
      // setDateOut(result);
    }
  });
  let x: Date[] = dateDiffIsGreaterTwo(array);

  x.forEach((e) => {
    result.push(new Date(e));
  });
  result.concat(x);
  return result;
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

const ModalCoOwnerCalendar = (props: any) => {
  const initialDate = {
    startDate:
      new Date(props.coOwner.startTime) > new Date()
        ? new Date(props.coOwner.startTime)
        : new Date(),
    endDate:
      new Date(props.coOwner.startTime) > new Date()
        ? new Date(props.coOwner.startTime)
        : new Date(),
    key: 'selection',
  };
  const [coOwnerId, setCoOwnerId] = useState<number>(props.coOwnerId);
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [pricePerNight, setPricePerNight] = useState<string>();
  const [timesHasCreated, setTimesHasCreated] = useState<IDate[]>([]);
  const [timesHasBooked, setTimesHasBooked] = useState<IDate[]>([]);
  const [timesDisable, setTimesDisable] = useState<any>([]);
  const [timesDisableOnClick, setTimesDisableOnClick] = useState<Date[]>([]);
  const [weeksTimeFrame, setWeeksTimeFrame] = useState<number[]>([]);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(initialDate);
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

  const handleDateChange = (value: any) => {
    const rs = func4(value, timesDisable);
    setTimesDisableOnClick(rs);
  };
  const fetchTimesDisable = async () => {
    const avCreated = await GetAvailableTimesHasCreatedByCoOwnerId({
      coOwnerId: coOwnerId,
    });
    const rs = avCreated?.map((element: any) => {
      const startDate = new Date(element.startTime);
      const endDate = new Date(element.endTime);
      const obj = { checkIn: startDate, checkOut: endDate };
      return obj;
    });
    const timesHasBooked = await GetTimeHasBookedByCoOwnerId({
      coOwnerId: coOwnerId,
    });
    const rs2 = timesHasBooked?.map((element: any) => {
      const startDate = new Date(element.checkIn);
      const endDate = new Date(element.checkOut);
      const obj = { checkIn: startDate, checkOut: endDate };
      return obj;
    });
    const rs3 = rs?.concat(rs2);
    dateIsConsecutive(rs3);
    setTimesDisable(rs3);
  };
  const fetchWeeks = () => {
    let weeks: number[] = [];
    props.coOwner.timeFrames.forEach((element: any) => {
      weeks.push(element.weekNumber);
    });
    weeks.sort(function (a, b) {
      return a - b;
    });
    setWeeksTimeFrame(weeks);
  };
  useEffect(() => {
    fetchTimesDisable();
    fetchWeeks();
  }, [open]);
  return (
    <>
      <Space>
        <Button type="link" onClick={showModal} icon={<ExportOutlined />}>
          Create new public time
        </Button>
      </Space>
      <Modal
        open={open}
        title="Create new public time"
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
            // disabledDates={timesDisableOnClick}
            rangeColors={['#5C98F2']}
            ranges={[date]}
            date={new Date()}
            onChange={(value: any) => {
              setDate(value.selection);
              const offset = new Date().getTimezoneOffset();
              var startDate = new Date(value.selection.startDate.getTime() - offset * 60 * 1000);
              var endDate = new Date(value.selection.endDate.getTime() - offset * 60 * 1000);
              setStartTime(startDate.toISOString().split('T')[0]);
              setEndTime(endDate.toISOString().split('T')[0]);
              handleDateChange(value);
            }}
            maxDate={
              props.coOwner.endTime
                ? new Date(new Date(props.coOwner.endTime).getFullYear(), 10, 31)
                : new Date(new Date().getFullYear() + 50, 10, 31)
            }
            minDate={
              new Date(props.coOwner.startTime) > new Date()
                ? new Date(props.coOwner.startTime)
                : new Date()
            }
            disabledDay={(date) => {
              let disableDays = true;
              disableDays = isDateInISOWeekNumber(date, weeksTimeFrame);
              if (disableDays) {
                const subtractOneDay = new Date(date.getTime() - 24 * 60 * 60 * 1000);
                disableDays = isDateInISOWeekNumber(subtractOneDay, weeksTimeFrame);
                if (!disableDays)
                  disableDays = timesDisable?.some((d: any) => {
                    const checkInDate = new Date(d.checkIn);
                    const checkOutDate = new Date(d.checkOut);
                    return date <= checkOutDate;
                  });
              }
              if (!disableDays)
                disableDays = timesDisable?.some((d: any) => {
                  const checkInDate = new Date(d.checkIn);
                  const checkOutDate = new Date(d.checkOut);
                  if (date <= new Date(props.coOwner.startTime) && date === checkInDate)
                    disableDays = true;
                  if (date <= new Date(props.coOwner.endTime) && date === checkOutDate)
                    disableDays = true;
                  return date > checkInDate && date < checkOutDate;
                });
              return disableDays;
            }}
            weekStartsOn={1}
            weekdayDisplayFormat={'EEEEEE'}
            months={2}
            direction="horizontal"
            className="2px w-full"
          />
          <Input
            placeholder="Input price per night"
            className="rounded-md"
            type="number"
            value={pricePerNight}
            min={1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (Number(e.target.value) < 1) {
                setPricePerNight('');
              } else {
                setPricePerNight(e.target.value);
              }
            }}
          />
          <div className="flex justify-center pt-3">
            <button
              className="border rounded-lg border-curent h-10 text-white bg-common hover:bg-sky-500 justify-self-center w-full"
              type="button"
              onClick={() => createAvailableTime()}
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
