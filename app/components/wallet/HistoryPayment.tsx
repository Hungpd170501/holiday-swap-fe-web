'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Link from 'next/link';
import { format } from 'date-fns';

interface HistoryPaymentProps {
  historyTransaction: any;
}

const HistoryPayment: React.FC<HistoryPaymentProps> = ({ historyTransaction }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <TabPanel value="1">
          <div>
            {historyTransaction?.map((item: any, index: number) => (
              <div key={index} className="mb-5 grid grid-cols-5 bg-green-50 rounded-3xl w-full">
                <div className="flex flex-row items-center">
                  <img className="w-14 h-14 rounded-full" src="/images/avt.jpg" alt="asd" />
                  <div className="flex flex-col ml-2">
                    <div className="text-[20px] font-semibold">{item.to}</div>
                    <div className="text-gray-500">Membership</div>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <div className="mr-2">
                    {format(new Date(item?.dateConvert.split(' ')[0]), 'MMM, d yyyy')}
                  </div>
                  <span>{item?.dateConvert.split(' ')[1]} PM</span>
                </div>
                <div className="flex flex-row items-center justify-center">
                  <div>200.000</div>
                </div>
                <div className="flex flex-row items-center">
                  <img className="w-5 h-5 " src="/images/coin.png" alt="" />
                  <div className={item.amount.includes('+') ? 'text-green-500' : 'text-rose-500'}>
                    {item.amount}
                  </div>
                </div>
                <div className="flex flex-row justify-end items-center">
                  <div
                    className={`rounded-3xl px-3 py-2 border  w-auto h-auto ${
                      item.status === 'SUCCESS'
                        ? 'border-green-500 text-green-700'
                        : 'border-rose-500 text-rose-700'
                    }`}
                  >
                    {item.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default HistoryPayment;
