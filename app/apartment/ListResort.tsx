"use client";

import React, { Fragment, useEffect, useState } from "react";
import CardListResort from "../components/listResort/CardListResort";
import Pagination from "../components/Pagination";
import axios from "axios";

const ListResort = () => {
  const [page, setPage] = useState<string>("0");
  const [listResort, setListResort] = useState<any>();
  const [totalPages, setTotalPages] = useState<any>();

  useEffect(() => {
    const getList = async () => {
      const list = await axios.get(
        `https://holiday-swap.click/api/v1/apartment-for-rent?checkIn=2023-01-01&checkOut=2025-01-01&min=0&max=1000&pageNo=${page}&pageSize=10&sortBy=id`
      );
      setListResort(list.data);
      setTotalPages(list.data?.totalPages);
    };
    getList();
  }, [page]);

  const handleChangePage = async (pageNo: any) => {
    if (pageNo !== page) {
      setPage(pageNo);
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
        {/* <Pagination totalPages={totalPages} onPageChange={handleChangePage} /> */}
      </div>
    </Fragment>
  );
};

export default ListResort;
