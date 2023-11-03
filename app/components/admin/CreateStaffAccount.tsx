'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import InputMini from '../input/InputMini';
import UploadAvtStaff from './UploadAvtStaff';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { BiBlock } from 'react-icons/bi';

export default function CreateStaffAccount() {
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter();
  const dateFormat = 'YYYY/MM/DD';
  return (
    <div>
      <div>
        <span className="hover:underline" onClick={() => router.push('/staff')}>
          Dashboard
        </span>{' '}
        {'>'} <span className="text-common">Create Staff</span>
      </div>
      <div className="my-3">
        <div className="text-[20px] font-bold">Fill information of staff</div>
        <div className="pb-2 mt-6">Avatar*</div>
        <div className="flex flex-row items-center gap-20 w-full ">
          <div className="">
            <UploadAvtStaff />
          </div>
          <div className="flex flex-row items-center rounded-md p-4 border border-gray-600 gap-3">
            <div className="font-bold">Role: </div>
            <div className="flex flex-row items-center gap-1">
              <div>Staff</div>
              <BiBlock />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <InputMini type="text" id="staffname" label="Staff Name*" placeholder="Name of staff" />
          <InputMini
            type="text"
            id="staffemail"
            label="Staff Email*"
            placeholder="Email of staff"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <InputMini type="password" id="password" label="Password*" placeholder="Password" />
          <InputMini
            type="password"
            id="confirmPassword"
            label="Confirm password*"
            placeholder="Confirm Password"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full flex flex-col">
            <div className="py-3">Birth Date*</div>
            <div>
              <DatePicker
                className="p-4 border border-gray-600"
                id="dob"
                defaultValue={dayjs('2001/01/01', dateFormat)}
                format={dateFormat}
              />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label className="py-3">Gender</label>
            <select className="peer  p-4  font-light bg-white border rounded-md outline-none transition disabled:opacity-70">
              <option value="">Any</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputMini id="phone" label="Phone number*" placeholder="Phone number of staff" />
        </div>
      </div>
      <div className="flex flex-row justify-end w-full py-3">
        <button className="px-6  py-3 bg-common text-white rounded-md">Create</button>
      </div>
    </div>
  );
}
