'use client';

import useCreateOwnershipModal from '@/app/hooks/useCreateOwnershipModal';
import { format } from 'date-fns';
import { Table } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Pagination } from 'flowbite-react';
import axios from 'axios';

const TABLE_HEAD = ['Property ID', 'Room ID', 'Start date', 'End date', 'Type', 'Status', ''];

interface OwnershipProps {
  ownershipUser?: any;
  resort?: any;
  currentUser?: any;
}

const Ownership: React.FC<OwnershipProps> = ({ ownershipUser, resort, currentUser }) => {
  const [ownershipUserList, setOwnershipUserList] = useState(ownershipUser);
  const [listResort, setListResort] = useState(resort);
  const router = useRouter();
  const createOwnershipModal = useCreateOwnershipModal();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(ownershipUser.totalPages);
  const onPageChange = (page: number) => setCurrentPage(page);

  const handleRouter = (propertyId: any, userId: any, roomId: any, status: any) => {
    if (status === 'ACCEPTED') {
      router.push(`/dashboard/ownership/${propertyId}/${userId}/${roomId}`);
    } else {
      toast.error('Apartment can only be edited once the status has been updated to ACCEPTED');
    }
  };

  useEffect(() => {
    const getList = async () => {
      const ownerships = await axios.get(
        `https://holiday-swap.click/api/co-owners?userId=${currentUser.userId}&pageNo=${
          currentPage - 1
        }&pageSize=10&sortBy=property_id`
      );
      setOwnershipUserList(ownerships.data);
      setTotalPages(ownerships.data.totalPages);
    };
    getList();
  }, [currentPage]);

  return (
    <Fragment>
      <div className="text-xl font-bold text-common mb-5">Management Ownership</div>
      <div className="py-6">
        <button
          onClick={() => createOwnershipModal.onOpen(listResort.content, currentUser)}
          className="bg-common py-3 px-5 rounded-lg shadow-md text-white text-lg hover:bg-hover"
        >
          Create ownership apartment
        </button>
      </div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Property ID</Table.HeadCell>
          <Table.HeadCell>Room ID</Table.HeadCell>
          <Table.HeadCell>Start year</Table.HeadCell>
          <Table.HeadCell>End year</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {ownershipUserList?.content.map((item: any, index: number) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{item.id.propertyId}</Table.Cell>
              <Table.Cell>{item.id.roomId}</Table.Cell>
              <Table.Cell>
                {item.startTime !== null ? format(new Date(item.startTime), 'yyyy') : 'Forever'}
              </Table.Cell>
              <Table.Cell>
                {item.endTime !== null ? format(new Date(item.endTime), 'yyyy') : 'Forever'}
              </Table.Cell>
              <Table.Cell>
                {item.type === 'DEEDED' ? 'Owner forever' : 'Owner for a period of time'}
              </Table.Cell>
              <Table.Cell>
                {item.status === 'ACCEPTED' ? (
                  <div className="py-2 px-1 text-sm text-center  bg-slate-200 rounded-md text-green-500">
                    ACCEPTED
                  </div>
                ) : (
                  <div className="py-2 px-1 text-center text-sm bg-slate-200 rounded-md text-orange-500">
                    PENDING
                  </div>
                )}
              </Table.Cell>
              <Table.Cell>
                <div
                  onClick={() =>
                    handleRouter(item.id.propertyId, item.id.userId, item.id.roomId, item.status)
                  }
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 hover:cursor-pointer"
                >
                  <p>Edit</p>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <div className="flex py-5 overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </Fragment>
  );
};

export default Ownership;
