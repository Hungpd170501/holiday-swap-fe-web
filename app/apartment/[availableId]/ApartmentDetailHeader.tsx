'use client';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { AiFillStar } from 'react-icons/ai';

interface ApartmentDetailHeaderProps {
  apartment?: any;
}

const ApartmentDetailHeader: React.FC<ApartmentDetailHeaderProps> = ({ apartment }) => {
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
              key={apartment?.property.propertyImage[0].id}
              alt="image"
              fill
              src={apartment?.property.propertyImage[0].link}
              className="object-cover h-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 rounded-r-xl">
            {apartment?.property.propertyImage.slice(1, 5).map((item: any, index: number) => (
              <div
                key={item.id}
                className={`w-full h-[30vh] relative overflow-hidden ${
                  index === 1 || index === 3 ? 'rounded-r-lg' : ''
                }`}
              >
                <Image
                  key={item.id}
                  alt="image"
                  fill
                  src={item.link}
                  className="object-cover w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetailHeader;
