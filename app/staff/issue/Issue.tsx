'use client';

import HeadingDashboard from '@/app/components/HeadingDashboard';
import { format } from 'date-fns';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react';

interface IssueProps {
  issue: any;
}

const Issue: React.FC<IssueProps> = ({ issue }) => {
  const router = useRouter();
  return (
    <Fragment>
      <div className="mt-12">
        <HeadingDashboard
          routerDashboard="/staff"
          pageCurrentContent="Issue booking"
          pageCurrentRouter="/staff/issue"
        />
      </div>

      <div className="py-6">
        {issue?.length > 0 ? (
          issue.reverse().map((item: any) => (
            <div
              onClick={() => router.push(`/staff/issue/${item.bookingId}`)}
              key={item.bookingId}
              className="grid grid-cols-12 h-[150px] bg-white rounded-lg shadow-lg justify-between hover:cursor-pointer mb-5 translate-y-0 duration-300 hover:-translate-y-3 hover:duration-300 transition-all transform active:scale-95"
            >
              <div className="col-span-9">
                <div className="grid grid-cols-9 h-full gap-5">
                  <div className="col-span-3 w-full h-full relative rounded-lg">
                    <Image
                      src={'/images/apartment.jpg'}
                      fill
                      alt="image"
                      className="w-full object-cover rounded-tl-md rounded-bl-md"
                    />
                  </div>
                  <div className="col-span-6 flex flex-col">
                    <div className="text-base text-gray-700">
                      Created date: {format(new Date(item.createdOn), 'dd, MMM yyyy')}
                    </div>
                    <div className="text-base text-gray-700">
                      Description: <span className="text-black">{item.description}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-3 flex flex-row justify-center items-center">
                <div
                  className={`text-lg ${
                    item.status === 'OPEN' ? 'text-green-600' : 'text-orange-600'
                  }`}
                >
                  {item.status}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <div className="text-[30px]">Issue booking</div>
            <div className="w-full h-[1px] bg-gray-300 my-8"></div>
            <div className="text-[25px] font-bold">Not have issue booking!</div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Issue;
