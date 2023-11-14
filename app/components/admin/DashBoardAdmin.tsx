'use client';

import React from 'react';
import ChartUser from './ChartUser';
import ChartBooking from './ChartBooking';
import ChartIncome from './ChartIncome';
import SelectRouterAdmin from './SelectRouterAdmin';

const DashBoardAdmin = () => {
  return (
    <div>
      <SelectRouterAdmin />
      <div className="bg-gray-200 w-auto h-auto rounded-lg px-20 pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ChartUser />
          <ChartBooking />
        </div>
        <div className="grid grid-cols-1">
          <ChartIncome />
        </div>
      </div>
    </div>
  );
};

export default DashBoardAdmin;
