'use client';

import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, Space, message } from 'antd';
import { ExportOutlined } from '@ant-design/icons';

import { DateRange } from 'react-date-range';
import axios from 'axios';
import GetAvailableTimesHasCreatedByCoOwnerId from '@/app/actions/getAvailableTimesHasCreatedByCoOwnerId';
import GetTimeHasBookedByCoOwnerId from '@/app/actions/getTimeHasBookedByCoOwnerId';

const initialDate = {
  startDate: new Date("2024-02-02"),
  endDate: new Date("2024-02-12"),//new Date(new Date().getTime() + 24 * 1000 * 1000),
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

  const handleDateChange = (value: any) => {};
  const fetchTimesDisable = async () => {
    var avCreated = await GetAvailableTimesHasCreatedByCoOwnerId({
      coOwnerId: coOwnerId,
    });
    const rs = avCreated.map((element: any) => {
      const startDate = new Date(element.startTime);
      const endDate = new Date(element.endTime);
      const obj = { checkIn: startDate, checkOut: endDate };
      return obj;
    });
    var timesHasBooked = await GetTimeHasBookedByCoOwnerId({
      coOwnerId: coOwnerId,
    });
    const rs2 = timesHasBooked.map((element: any) => {
      const startDate = new Date(element.checkIn);
      const endDate = new Date(element.checkOut);
      const obj = { checkIn: startDate, checkOut: endDate };
      return obj;
    });
    const rs3 = rs.concat(rs2);
    setTimesDisable(rs3);
  };
  const fetchWeeks = () => {
    props.coOwner.timeFrames.forEach((element: any) => {
      weeksTimeFrame.push(element.weekNumber);
    });
  };
  useEffect(() => {
    fetchTimesDisable();
    fetchWeeks();
  }, [open]);
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
            maxDate={
              props.coOwner.endTime
                ? new Date(props.coOwner.endTime)
                : new Date(new Date().getFullYear() + 50, 1, 1)
            }
            minDate={
              new Date(props.coOwner.startTime) > new Date()
                ? new Date(props.coOwner.startTime)
                : new Date()
            }
            disabledDay={(date) => {
              let disableDays = true;
              disableDays = isDateInISOWeekNumber(date, weeksTimeFrame);
              //is in list disable
              if (!disableDays)
                disableDays = timesDisable.some((d: any) => {
                  const checkInDate = new Date(d.checkIn);
                  const checkOutDate = new Date(d.checkOut);
                  return date >= checkInDate && date <= checkOutDate;
                });
              return disableDays;
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
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalCoOwnerCalendar;
function isDateInISOWeekNumber(date: Date, targetWeekNumbers: number[]) {
  const isoWeekNumber = getISOWeekNumber(date);
  return !targetWeekNumbers.includes(isoWeekNumber);
}
function getISOWeekNumber(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const tempDate = new Date(Date.UTC(year, month, day));
  const dayOfWeek = tempDate.getUTCDay() || 7;
  tempDate.setUTCDate(tempDate.getUTCDate() + 4 - dayOfWeek);
  const startOfYear: Date = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil(((+tempDate - +startOfYear) / 86400000 + 1) / 7);
  return weekNumber;
}
