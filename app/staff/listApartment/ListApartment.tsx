'use client';

import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import useDeactiveApartmentModal from '@/app/hooks/useDeactiveApartmentModal';

import axios from 'axios';
import { format } from 'date-fns';
import { Button, Dropdown, Pagination, Table } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BiBlock } from 'react-icons/bi';
import { BsCheck2Circle } from 'react-icons/bs';
import { MdOutlinePending } from 'react-icons/md';
import Link from 'next/link';
import HeadingDashboard from '@/app/components/HeadingDashboard';

const ListApartment = () => {
    const deactiveApartmentModal = useDeactiveApartmentModal();
  return (
    <div>
      <div className=" mb-10 mt-2">
        <HeadingDashboard
          routerDashboard="/staff"
          pageCurrentContent="List Apartment"
          pageCurrentRouter="/staff/listApartment"
        />
      </div>

      <Fragment>
        <Table>
          <Table.Head>
            <Table.HeadCell className="w-[130px]">Resort</Table.HeadCell>
            <Table.HeadCell className="w-[130px]">Property</Table.HeadCell>
            <Table.HeadCell className="w-[100px]">Apartment ID</Table.HeadCell>
            <Table.HeadCell className="w-[100px]">User</Table.HeadCell>

            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell className="w-[130px]">Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="w-[250px]">RESORT NAME</Table.Cell>
              <Table.Cell>PROPERTY NAME</Table.Cell>
              <Table.Cell className="w-[140px]">APARTMENT ID</Table.Cell>
              <Table.Cell>FULL NAME</Table.Cell>
              <Table.Cell>Owner forever</Table.Cell>
              <Table.Cell>ACCEPT</Table.Cell>
              <Table.Cell>
                <Dropdown
                  label=""
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <span className="text-sky-500 hover:underline cursor-pointer">Edit</span>
                  )}
                >
                  <Dropdown.Item onClick={deactiveApartmentModal.onOpen} className="flex flex-row items-center gap-x-1 text-rose-500">
                    <BiBlock size={18} color="red" />
                    Deactivate
                </Dropdown.Item>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Fragment>
    </div>
  );
};

export default ListApartment;
