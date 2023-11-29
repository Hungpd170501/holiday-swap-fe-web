'use client';

import React from 'react';
import ChartUser from './ChartUser';
import ChartBooking from './ChartBooking';
import ChartIncome from './ChartIncome';
import SelectRouterAdmin from './SelectRouterAdmin';
import ChartBookingYear from './ChartBookingYear';
import ChartIncomeYear from './ChartIncomeYear';
import ChartTotalPoint from './ChartTotalPoint';
import ChartTotalPointYear from './ChartTotalPointYear';
import HeadingDashboard from '../HeadingDashboard';
import { useRouter } from 'next/navigation';

interface DashboardAdminProps {
  listUser: any;
}

const DashBoardAdmin: React.FC<DashboardAdminProps> = ({ listUser }) => {
  const router = useRouter()
  return (
    <div>
      <SelectRouterAdmin />
       <div className="flex flex-row gap-1 items-center py-5">
      <span
        onClick={() => router.push('/admin')}
        className="hover:underline hover:cursor-pointer"
      >
        Dashboard
      </span>{' '}
    
    </div>
      <div className="bg-gray-200 w-auto h-auto rounded-lg px-20 pt-14">
        <div className="grid grid-cols-1 md:grid-cols-1">
          <ChartUser listUser={listUser} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-5">
          <ChartBooking />
          <ChartBookingYear />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-5">
          <ChartIncome />
          <ChartIncomeYear />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-5">
          <ChartTotalPoint />
          <ChartTotalPointYear />
        </div>
      </div>
    </div>
  );
};

export default DashBoardAdmin;
