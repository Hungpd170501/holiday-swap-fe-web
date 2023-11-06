'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { BiBlock } from 'react-icons/bi';
import { BsCheck2Circle } from 'react-icons/bs';
import { MdOutlinePending } from 'react-icons/md';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { Table, Dropdown } from 'flowbite-react';
import Image from 'next/image';
import { Pagination } from 'flowbite-react';
import axios from 'axios';

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

const TABLE_HEAD = ['Email & Username', 'Gender', 'Date of birth', 'Phone', 'Role', 'Status', ''];

const statusList = [
  {
    status: 'ACTIVE',
    icon: BsCheck2Circle,
    color: '#2fde26',
  },
  {
    status: 'BLOCKED',
    icon: BiBlock,
    color: '#e62538',
  },
  {
    status: 'PENDING',
    icon: MdOutlinePending,
    color: '#e06d14',
  },
];

interface ListStaffProps {
  listUser?: any;
}

const ListStaff: React.FC<ListStaffProps> = ({ listUser }) => {
  const [userList, setUserList] = useState(listUser);
  const { data: session } = useSession();
  const [popupVisibilities, setPopupVisibilities] = useState(userList?.content.map(() => false));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Số lượng mục trên mỗi trang

  // Tính toán số trang dựa trên số lượng mục và số lượng mục trên mỗi trang
  const pageCount = Math.ceil(listUser?.content.length / itemsPerPage);

  // Hàm xử lý sự kiện khi trang thay đổi
  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  // Sử dụng `.slice()` để lấy danh sách các mục cần hiển thị trên trang hiện tại
  const displayedItems = listUser?.content.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const onPageChange = (page: number) => setCurrentPage(page);

  const [selectedRow, setSelectedRow] = useState<any>(null);

  const handleEditClick = (rowIndex: number) => {
    // Toggle the visibility of the popup for the clicked row
    setPopupVisibilities((prevVisibilities: any) => {
      const newVisibilities = [...prevVisibilities];
      newVisibilities[rowIndex] = !newVisibilities[rowIndex];
      return newVisibilities;
    });

    setSelectedRow(rowIndex);
  };

  const axiosAuthClient = useAxiosAuthClient();

  const handleOnChangeStatus = (id: any, value: any) => {
    const body = value;
    const config = {
      headers: { 'Content-type': 'application/json' },
    };
    axiosAuthClient
      .put(`/users/${id}/status`, body, config)
      .then(() => {
        toast.success('Update status success');
        setUserList((prevUserList: any) =>
          prevUserList.map((user: any) => (user.userId === id ? { ...user, status: value } : user))
        );
      })
      .catch((response) => {
        toast.error(response.response.data.message);
      });
  };

  return (
    <Fragment>
      <div className="text-xl font-bold text-common mb-5">Management Staff</div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Email & Username</Table.HeadCell>
          <Table.HeadCell>Full Name</Table.HeadCell>
          <Table.HeadCell>Gender</Table.HeadCell>
          <Table.HeadCell>Date of birth</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {displayedItems?.map((item: any, index: number) => {
            if (item.role.roleId === 1 || item.role.roleId === 3) {
              return (
                <Table.Row
                  key={item.userId}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap flex flex-row gap-2 items-center dark:text-white">
                    <Image
                      src={item.avatar || '/images/placeholder.jpg'}
                      alt="Avatar"
                      width={50}
                      height={50}
                      className="object-cover rounded-full"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{item.email}</div>
                      <div className="font-base text-sm text-gray-500">{item.username}</div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{item.fullName}</Table.Cell>
                  <Table.Cell>{item.gender}</Table.Cell>
                  <Table.Cell>{format(new Date(item.dob), 'dd-MM-yyyy')}</Table.Cell>
                  <Table.Cell>{item.phone}</Table.Cell>
                  <Table.Cell>{item.role.name}</Table.Cell>
                  <Table.Cell>
                    {(() => {
                      if (item.status === 'ACTIVE') {
                        return (
                          <div className="py-2 px-1 text-sm text-center  bg-slate-200 rounded-md text-green-500">
                            ACTIVE
                          </div>
                        );
                      } else if (item.status === 'BLOCKED') {
                        return (
                          <div className="py-2 px-1 text-sm text-center  bg-slate-200 rounded-md text-rose-500">
                            BLOCKED
                          </div>
                        );
                      } else if (item.status === 'PENDING') {
                        return (
                          <div className="py-2 px-1 text-sm text-center  bg-slate-200 rounded-md text-orange-500">
                            PENDING
                          </div>
                        );
                      }
                    })()}
                  </Table.Cell>
                  <Table.Cell>
                    <Dropdown
                      label=""
                      dismissOnClick={false}
                      renderTrigger={() => (
                        <span className="text-sky-500 hover:underline cursor-pointer">Edit</span>
                      )}
                    >
                      {(() => {
                        if (item.status === 'ACTIVE') {
                          return (
                            <>
                              {statusList.slice(1, 3).map((status: any, index: number) => (
                                <Dropdown.Item
                                  key={index}
                                  value={status.status}
                                  className="flex items-center gap-2"
                                  onClick={() => handleOnChangeStatus(item.userId, status.status)}
                                >
                                  <status.icon size={18} color={status.color} />

                                  <span className={`text-[${status.color}]`}>{status.status}</span>
                                </Dropdown.Item>
                              ))}
                            </>
                          );
                        } else if (item.status === 'BLOCKED') {
                          const newArrray = statusList.filter(
                            (item) => item.status === 'ACTIVE' || item.status === 'PENDING'
                          );
                          return (
                            <>
                              {newArrray.map((status: any, index: number) => (
                                <Dropdown.Item
                                  key={index}
                                  value={status.status}
                                  className="flex items-center gap-2"
                                  onClick={() => handleOnChangeStatus(item.userId, status.status)}
                                >
                                  <status.icon size={18} color={status.color} />

                                  <span className={`text-[${status.color}]`}>{status.status}</span>
                                </Dropdown.Item>
                              ))}
                            </>
                          );
                        } else if (item.status === 'PENDING') {
                          return (
                            <>
                              {statusList.slice(0, 2).map((status: any, index: number) => (
                                <Dropdown.Item
                                  key={index}
                                  value={status.status}
                                  className="flex items-center gap-2"
                                  onClick={() => handleOnChangeStatus(item.userId, status.status)}
                                >
                                  <status.icon size={18} color={status.color} />

                                  <span className={`text-[${status.color}]`}>{status.status}</span>
                                </Dropdown.Item>
                              ))}
                            </>
                          );
                        }
                      })()}
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              );
            }
          })}
        </Table.Body>
      </Table>

      <div className="flex py-5 overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={pageCount}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </Fragment>
  );
};

export default ListStaff;
