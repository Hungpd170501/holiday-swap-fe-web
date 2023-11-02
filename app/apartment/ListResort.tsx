"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import CardListResort from "../components/listResort/CardListResort";
import axios from "axios";
import { Pagination } from "flowbite-react";

interface ListResortProps {
  listApartment: any;
}

const ListResort: React.FC<ListResortProps> = ({ listApartment }) => {
  const [page, setPage] = useState<number>(1);
  const [listResort, setListResort] = useState<any>(listApartment);
  const [totalPages, setTotalPages] = useState<any>(listApartment.totalPages);

  useEffect(() => {
    const getList = async () => {
      const list = await axios.get(
        `https://holiday-swap.click/api/v1/apartment-for-rent?min=0&max=1000&pageNo=${
          page - 1
        }&pageSize=9&sortBy=id`
      );
      setListResort(list.data);
      setTotalPages(list.data?.totalPages);
    };
    getList();
  }, [page]);

  const handleChangePage = async (pageNo: any) => {
    if (pageNo !== page) {
      setPage(pageNo + 1);
    }
  };

  return (
    <Fragment>
      <div className="bg-white px-[50px] flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-20 py-[30px] w-full">
          {listResort?.content?.map((item: any, index: number) => (
            <CardListResort key={index} data={item} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mb-7">
        <Pagination
          currentPage={page}
          onPageChange={(page: number) => {
            setPage(page);
          }}
          showIcons
          totalPages={totalPages}
        />
      </div>
    </Fragment>
  );
};

export default ListResort;
