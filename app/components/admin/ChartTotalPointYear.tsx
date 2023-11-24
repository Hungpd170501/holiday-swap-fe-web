'use client';

import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import { Tooltip as FlowTooltip } from 'flowbite-react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const ChartTotalPointYear = () => {
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const [type, setType] = useState('current');
  const [dataTotalPoint, setDataTotalPoint] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const config = { headers: { 'Cotent-type': 'application/json' } };
      const body = {
        type: type,
      };
      const data = await axios.post(
        'https://holiday-swap.click/api/v1/reportdashboard/totalpoint/year',
        body,
        config
      );
      const bookingArray = Object.values(data.data);

      setDataTotalPoint(bookingArray);
    };
    fetchData();
  }, [type]);

  const data = {
    labels,
    datasets: [
      {
        label: 'Total point',
        data: dataTotalPoint?.slice(0, 12),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const handleChangeYear = async (type: any) => {
    const config = { headers: { 'Cotent-type': 'application/json' } };
    const body = {
      year: new Date(dataTotalPoint.slice(12, 13)).getFullYear(),
      type: type,
    };
    const dataBooking = await axios.post(
      'https://holiday-swap.click/api/v1/reportdashboard/totalpoint/year',
      body,
      config
    );
    const bookingArray = Object.values(dataBooking.data);

    setDataTotalPoint(bookingArray);
  };

  return (
    <div className="p-5 w-full flex flex-col items-center">
      <div className="font-bold text-xl text-black">
        Total point in year {dataTotalPoint?.slice(12, 13)}
      </div>
      <div className="p-4 min-w-full h-[300px]">
        <Line options={options} data={data} />
      </div>
      <div className="flex flex-row w-full justify-end gap-3">
        <FlowTooltip content="Prev year">
          <button
            onClick={() => {
              setType('back');
              handleChangeYear(type);
            }}
            type="button"
          >
            <IoIosArrowDropleftCircle size={30} />
          </button>
        </FlowTooltip>

        <FlowTooltip content="Next year">
          <button
            onClick={() => {
              setType('next');
              handleChangeYear(type);
            }}
            type="button"
          >
            <IoIosArrowDroprightCircle size={30} />
          </button>
        </FlowTooltip>
      </div>
    </div>
  );
};

export default ChartTotalPointYear;
