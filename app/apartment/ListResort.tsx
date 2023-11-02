'use client';

import React, { Fragment, useEffect, useRef, useState } from 'react';
import CardListResort from '../components/listResort/CardListResort';
import axios from 'axios';
import { Pagination } from 'flowbite-react';
import { format } from 'date-fns';

interface ListResortProps {
  listApartment: any;
  resortId: any;
  dateRange: any;
  numberOfGuest: any;
}

const ListResort: React.FC<ListResortProps> = ({
  listApartment,
  resortId,
  dateRange,
  numberOfGuest,
}) => {
  const [page, setPage] = useState<number>(1);
  const [listResort, setListResort] = useState<any>(listApartment);
  const [totalPages, setTotalPages] = useState<any>(listApartment.totalPages);

  useEffect(() => {
    const getList = async () => {
      const list = await axios.get(
        `https://holiday-swap.click/api/v1/apartment-for-rent?checkIn=${format(
          new Date(dateRange.startDate),
          'yyyy-MM-dd'
        )}&checkOut=${format(new Date(dateRange.endDate), 'yyyy-MM-dd')}&min=0&max=1000000&pageNo=${
          page - 1
        }&guest=${numberOfGuest}&resortId=${resortId}&pageSize=9&sortBy=id`
      );
      setListResort(list.data);
      setTotalPages(list.data?.totalPages);
    };
    getList();
  }, [page, numberOfGuest, resortId]);

  const handleChangePage = async (pageNo: any) => {
    if (pageNo !== page) {
      setPage(pageNo + 1);
    }
  };

  return (
    <Fragment>
      <div className="bg-white px-[50px] flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-20 py-[30px] w-full">
          {listResort && listResort.content.length > 0 ? (
            listResort?.content?.map((item: any, index: number) => (
              <CardListResort key={index} data={item} />
            ))
          ) : (
            <div className="w-full h-full text-3xl font-bold">Not have apartment</div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center mb-7">
        {listResort && listResort.content.length > 0 ? (
          <Pagination
            currentPage={page}
            onPageChange={(page: number) => {
              setPage(page);
            }}
            showIcons
            totalPages={totalPages}
          />
        ) : (
          ''
        )}
      </div>
    </Fragment>
  );
};

export default ListResort;
