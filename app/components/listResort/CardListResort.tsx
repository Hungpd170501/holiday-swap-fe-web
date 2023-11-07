'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Carousel } from 'flowbite-react';

interface CardListResortProps {
  data: any;
}

const CardListResort: React.FC<CardListResortProps> = ({ data }) => {
  const route = useRouter();
  return (
    <div className="flex flex-col cursor-pointer">
      <div>
        <Carousel
          slide={false}
          className="relative w-full h-[400px] rounded-xl z-40 object-cover  "
        >
          {data?.property.propertyImage.slice(0, 5).map((item: any) => (
            <div key={item.id} className="w-full h-full ">
              <Image
                onClick={() => route.push(`/apartment/${data.availableTime.id}`)}
                src={item.link}
                alt="destination"
                fill
                className="  "
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div
        onClick={() => route.push(`/apartment/${data.availableTime.id}`)}
        className="w-full py-5"
      >
        <div className="text-base font-bold">{data?.property.propertyName}</div>
        <div className="text-gray-600 text-base">Stay with {data?.user.username}</div>
        <div className="text-gray-600 text-base">6 - 11 Nov</div>
        <div className="py-2 text-base">
          <div>
            <span className="font-bold">{data?.availableTime.pricePerNight} point</span>
            /night
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListResort;
