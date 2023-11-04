'use client';
import React, { useState } from 'react';
import { message, Steps, theme } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import UploadContract from './UploadContractApartment';

const Apartment = [
  {
    title: 'First',
    content: (
      <div className="grid grid-cols-2 bg-white pt-10 px-10 mt-10">
        <div>
          <div className="text-[30px] font-bold text-common">Step 1</div>
          <div className="py-3 text-[40px] font-bold">Share your apartment information with us</div>
          <div className="text-gray-500">
            In this step we will ask you what type of apartment you are renting and how long you
            have owned that apartment, then indicate the number of guests who can stay in the
            apartment.
          </div>
        </div>
        <div className="flex flex-row justify-end w-full">
          <img className="w-[80%] h-[90%] shadow-md " src="/images/apartmentstep1.jpg" alt="" />
        </div>
      </div>
    ),
  },
  {
    title: 'Second',
    content: (
      <div>
        <div className="grid grid-cols-2 bg-white pt-10 px-10 mt-10">
          <div>
            <div className="text-[30px] font-bold text-common">Step 2</div>
            <div className="py-3 text-[40px] font-bold">
              Please tell us the name of your apartment
            </div>
            <div className="text-gray-500">
              In this step, please provide us with the name of your apartment. For example: Beach
              apartment, Luxury apartment...
            </div>
            <div className="mt-10">
              <div className="font-bold mb-2">
                Apartment name <span className="text-red-500">*</span>
              </div>
              <input className="w-full rounded-md px-2" type="text" />
            </div>
          </div>
          <div className="flex flex-row justify-end w-full">
            <img className="w-[80%] h-[90%] shadow-md " src="/images/apartmentstep2.jpg" alt="" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Third',
    content: (
      <div>
        <div className="grid grid-cols-2 bg-white pt-10 py-10 px-10 mt-10">
          <div>
            <div className="text-[30px] font-bold text-common">Step 3</div>
            <div className="py-3 text-[40px] font-bold">
              Please let us know which resort and property type your apartment belongs to
            </div>
            <div className="text-gray-500">
              In this step, click on select a resort that contains your apartment and then select
              the property type of your apartment
            </div>
            <div className="mt-10">
              <div>
                Resort <span className="text-red-500">*</span>
              </div>
              <select className="w-full rounded-md mt-2" name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="mt-3">
              <div>
                Property type <span className="text-red-500">*</span>
              </div>
              <select className="w-full rounded-md mt-2" name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="mt-3">
              <div>
                Apartment ID <span className="text-red-500">*</span>
              </div>
              <input className="w-full rounded-md px-2 mt-2" type="text" />
            </div>
          </div>
          <div className="flex flex-row justify-end w-full">
            <img className="w-[80%] h-[90%] shadow-md " src="/images/apartmentstep3.jpg" alt="" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Fourth',
    content: (
      <div>
        {/* <div className="grid grid-cols-2 bg-white pt-10 px-10 mt-10">
          <div>
            <div className="mt-3">
              <select className="w-full rounded-md mt-2" name="" id="">
                <option value="">Owner forever</option>
                <option value="">Owner for a period of time</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div className="w-full">
                <div className="mb-2">Start year</div>
                <input className="rounded-md px-2 w-full" type="text" />
              </div>
              <div className="w-full">
                <div className="mb-2">End year</div>
                <input className="rounded-md px-2 w-full" type="text" />
              </div>
            </div>
          </div>
          
        </div> */}
      </div>
    ),
  },
  {
    title: 'Fifth',
    content: (
      <div>
        <div className="grid grid-cols-2 bg-white pt-10 px-10 mt-10">
          <div>
            <div className="text-[30px] font-bold text-common">Step 5</div>
            <div className="py-3 text-[40px] font-bold">Prove that you are the apartment owner</div>
            <div className="text-gray-500">
              In this step, you need to prove that you are the owner of the apartment through sales
              contracts. Please take a photo of the contract and send it to our system.
            </div>
            <div className="mt-10">
              <UploadContract />
            </div>
          </div>
          <div className="flex flex-row justify-end w-full">
            <img className="w-[80%] h-[90%] shadow-md " src="/images/apartmentstep5.jpg" alt="" />
          </div>
        </div>
      </div>
    ),
  },
];

const StepCreateApartmentRegister: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  const [ownershipType, setOwnershipType] = useState(''); // Thêm state để lưu lựa chọn của người dùng

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = Apartment.map((item) => ({ key: item.title, title: item.title }));

  const handleDone = () => {
    setTimeout(() => {
      router.push('/dashboard//wallet');
    }, 3000);
  };

  // Hàm xử lý khi thay đổi lựa chọn "Select type ownership"
  const handleOwnershipTypeChange = (value: any) => {
    setOwnershipType(value);
  };

  return (
    <div className="px-10 py-10 bg-white">
      <Steps className="pt-20" current={current} items={items} />
      <div>{Apartment[current].content}</div>
      <div className="mt-10">
        <div className="bg-white px-10 py-10">
          {current === 3 && (
            <div className="grid grid-cols-2 gap-20">
              <div>
                <div className="text-[30px] font-bold text-common">Step 4</div>
                <div className="py-3 text-[40px] font-bold">
                  Let us know what type of apartment owner you are
                </div>
                <div className="text-gray-500">
                  In this step, if you are the owner of a Vinh Vien apartment, choose the Vinh Vien
                  style or if you are the owner of an apartment by year, choose the yearly style.
                </div>
                <div className="mt-10">
                  Select type ownership<span className="text-red-500">*</span>
                </div>
                <select
                  className="w-full rounded-md mt-2"
                  name=""
                  id=""
                  value={ownershipType}
                  onChange={(e) => handleOwnershipTypeChange(e.target.value)}
                >
                  <option value="Owner forever">Owner forever</option>
                  <option value="Owner for a period of time">Owner for a period of time</option>
                </select>
                <div className="mt-5">
                  <div>
                    Which week of the year? <span className="text-red-500">*</span>
                  </div>
                  <input className="w-full rounded-md px-2 mt-2" type="text" />
                </div>
                {current === 3 && ownershipType === 'Owner for a period of time' && (
                  <div className="grid grid-cols-2 gap-5 mt-5">
                    <div className="w-full">
                      <div className="mb-2">Start year</div>
                      <input className="rounded-md px-2 w-full" type="text" />
                    </div>
                    <div className="w-full">
                      <div className="mb-2">End year</div>
                      <input className="rounded-md px-2 w-full" type="text" />
                    </div>
                  </div>
                )}
              </div>
              <img
                className="w-[100%] h-[100%] shadow-md "
                src="/images/apartmentstep4.jpg"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <div className="-mt-10">
        {current < Apartment.length - 1 && (
          <button className="bg-common px-5 py-2 rounded-md text-white" onClick={() => next()}>
            Next
          </button>
        )}
        {current === Apartment.length - 1 && (
          <Link
            href="./dashboard/ownership"
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
    </div>
  );
};

export default StepCreateApartmentRegister;
