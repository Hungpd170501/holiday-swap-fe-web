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
import axios from "axios";
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
      .then(async () => {
        toast.success("Update status success");
        const ownership = await axios.get(
          `https://holiday-swap.click/api/co-owners?pageNo=0&pageSize=50&sortBy=property_id`
        );
        setOwnershipUserList(ownership.data);
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      });
  };

  return <div>List approve</div>;
};

export default ListApproveOwnership;
