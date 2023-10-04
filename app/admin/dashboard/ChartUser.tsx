"use client";

import React from "react";
import {
  Chart as ChartJS,
  ArcBorderRadius,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartUser = () => {
  const data = {
    labels: ["Admin", "Membership", "Guest", "Staff"],
    datasets: [
      {
        data: [3, 9, 12, 6],
        backgroundColor: ["aqua", "bloodorange", "purple", "green"],
      },
    ],
  };

  return (
    <div className="p-5 w-full flex flex-col items-center">
      <div className="font-bold text-xl text-black">Users in system</div>
      <div className="p-4">
        <Pie data={data}></Pie>
      </div>
    </div>
  );
};

export default ChartUser;
