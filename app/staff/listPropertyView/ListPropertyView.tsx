'use client';

import { Button, Modal, Table } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react';
import { Pagination } from 'flowbite-react';
import axios from 'axios';
import useEditPropertyViewModal from '@/app/hooks/useEditPropertyViewModal';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import toast from 'react-hot-toast';

interface ListPropertyViewProps {
  propertyViews: any;
}

const ListPropertyView: React.FC<ListPropertyViewProps> = ({ propertyViews }) => {
  const router = useRouter();
  const [propertyViewList, setPropertyViewList] = useState(propertyViews);
  const editPropertyViewModal = useEditPropertyViewModal();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(propertyViews.totalPages);
  const [openModal, setOpenModal] = useState(false);
  const [idDelete, setIdDelete] = useState<any>();
  const axiosAuthClient = useAxiosAuthClient();

  const onPageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    const fetchData = async () => {
      const propertyViews = await axios.get(
        `https://holiday-swap.click/api/v1/property-view?pageNo=${
          currentPage - 1
        }&pageSize=10&sortDirection=desc&sortBy=id`
      );

      if (propertyViews) {
        setPropertyViewList(propertyViews.data);
        setTotalPages(propertyViews.data.totalPages);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleDeleteProperty = (id: any) => {
    axiosAuthClient
      .delete(`https://holiday-swap.click/api/v1/property-view/${id}`)
      .then(() => {
        setOpenModal(false);
        toast.success('Delete property success');
      })
      .catch((response) => {
        setOpenModal(false);
        toast.error(response.response.data.message);
      });
  };

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
            <Table.HeadCell>Property View Name</Table.HeadCell>
            <Table.HeadCell>Property View Description</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {propertyViewList.content.map((item: any, index: any) => (
              <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.id}
                </Table.Cell>
                <Table.Cell>{item.propertyViewName}</Table.Cell>
                <Table.Cell>{item.propertyViewDescription}</Table.Cell>
                <Table.Cell className='flex flex-row gap-3'>
                  <div
                    onClick={() => editPropertyViewModal.onOpen(item)}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </div>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setIdDelete(item.id);
                    }}
                    className="font-medium text-rose-600 hover:underline hover:cursor-pointer dark:text-rose-500"
                  >
                    Delete
                  </div>
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

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Delete property</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Do you want to delete this property
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              color="red"
              className="font-bold"
              onClick={() => handleDeleteProperty(idDelete)}
            >
              I accept
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
};

export default ListPropertyView;
