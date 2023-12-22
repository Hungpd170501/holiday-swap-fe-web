'use client';

import GetIssueById from '@/app/actions/getIssueById';
import HeadingDashboard from '@/app/components/HeadingDashboard';
import useChangeStatusIssueModal from '@/app/hooks/useChangeStatusIssueModal';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';

interface IssueDetailProps {
  issueDetail: any;
  params: any;
}

const IssueDetail: React.FC<IssueDetailProps> = ({ issueDetail, params }) => {
  const [detail, setDetail] = useState(issueDetail);
  const changeStatusIssueModal = useChangeStatusIssueModal();
  const isSuccess = changeStatusIssueModal.isSuccess;
  const router = useRouter();

  console.log('Check params', params);

  useEffect(() => {
    const fetchData = async () => {
      if (isSuccess === true) {
        const newDetail = await GetIssueById(params);
        if (newDetail) {
          setDetail(newDetail);
          changeStatusIssueModal.onSuccessReset();
        }
      }
    };
    fetchData();
  }, [isSuccess]);

  console.log('Check issue', isSuccess);

  return (
    <Fragment>
      <div className="mt-12">
        <HeadingDashboard
          routerDashboard="/staff"
          pageCurrentContent="Issue booking"
          pageCurrentRouter="/staff/issue"
        />
      </div>

      <div className="py-32 w-full flex flex-row items-center justify-center">
        <div className="p-3 border flex flex-col gap-2 bg-white border-slate-300 rounded-lg shadow-md w-5/12">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-1 items-center">
              <span className="font-bold">Booking:</span>
              <span>{detail?.bookingId}</span>
            </div>

            {detail?.status === 'RESOLVE' || detail?.status === 'REFUND' ? (
              <Fragment></Fragment>
            ) : (
              <div
                onClick={() => changeStatusIssueModal.onOpen(detail.id)}
                className="hover:cursor-pointer transition-all duration-500 transform active:scale-95"
              >
                <FaRegEdit size={30} />
              </div>
            )}
          </div>

          <div className="flex flex-row gap-1 items-center">
            <span className="font-bold">Created date:</span>
            <span>{format(new Date(detail.createdOn), 'dd/MM/yyyy')}</span>
          </div>

          <div className="flex flex-row gap-1">
            <span className="font-bold">Description:</span>
            <span className="text-sm">{detail.description}</span>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <span className="font-bold">Status:</span>
            <span
              className={`text-sm ${
                detail.status === 'OPEN' ? 'text-green-500' : 'text-orange-500'
              } font-bold`}
            >
              {detail.status}
            </span>
          </div>

          {detail.note && (
            <div className="flex flex-row gap-1">
              <span className="font-bold">Note:</span>
              <span className="text-sm">{detail.note}</span>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default IssueDetail;
