'use client';
import React, { ChangeEvent, useState } from 'react';
import Input from '../input/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { format } from 'date-fns';
import Image from 'next/image';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import axios from 'axios';

interface EditProfileProps {
  currentUser: any;
}

const EditProfileComponent: React.FC<EditProfileProps> = ({ currentUser }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const dateFormat = 'YYYY/MM/DD';

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue) {
      window.location.href = selectedValue;
    }
  };

  const [selectedImage, setSelectedImage] = useState<string>(
    currentUser?.avatar || '/images/placeholder.jpg'
  );
  const [avatar, setAvatar] = useState<any>();
  const [gender, setGender] = useState(currentUser?.gender);
  const [isLoading, setIsLoading] = useState(false);
  const axiosAuthClient = useAxiosAuthClient();
  const router = useRouter();
  const { data: session } = useSession();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setAvatar(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        // Cập nhật selectedImage với đường dẫn mới của hình ảnh
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({});

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleSelectGender = (value: any) => {
    setGender(value);
    setCustomValue('gender', value);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append('avatar', avatar);
    formData.append('fullName', data.fullName);
    formData.append('gender', data.gender);
    formData.append('dob', format(new Date(data.dob), 'yyyy-MM-dd'));

    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Bearer ${session?.user.access_token}`,
      },
    };

    axios
      .put(`https://holiday-swap.click/api/v1/users/profile`, formData, config)
      .then(() => {
        router.push('/dashboard');
        toast.success('Update profile success!');
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="px-10 pb-10">
      <div>
        <div className="block lg:hidden xl:hidden">
          <select
            className="w-full rounded-lg my-4"
            name=""
            id=""
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="/dashboard">Dashboard</option>
            <option value="/dashboard/editProfile">Edit Profile</option>
            <option value="/dashboard/changePassword">Change password</option>
            <option value="/dashboard/ownership">Ownership</option>
            <option value="/dashboard/wallet">wallet</option>
            <option value="/dashboard/transfer">Transfer</option>
            <option value="/dashboard/myBooking">My Booking</option>
          </select>
        </div>
        <div className="">
          Dashboard {'>'} <span className="text-common">Edit profile</span>
        </div>
        <div className="w-full md:w-[600px] md:py-10">
          <div className="flex flex-col md:flex md:flex-row md:items-center md:w-full">
            <div className="pt-5 md:py-0 lg:py-0 xl:py-0">
              <Image
                className="rounded-full object-cover"
                width={100}
                height={100}
                src={selectedImage}
                alt="Avatar"
              />
            </div>

            <div className="py-10 md:py-0 lg:py-0 xl:py-0">
              <label
                htmlFor="avatar"
                className="bg-[#5C98F2] px-4 py-4 rounded-md text-white md:ml-[100px] cursor-pointer"
              >
                Change Profile Picture
              </label>
              <input
                type="file"
                id="avatar"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
        <div className=" w-full md:w-[700px]">
          <div className=" flex flex-row mb-14">
            <Input
              id="fullName"
              label="Full Name"
              errors={errors}
              type="text"
              placeholder="Thuc"
              value={currentUser?.fullName}
              register={register}
            />
          </div>
          <div className="flex flex-col mb-10">
            <div className=" w-full text-black md:w-[198px] md:text-black">Gender</div>
            <select
              value={gender}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSelectGender(e.target.value)}
              id="gender"
              className="text-gray-800 px-4 py-2 rounded-md"
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <div className=" flex flex-col mb-10 md:flex md:flex-row md:items-center md:mb-14">
            <div className=" w-full text-black md:w-[198px] md:text-black">Birth of Date</div>
            <div className=" flex flex-col md:flex md:flex-row ">
              <DatePicker
                className="p-4 border-2 border-gray-400"
                id="dob"
                onChange={(value: any) => {
                  setCustomValue('dob', value);
                }}
                defaultValue={dayjs(format(new Date(currentUser?.dob), 'yyyy-MM-dd'), dateFormat)}
                format={dateFormat}
              />
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              onClick={handleSubmit(onSubmit)}
              className="bg-[#5C98F2] px-4 py-3 my-5 md:my-5 lg:my-0 xl:my-0 rounded-md text-white hover:bg-blue-500"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileComponent;
