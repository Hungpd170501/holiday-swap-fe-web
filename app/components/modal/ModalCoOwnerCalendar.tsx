'use client';

import useAparmentAmenitiesModal from '@/app/hooks/useApartmentAmenitiesModal';
import React, { useState } from 'react';
import ModalBaseDetail from './ModalBaseDetail';
import Image from 'next/image';
import { Button, Calendar, Modal, Space } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import { addDays, subDays } from 'date-fns';
import type { Dayjs } from 'dayjs';

import type { CalendarProps } from 'antd';
import { DateRange, DateRangePicker } from 'react-date-range';

const initialDate = {
  startDate: new Date(),
  endDate: new Date(new Date().getTime() + 24 * 1000 * 1000),
  key: 'selection',
};

const ModalCoOwnerCalendar = () => {
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
  const [date, setDate] = useState(initialDate);
  return (
    <>
      <Space>
        <Button type="link" onClick={showModal} icon={<ExportOutlined />}></Button>
      </Space>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        // width={750}
      >
        <div>
          <DateRange
            dateDisplayFormat="yyyy-MM-dd"
            showDateDisplay={false}
            rangeColors={['#5C98F2']}
            ranges={[date]}
            date={new Date()}
            onChange={(value: any) => {
              setDate(value.selection);
            }}
            months={2}
            direction="horizontal"
          />
        </div>
      </Modal>
    </>
  );
};

export default ModalCoOwnerCalendar;
