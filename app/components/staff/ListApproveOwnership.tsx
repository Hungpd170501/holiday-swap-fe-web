"use client";

import useAxiosAuthClient from "@/app/hooks/useAxiosAuthClient";
import useCreateOwnershipModal from "@/app/hooks/useCreateOwnershipModal";
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
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiBlock } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { MdOutlinePending } from "react-icons/md";

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
  "Property ID",
  "Room ID",
  "User ID",
  "Start date",
  "End date",
  "Type",
  "Status",
  "",
];

const statusList = [
  {
    status: "ACCEPTED",
    icon: BsCheck2Circle,
    color: "#2fde26",
  },
  {
    status: "REJECTED",
    icon: BiBlock,
    color: "#e62538",
  },
  {
    status: "PENDING",
    icon: MdOutlinePending,
    color: "#e06d14",
  },
];

interface OwnershipProps {
  ownershipStaff?: any;
}

const ListApproveOwnership: React.FC<OwnershipProps> = ({ ownershipStaff }) => {
  const [ownershipUserList, setOwnershipUserList] = useState(ownershipStaff);

  const axiosAuthClient = useAxiosAuthClient();

  const handleOnChangeStatus = (
    propertyId: any,
    userId: any,
    roomId: any,
    value: any
  ) => {
    const body = value;
    const config = {
      headers: { "Content-type": "application/json" },
    };
    axiosAuthClient
      .put(
        `https://holiday-swap.click/api/co-owners/status?propertyId=${propertyId}&userId=${userId}&roomId=${roomId}&coOwnerStatus=${value}`,
        body,
        config
      )
      .then(() => {
        toast.success("Update status success");
        setOwnershipUserList((prevUserList: any) =>
          prevUserList.content.map((ownership: any) =>
            ownership.id.userId === userId
              ? { ...ownership, status: value }
              : ownership
          )
        );
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      });
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Manage Ownership
            </Typography>
          </div>
          {/* <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              onClick={() =>
                createOwnershipModal.onOpen(listResort.content, currentUser)
              }
              className="flex items-center gap-3"
              size="sm"
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add ownership
            </Button>
          </div> */}
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
            {ownershipUserList?.content.map((item: any, index: any) => {
              const isLast = index === ownershipUserList.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={item.id.propertyId}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item.id.propertyId}
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
                        {item.id.roomId}
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
                        {item.id.userId}
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
                        16-10-2023
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
                        20-10-2023
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={item.type === "DEEDED" ? "DEEDED" : "NOT-DEEDED"}
                        color={item.type === "DEEDED" ? "green" : "blue-gray"}
                      />
                    </div>
                  </td>

                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={(() => {
                          if (item.status === "ACCEPTED") {
                            return "ACCEPTED";
                          } else if (item.status === "REJECTED") {
                            return "REJECTED";
                          } else if (item.status === "PENDING") {
                            return "PENDING";
                          }
                        })()}
                        color={(() => {
                          if (item.status === "ACTIVE") {
                            return "green";
                          } else if (item.status === "BLOCKED") {
                            return "red";
                          } else if (item.status === "PENDING") {
                            return "orange";
                          }
                        })()}
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
                          if (item.status === "ACCEPTED") {
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
                                          item.id.propertyId,
                                          item.id.userId,
                                          item.id.roomId,
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
                          } else if (item.status === "REJECTED") {
                            const newArrray = statusList.filter(
                              (item) =>
                                item.status === "ACTIVE" ||
                                item.status === "PENDING"
                            );
                            return (
                              <>
                                {newArrray.map((status: any, index: number) => (
                                  <MenuItem
                                    key={index}
                                    value={status.status}
                                    className="flex items-center gap-2"
                                    onClick={() =>
                                      handleOnChangeStatus(
                                        item.id.propertyId,
                                        item.id.userId,
                                        item.id.roomId,
                                        status.status
                                      )
                                    }
                                  >
                                    <status.icon
                                      size={18}
                                      color={status.color}
                                    />

                                    <span className={`text-[${status.color}]`}>
                                      {status.status}
                                    </span>
                                  </MenuItem>
                                ))}
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
                                          item.id.propertyId,
                                          item.id.userId,
                                          item.id.roomId,
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

export default ListApproveOwnership;
