'use client';
import React, { useState } from 'react';
import { message, Steps, theme } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Money = [
  {
    title: 'First',
    content: (
      <div className="mt-10 py-5 w-full bg-white flex flex-row items-center justify-center border border-gray-300 rounded-md">
        <div>
          <div>
            <h1 className="font-bold mb-2 ">Source account</h1>
            <input className="w-[500px] rounded-md" value="hungpd7" type="text" />
          </div>
          <div className="mt-5">
            <h1 className="font-bold mb-2 ">
              Accounts get <span className="text-red-500">*</span>
            </h1>
            <input className="w-[500px] rounded-md" type="text" />
          </div>
          <div className="my-5">
            <h1 className="font-bold mb-2  ">
              Number of points to transfer <span className="text-red-500">*</span>
            </h1>
            <input className="w-[500px] rounded-md" type="text" />
          </div>
          <div>
            <h1 className="font-bold mb-2 ">Content</h1>
            <textarea className="rounded-md" name="" id="" cols={57} rows={2}></textarea>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Second',
    content: (
      <>
        <div className="mt-10 py-5 w-full bg-white flex flex-col items-center justify-center border border-gray-300 rounded-md">
          <div className="flex flex-row items-center gap-3">
            <div className="bg-blue-100 w-[500px] px-3 py-3 rounded-md">
              <div className="text-[25px] text-common font-bold">Money transfer account</div>
              <div className="flex fle-row py-5 items-center justify-between">
                <div>Account type</div>
                <div className="text-gray-400">HolidaySwap</div>
              </div>
              <div className="flex fle-row items-center justify-between">
                <div>Account email</div>
                <div className="text-gray-400">hungpd7150701@gmail.com</div>
              </div>
              <div className="flex fle-row py-5 items-center justify-between">
                <div>Number of points transferred</div>
                <div className="text-gray-400">20.000</div>
              </div>
              <div className="flex fle-row items-center justify-between">
                <div>Content</div>
                <div className="text-gray-400">Chuyen diem cho Bui Tri Thuc</div>
              </div>
            </div>
            <div className="bg-blue-100 w-[500px] px-3 py-3 rounded-md">
              <div className="text-[25px] text-common font-bold">Receive account</div>
              <div className="flex fle-row py-5 items-center justify-between">
                <div>Account type</div>
                <div className="text-gray-400">HolidaySwap</div>
              </div>
              <div className="flex fle-row items-center justify-between">
                <div>Account email</div>
                <div className="text-gray-400">thucbui320@gmail.com</div>
              </div>
              <div className="flex fle-row py-5 items-center justify-between">
                <div>Number of points received</div>
                <div className="text-gray-400">20.000</div>
              </div>
              <div className="flex fle-row items-center justify-between">
                <div>Content</div>
                <div className="text-gray-400">Chuyen diem cho Bui Tri Thuc</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center mt-5 gap-1">
            <input type="checkbox" />
            <div>I have read and agree to HolidaySwap's money transfer terms</div>
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Third',
    content: (
      <div className="mt-10 py-5 w-full bg-white flex flex-col items-center justify-center border border-gray-300 rounded-md">
        <div>
          <div>
            Please enter the OTP code sent to your email <span>hungpd7150701@gmail.com</span>
          </div>
          <div className="flex flex-row items-center gap-5 mt-5 ">
            <input className="rounded-md px-2 " type="number" />
            <button className="text-white px-5 py-2 rounded-md bg-common hover:bg-blue-600">
              Accuracy
            </button>
          </div>
        </div>
      </div>
    ),
  },
];

const TransferMoney: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = Money.map((item) => ({ key: item.title, title: item.title }));

  const handleDone = () => {
    setTimeout(() => {
      router.push('/dashboard//wallet');
    }, 3000);
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div>{Money[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < Money.length - 1 && (
          <button className="bg-common px-5 py-2 rounded-md text-white" onClick={() => next()}>
            Next
          </button>
        )}
        {current === Money.length - 1 && (
          <Link
            href="./wallet"
            className="bg-common px-5 py-2 rounded-md text-white"
            onClick={() => message.success('Processing complete!', handleDone)}
          >
            Done
          </Link>
        )}
        {current > 0 && (
          <button
            className="bg-common px-5 py-2 rounded-md text-white"
            style={{ margin: '0 8px' }}
            onClick={() => prev()}
          >
            Previous
          </button>
        )}
      </div>
    </>
  );
};

export default TransferMoney;
