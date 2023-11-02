"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartBooking = () => {
  const ctxLabel = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const ctxData1 = [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30];
  const ctxColor1 = "#506fd9";
  const ctxColor2 = "#DBDFFD";

  const dataBar = {
    labels: ctxLabel,
    datasets: [
      {
        data: ctxData1,
        backgroundColor: ctxColor1,
        barPercentage: 0.5,
      },
      // {
      //   data: ctxData2,
      //   backgroundColor: ctxColor2,
      //   barPercentage: 0.5,
      // },
    ],
  };

  const optionBar = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 80,
      },
    },
  };
  return (
    <div className="p-5 w-full flex flex-col items-center">
      <div className="font-bold text-xl text-black">Income</div>
      <div className="p-4 w-full h-[300px]">
        <Bar data={dataBar} options={optionBar} />
      </div>
    </div>
  );
};

export default ChartBooking;
