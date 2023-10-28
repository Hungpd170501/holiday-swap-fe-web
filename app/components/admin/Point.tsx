"use client";

import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { format } from "date-fns";
import useAxiosAuthClient from "@/app/hooks/useAxiosAuthClient";
import toast from "react-hot-toast";
import axios from "axios";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

const TABLE_HEAD = ["ID", "Point Price", "Created Date", "Status", ""];

interface PointProps {
  point?: any;
}

const Point: React.FC<PointProps> = ({ point }) => {
  const [listPoint, setListPoint] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState<string>();
  const axiosAuthClient = useAxiosAuthClient();

  useEffect(() => {
    const fetchData = async () => {
      const point = await axios.get(`https://holiday-swap.click/api/v1/point`);

      if (!point) {
        return null;
      }

      setListPoint(point.data);
    };
    fetchData();
  }, []);

  const handleCreatePrice = async () => {
    setIsLoading(true);
    axiosAuthClient
      .post(`/point/create?price=${price}`)
      .then(async (response) => {
        toast.success("Create point success");
        setPrice("");
        const newPoint = await axiosAuthClient.get("/point");
        setListPoint(newPoint.data);
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Fragment>
      <div className="text-xl font-bold text-common mb-9">Management Point</div>
      <div>
        <div className="w-[100px] mb-4">
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="peer p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed"
          />
        </div>
        <button
          disabled={isLoading}
          onClick={handleCreatePrice}
          className="bg-common px-5 py-4 text-white text-lg hover:bg-hover"
        >
          Create
        </button>
      </div>
      <div>{listPoint?.pointPrice}</div>
    </Fragment>
  );
};

export default Point;
