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
import { useSession } from "next-auth/react";

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
  const { data: session } = useSession();

  const axiosAuthClient = useAxiosAuthClient();

  const handleOnChangeStatus = (id: any, value: any) => {
    const body = value;
    const config = {
      headers: { "Content-type": "application/json" },
    };
    axiosAuthClient
      .put(`/users/${id}/status`, body, config)
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
  return <div>List staff</div>;
};

export default ListStaff;
