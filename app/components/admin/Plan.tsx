"use client";

import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { BsClipboard2PlusFill } from "react-icons/bs";
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
} from "@material-tailwind/react";
import useCreatePlanModal from "@/app/hooks/useCreatePlanModal";

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
  "ID",
  "Plane Name",
  "Description",
  "Price",
  "Price Type",
  "Plan Price Interval",
  "Status",
  "",
];

interface PlanProps {
  plan?: any;
}

const Plan: React.FC<PlanProps> = ({ plan }) => {
  const [planList, setPlanList] = useState<any>(plan);
  const createPlanModal = useCreatePlanModal();

  return <div>Plan</div>;
};

export default Plan;
