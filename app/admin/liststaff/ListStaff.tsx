"use client";

import React, { useState } from "react";

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { BiBlock } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { MdOutlinePending } from "react-icons/md";
import useAxiosAuthClient from "@/app/hooks/useAxiosAuthClient";
import toast from "react-hot-toast";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = [
  "Email & Username",
  "Gender",
  "Date of birth",
  "Phone",
  "Role",
  "Status",
  "",
];

const statusList = [
  {
    status: "ACTIVE",
    icon: BsCheck2Circle,
    color: "#2fde26",
  },
  {
    status: "BLOCKED",
    icon: BiBlock,
    color: "#e62538",
  },
  {
    status: "PENDING",
    icon: MdOutlinePending,
    color: "#e06d14",
  },
];

interface ListStaffProps {
  listUser?: any;
}

const ListStaff: React.FC<ListStaffProps> = ({ listUser }) => {
  const [userList, setUserList] = useState(listUser?.content || []);

  const axiosAuthClient = useAxiosAuthClient();

  const handleOnChangeStatus = (id: any, value: any) => {
    const body = value;
    axiosAuthClient
      .put(`/users/${id}/status`, body)
      .then(() => {
        toast.success("Update status success");
        setUserList((prevUserList: any) =>
          prevUserList.map((user: any) =>
            user.userId === id ? { ...user, status: value } : user
          )
        );
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      });
  };
  return (
    <Card className="h-auto w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" className="text-common">
              Staff list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3 bg-common" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userList.map((item: any, index: number) => {
              const isLast = index === userList.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              if (item.role.roleId === 1 || item.role.roleId === 3) {
                return (
                  <tr key={item.userId}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src="/images/placeholder.jpg"
                          alt="avatar"
                          size="sm"
                        />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.email}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {item.username}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.gender}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {format(new Date(item.dob), "dd-MM-yyyy")}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.phone}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.role.name}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={
                            item.status === "ACTIVE" ? "Active" : "Blocked"
                          }
                          color={
                            item.status === "ACTIVE" ? "green" : "blue-gray"
                          }
                        />
                      </div>
                    </td>

                    <td className={classes}>
                      <Menu placement="bottom-start">
                        <MenuHandler>
                          <Button ripple={false} variant="text">
                            <Tooltip content="Update status">
                              <PencilIcon className="h-4 w-4" />
                            </Tooltip>
                          </Button>
                        </MenuHandler>
                        <MenuList className="max-h-[20rem] max-w-[18rem]">
                          {(() => {
                            if (item.status === "ACTIVE") {
                              return (
                                <>
                                  {statusList
                                    .slice(1, 3)
                                    .map((status: any, index: number) => (
                                      <MenuItem
                                        key={index}
                                        value={status.status}
                                        className="flex items-center gap-2"
                                        onClick={() =>
                                          handleOnChangeStatus(
                                            item.userId,
                                            status.status
                                          )
                                        }
                                      >
                                        <status.icon
                                          size={18}
                                          color={status.color}
                                        />

                                        <span
                                          className={`text-[${status.color}]`}
                                        >
                                          {status.status}
                                        </span>
                                      </MenuItem>
                                    ))}
                                </>
                              );
                            } else if (item.status === "BLOCKED") {
                              const newArrray = statusList.filter(
                                (item) =>
                                  item.status === "ACTIVE" ||
                                  item.status === "PENDING"
                              );
                              return (
                                <>
                                  {newArrray.map(
                                    (status: any, index: number) => (
                                      <MenuItem
                                        key={index}
                                        value={status.status}
                                        className="flex items-center gap-2"
                                        onClick={() =>
                                          handleOnChangeStatus(
                                            item.userId,
                                            status.status
                                          )
                                        }
                                      >
                                        <status.icon
                                          size={18}
                                          color={status.color}
                                        />

                                        <span
                                          className={`text-[${status.color}]`}
                                        >
                                          {status.status}
                                        </span>
                                      </MenuItem>
                                    )
                                  )}
                                </>
                              );
                            } else if (item.status === "PENDING") {
                              return (
                                <>
                                  {statusList
                                    .slice(0, 2)
                                    .map((status: any, index: number) => (
                                      <MenuItem
                                        key={index}
                                        value={status.status}
                                        className="flex items-center gap-2"
                                        onClick={() =>
                                          handleOnChangeStatus(
                                            item.userId,
                                            status.status
                                          )
                                        }
                                      >
                                        <status.icon
                                          size={18}
                                          color={status.color}
                                        />

                                        <span
                                          className={`text-[${status.color}]`}
                                        >
                                          {status.status}
                                        </span>
                                      </MenuItem>
                                    ))}
                                </>
                              );
                            }
                            return null;
                          })()}
                        </MenuList>
                      </Menu>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ListStaff;
