"use client";

import {
  Card,
  Chip,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Fragment } from "react";

const TABLE_HEAD = ["ID", "Point Price", "Created Date", "Status", ""];

const TABLE_ROWS = [
  {
    id: "1",
    pointPrice: "1000",
    date: "23/04/18",
    active: true,
  },
  {
    id: "2",
    pointPrice: "2000",
    date: "23/04/18",
    active: false,
  },
  {
    id: "3",
    pointPrice: "3000",
    date: "19/09/17",
    active: false,
  },
  {
    id: "4",
    pointPrice: "4000",
    date: "24/12/08",
    active: false,
  },
  {
    id: "5",
    pointPrice: "5000",
    date: "04/10/21",
    active: false,
  },
];

export default function Point() {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <Fragment>
      <div className="text-xl font-bold text-common mb-9">Management Point</div>
      <div>
        <div className="w-[100px] mb-4">
          <Input variant="standard" label="Price point" />
        </div>
        <Button className="bg-common">Create</Button>
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
            {TABLE_ROWS.map(({ id, pointPrice, date, active }, index) => (
              <tr key={id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {id}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {pointPrice}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className="p-4">
                  <div className="w-max">
                    <Chip
                      variant="ghost"
                      size="sm"
                      value={active ? "Active" : "In-active"}
                      color={active ? "green" : "blue-gray"}
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
            ))}
          </tbody>
        </table>
      </Card>
    </Fragment>
  );
}
