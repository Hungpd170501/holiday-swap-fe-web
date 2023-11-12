'use client';

import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Progress } from 'antd';

const ApartmentReivew = () => {
  return (
    <div className="flex flex-col gap-2 w-60">
      <div className="flex flex-row items-center gap-1">
        <AiFillStar size={30} />
        <div className="text-2xl font-bold">4.82 · 39 reviews</div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-2">
          <div className="w-2">5</div>
          <Progress percent={45} showInfo={false} size="small" strokeColor="black" />
        </div>

        <div className="flex flex-row gap-2">
          <div className="w-2">4</div>
          <Progress percent={45} showInfo={false} size="small" strokeColor="black" />
        </div>

        <div className="flex flex-row gap-2">
          <div className="w-2">3</div>
          <Progress percent={45} showInfo={false} size="small" strokeColor="black" />
        </div>

        <div className="flex flex-row gap-2">
          <div className="w-2">2</div>
          <Progress percent={45} showInfo={false} size="small" strokeColor="black" />
        </div>

        <div className="flex flex-row gap-2">
          <div className="w-2">1</div>
          <Progress percent={45} showInfo={false} size="small" strokeColor="black" />
        </div>
      </div>
    </div>
  );
};

export default ApartmentReivew;
