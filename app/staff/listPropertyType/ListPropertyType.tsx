'use client';

import { Table } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react';
import { Pagination } from 'flowbite-react';
import axios from 'axios';

interface ListPropertyTypeProps {
  propertyTypes: any;
}

const ListPropertyType: React.FC<ListPropertyTypeProps> = ({ propertyTypes }) => {
  const router = useRouter();
  const [propertyTypeList, setPropertyTypeList] = useState(propertyTypes);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(propertyTypes.totalPages);

  const onPageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    const fetchData = async () => {
      const propertyTypes = await axios.get(
        `https://holiday-swap.click/api/v1/property-types?pageNo=${
          currentPage - 1
        }&pageSize=10&sortDirection=desc&sortBy=id`
      );

      if (propertyTypes) {
        setPropertyTypeList(propertyTypes.data);
        setTotalPages(propertyTypes.data.totalPages);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <Fragment>
      <div className="">
        <span className="hover:underline" onClick={() => router.push('/staff')}>
          Dashboard
        </span>{' '}
        {'>'} <span className="text-common">List property view</span>
      </div>

      <div className="py-10">
        <Table>
          <Table.Head>
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Property Type Name</Table.HeadCell>
            <Table.HeadCell>Property Type Description</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {propertyTypeList.content.map((item: any, index: any) => (
              <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.id}
                </Table.Cell>
                <Table.Cell>{item.propertyTypeName}</Table.Cell>
                <Table.Cell>{item.propertyTypeDescription}</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <div className="flex overflow-x-auto sm:justify-center py-3">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ListPropertyType;
