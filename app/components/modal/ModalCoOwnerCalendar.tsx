'use client';

import useAparmentAmenitiesModal from '@/app/hooks/useApartmentAmenitiesModal';
import React, { ChangeEventHandler, useState } from 'react';
import ModalBaseDetail from './ModalBaseDetail';
import Image from 'next/image';
import { Button, Calendar, Input, Modal, Space, message } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import { addDays, subDays } from 'date-fns';
import type { Dayjs } from 'dayjs';

import type { CalendarProps } from 'antd';
import { DateRange, DateRangePicker } from 'react-date-range';
import axios from 'axios';

const initialDate = {
  startDate: new Date(),
  endDate: new Date(new Date().getTime() + 24 * 1000 * 1000),
  key: 'selection',
};

const ModalCoOwnerCalendar = (props: any) => {
  const [coOwnerId, setCoOwnerId] = useState<number>(props.coOwnerId);
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [pricePerNight, setPricePerNight] = useState<string>();
  const [open, setOpen] = useState(false);

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
  const [date, setDate] = useState(initialDate);
  const handleDateChange = (value: any) => {
    const offset = new Date().getTimezoneOffset();
    var startDate = new Date(value.selection.startDate.getTime() - offset * 60 * 1000);
    var endDate = new Date(value.selection.endDate.getTime() - offset * 60 * 1000);
    setStartTime(startDate.toISOString().split('T')[0]);
    setEndTime(endDate.toISOString().split('T')[0]);
  };
  return (
    <>
      <Space>
        <Button type="link" onClick={showModal} icon={<ExportOutlined />}></Button>
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
            showDateDisplay={false}
            rangeColors={['#5C98F2']}
            ranges={[date]}
            date={new Date()}
            onChange={(value: any) => {
              setDate(value.selection);
              handleDateChange(value);
            }}
            months={2}
            direction="horizontal"
            className="1px w-full"
          />
          <Input
            placeholder="Basic usage"
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
