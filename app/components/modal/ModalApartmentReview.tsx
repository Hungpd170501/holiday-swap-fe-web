'use client';

import useAparmentAmenitiesModal from '@/app/hooks/useApartmentAmenitiesModal';
import React from 'react';
import ModalBaseDetail from './ModalBaseDetail';
import Image from 'next/image';
import useAparmentReviewModal from '@/app/hooks/useApartmentReviewModal';
import { AiFillStar } from 'react-icons/ai';
import { Progress } from 'antd';
import ApartmentReivewBoxModal from './ApartmentReviewBoxModal';

const ModalApartmentReview = () => {
  const apartmentReviewModal = useAparmentReviewModal();
  const rating = apartmentReviewModal.rating;

  const bodyContent = (
    <div className="grid grid-cols-6 gap-5">
      {/* Overall rating */}
      <div className="col-span-2">
        <div className="flex flex-row items-center gap-3">
          <AiFillStar size={50} color="black" />
          <div className="text-4xl font-bold">4.87</div>
        </div>

        <div className="pt-12 flex flex-col gap-2">
          <div className="text-sm">Overall rating</div>
          <div className="flex flex-col">
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
        </div>
      </div>

      <div className="col-span-4">
        <div className="font-bold text-4xl">39 reviews</div>
        <div className="pt-5 flex flex-col overflow-x-hidden overflow-y-auto h-[75vh]">
          {rating.content.map((item: any, index: number) => (
            <ApartmentReivewBoxModal key={index} rating={item} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <ModalBaseDetail
      body={bodyContent}
      isOpen={apartmentReviewModal.isOpen}
      onClose={apartmentReviewModal.onClose}
    />
  );
};

export default ModalApartmentReview;
