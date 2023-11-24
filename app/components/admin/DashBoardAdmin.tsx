'use client';
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

interface DashboardAdminProps {
  listUser: any;
}

const DashBoardAdmin: React.FC<DashboardAdminProps> = ({ listUser }) => {
  return (
    <div>
      <SelectRouterAdmin />
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
