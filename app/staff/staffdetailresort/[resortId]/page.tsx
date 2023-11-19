import GetResortById from '@/app/actions/getResortById';
import DropDownEditResort from '@/app/components/staff/DropDownEditResort';
import ListActionApproveApartment from '@/app/components/staff/ListActionApproveApartment';
import requireAuth from '@/app/libs/requireAuth';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { AiOutlineCheck, AiOutlineClose, AiTwotoneStar } from 'react-icons/ai';
import { BiDollarCircle, BiMailSend } from 'react-icons/bi';
import { BsCalendarDate, BsClock } from 'react-icons/bs';
import { FaWifi } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosPeople } from 'react-icons/io';
import { RxRadiobutton } from 'react-icons/rx';
import GoogleMapReact from 'google-map-react-concurrent';
import MapResort from '../MapResort';

interface IParams {
  resortId: string;
}
export default async function StaffDetailResort({ params }: { params: IParams }) {
  const resortDetail = await GetResortById(params);
  console.log(resortDetail);

  return requireAuth(
    <div>
      <div className="mt-10">
        Staff {'>'} <span className="text-common">Detail Resort</span>
      </div>
      <div className="">
        <div className="flex-col">
          <div className="pb-6 w-full flex flex-row items-center justify-between">
            <div>
              <div className="pt-10  text-[40px]">{resortDetail.resortName}</div>
              <div className="flex flex-row items-center gap-1">
                <div className="font-bold text-[20px]">Address: </div>
                <div>{resortDetail.addressLine}</div>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="font-bold text-[20px]">Property type: </div>
                <div>
                  {resortDetail.propertyTypes.map((row: any, index: any) => (
                    <React.Fragment key={index}>
                      <span className="inline-block">{row.propertyTypeName}</span>
                      {index < resortDetail.propertyTypes.length - 1 && <span>, </span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="font-bold text-[20px]">Amenity: </div>
                <div>
                  {resortDetail.resortAmenityTypes.map((row: any, index: any) => (
                    <React.Fragment key={index}>
                      <span className="inline-block">{row.resortAmenityTypeName}</span>
                      {index < resortDetail.propertyTypes.length - 1 && <span>, </span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <DropDownEditResort resortId={resortDetail.id} />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-between items-center">
        {resortDetail.resortImages.map((row: any, index: any) => (
          <div key={index}>
            <Image
              src={row.link}
              alt="destination"
              height={800}
              width={350}
              className="w-[628px] h-[318px] rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className="w-screen h-screen">
        <MapResort
          latitude={resortDetail.latitude}
          id={resortDetail.id}
          resortName={resortDetail.resortName}
          longitude={resortDetail.longitude}
        />
      </div>
      <div className="flex flex-row items-center">
        <div className=" w-full">
          <div className="text-[25px] py-[30px]">Detail</div>
          <div className="pr-[30px]">
            <div className="pb-[10px]">{resortDetail.resortDescription}</div>
          </div>

          <div className="py-5 ">
            <div className="flex flex-row items-center  mb-[10px]">
              <RxRadiobutton className="mr-[10px]" />
              <div>View the City Walls</div>
            </div>
            <div className="flex flex-row items-center mb-[10px] ">
              <RxRadiobutton className="mr-[10px]" />
              <div>Hiking in the forest</div>
            </div>
            <div className="flex flex-row items-center mb-[10px] ">
              <RxRadiobutton className="mr-[10px]" />
              <div>Discover the famous view point “The Lark”</div>
            </div>
            <div className="flex flex-row items-center mb-[10px] ">
              <RxRadiobutton className="mr-[10px]" />
              <div>Sunset on the cruise</div>
            </div>
          </div>
          <div className="h-[0.5px] bg-gray-300 mb-[20px] mr-[430px]"></div>
        </div>
        <div className="flex flex-col">
          <div className="w-[387px] h-auto bg-white border border-black rounded-lg flex flex-col justify-center mb-[40px]">
            <div className="ml-[40px] text-[30px] pt-3 pb-2">Need help?</div>
            <div className="ml-[40px]">
              <div className="flex flex-row items-center py-[20px]">
                <FiPhoneCall size={25} className="mr-[10px]" />
                085659778
              </div>
              <div className="flex flex-row items-center pb-[10px]">
                <BiMailSend size={25} className="mr-[10px]" />
                Holidayswap@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    [3]
  );
}
