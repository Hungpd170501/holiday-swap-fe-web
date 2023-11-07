'use client';
import ViewFullImage from '@/app/components/apartment/ViewFullImage';
import { Button, Drawer, DrawerProps, RadioChangeEvent, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { PiSquaresFourLight } from 'react-icons/pi';

interface ApartmentDetailHeaderProps {
  apartment?: any;
}

const ApartmentDetailHeader: React.FC<ApartmentDetailHeaderProps> = ({ apartment }) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('bottom');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full">
      <div className="text-2xl font-bold py-3">{apartment.property.propertyName}</div>
      <div className="w-full py-3">
        <div className="font-normal text-base text-black flex flex-row gap-4">
          <div className="flex flex-row items-center">
            <AiFillStar size={18} /> 4.84 · 54 reviews
          </div>
          <div>·</div>
          <div>Resort Nha Trang</div>
        </div>

        <div className="grid grid-cols-2 h-[60vh] gap-2 py-4">
          <div className="w-full rounded-l-xl relative overflow-hidden">
            <Image
              onClick={showDrawer}
              key={apartment?.property.propertyImage[0].id}
              alt="image"
              fill
              src={apartment?.property.propertyImage[0].link}
              className="object-cover h-full cursor-pointer"
            />
          </div>

            {/* {apartment?.property.propertyImage.slice(1, 5).map((item: any, index: number) => (
              <div
                key={item.id}
                className={`w-full h-[30vh] relative overflow-hidden ${
                  index === 1 ? 'rounded-tr-xl' : ''
                } ${index === 3 ? 'rounded-br-xl' : ''}`}
              >
                <Image
                  key={item.id}
                  alt="image"
                  fill
                  src={item.link}
                  className="object-cover w-full"
                />
              </div>
            ))} */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-2 rounded-r-xl">
                {apartment?.property.propertyImage.slice(1, 5).map((item: any, index: number) => (
                  <div
                    key={item.id}
                    className={`w-full h-[30vh] relative overflow-hidden ${
                  index === 1 ? 'rounded-tr-xl' : ''
                } ${index === 3 ? 'rounded-br-xl' : ''}`}
                  >
                    <Image
                      onClick={showDrawer}
                      key={item.id}
                      alt="image"
                      fill
                      src={item.link}
                      className="object-cover w-full cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <Link
                href="#"
                className="absolute bottom-2 right-2 flex flex-row  items-center gap-2 px-4 py-1 bg-white border border-black rounded-md cursor-pointer hover:bg-gray-200"
              >
                <PiSquaresFourLight size={25} onClick={showDrawer} />
                <button onClick={showDrawer}>View all image</button>
              </Link>
            </div>
          </div>
        </div>
        <Drawer placement={placement} width={500} onClose={onClose} open={open}>
          <ViewFullImage listImage={apartment?.property.propertyImage} />
        </Drawer>
      </div>

  );
};

export default ApartmentDetailHeader;
