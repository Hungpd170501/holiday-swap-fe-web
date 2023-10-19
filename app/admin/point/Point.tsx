"use client";

import {
  Card,
  Chip,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { format } from "date-fns";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import useAxiosAuthClient from "@/app/hooks/useAxiosAuthClient";
import toast from "react-hot-toast";

const TABLE_HEAD = ["ID", "Point Price", "Created Date", "Status", ""];

interface PointProps {
  point?: any;
}

const Point: React.FC<PointProps> = ({ point }) => {
  const [listPoint, setListPoint] = useState<any>(point);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState<string>();
  const axiosAuthClient = useAxiosAuthClient();

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
          <Input
            variant="standard"
            label="Price point"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPrice(e.target.value)
            }
          />
        </div>
        <Button
          disabled={isLoading}
          onClick={handleCreatePrice}
          className="bg-common"
        >
          Create
        </Button>
      </div>
      <Card className="h-full w-full overflow-y-auto overflow-x-hidden mt-6">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr key={listPoint?.id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {listPoint?.id}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {listPoint?.pointPrice}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {/* {format(new Date(listPoint?.pointCreatedDate), "dd-MM-yyyy")} */}
                  16-10-2023
                </Typography>
              </td>
              <td className="p-4">
                <div className="w-max">
                  <Chip
                    variant="ghost"
                    size="sm"
                    value={
                      listPoint?.pointStatus === "ACTIVE"
                        ? "Active"
                        : "In-active"
                    }
                    color={
                      listPoint?.pointStatus === "ACTIVE"
                        ? "green"
                        : "blue-gray"
                    }
                  />
                </div>
              </td>
              <td className="p-4">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                >
                  Edit
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Fragment>
  );
};

export default Point;
