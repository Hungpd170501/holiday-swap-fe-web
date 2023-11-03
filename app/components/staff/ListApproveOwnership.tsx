'use client';

import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import useCreateOwnershipModal from '@/app/hooks/useCreateOwnershipModal';

import axios from 'axios';
import { format } from 'date-fns';
import { Dropdown, Table } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import { BiBlock } from 'react-icons/bi';
import { BsCheck2Circle } from 'react-icons/bs';
import { MdOutlinePending } from 'react-icons/md';

const TABS = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Monitored',
    value: 'monitored',
  },
  {
    label: 'Unmonitored',
    value: 'unmonitored',
  },
];

const TABLE_HEAD = [
  'Property ID',
  'Room ID',
  'User ID',
  'Start date',
  'End date',
  'Type',
  'Status',
  '',
];

const statusList = [
  {
    status: 'ACCEPTED',
    icon: BsCheck2Circle,
    color: '#2fde26',
  },
  {
    status: 'REJECTED',
    icon: BiBlock,
    color: '#e62538',
  },
  {
    status: 'PENDING',
    icon: MdOutlinePending,
    color: '#e06d14',
  },
];

interface OwnershipProps {
  ownershipStaff?: any;
}

const ListApproveOwnership: React.FC<OwnershipProps> = ({ ownershipStaff }) => {
  const [ownershipUserList, setOwnershipUserList] = useState(ownershipStaff);
  const router = useRouter();

  const axiosAuthClient = useAxiosAuthClient();

  const handleOnChangeStatus = (propertyId: any, userId: any, roomId: any, value: any) => {
    const body = value;
    const config = {
      headers: { 'Content-type': 'application/json' },
    };
    axiosAuthClient
      .put(
        `https://holiday-swap.click/api/co-owners/status?propertyId=${propertyId}&userId=${userId}&roomId=${roomId}&coOwnerStatus=${value}`,
        body,
        config
      )
      .then(async () => {
        toast.success('Update status success');
        const ownership = await axios.get(
          `https://holiday-swap.click/api/co-owners?pageNo=0&pageSize=50&sortBy=property_id`
        );
        setOwnershipUserList(ownership.data);
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      });
  };

  return (
    <Fragment>
      <Table>
        <Table.Head>
          <Table.HeadCell>Property ID</Table.HeadCell>
          <Table.HeadCell>Room ID</Table.HeadCell>
          <Table.HeadCell>User ID</Table.HeadCell>
          <Table.HeadCell>Start date</Table.HeadCell>
          <Table.HeadCell>End date</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {ownershipUserList?.content.map((item: any, index: number) => {
            return (
              <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{item.id.propertyId}</Table.Cell>
                <Table.Cell>{item.id.roomId}</Table.Cell>
                <Table.Cell>{item.id.userId}</Table.Cell>
                <Table.Cell>{format(new Date(item.startTime), 'dd-MM-yyyy')}</Table.Cell>
                <Table.Cell>{format(new Date(item.endTime), 'dd-MM-yyyy')}</Table.Cell>
                <Table.Cell>{item.type === 'DEEDED' ? 'DEEDED' : 'NOT-DEEDED'}</Table.Cell>
                <Table.Cell>
                  {item.status === 'ACCEPTED' ? (
                    <div className="py-2 px-1 text-sm text-center  bg-slate-200 rounded-md text-green-500">
                      ACCEPTED
                    </div>
                  ) : (
                    <div className="py-2 px-1 text-center text-sm bg-slate-200 rounded-md text-rose-600">
                      NOT-ACCEPTED
                    </div>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <span
                    onClick={() =>
                      router.push(
                        `/staff/listapproveOwnership/${item.id.propertyId}/${item.id.userId}/${item.id.roomId}`
                      )
                    }
                    className="text-sky-500 hover:underline cursor-pointer"
                  >
                    Edit
                  </span>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default ListApproveOwnership;
