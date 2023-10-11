"use client";

import React, { Fragment, useEffect, useState } from "react";
import CardListResort from "../components/listResort/CardListResort";
import Pagination from "../components/Pagination";
import getListResort from "../actions/getListResort";
import axios from "axios";

const ListResort = () => {
  const [page, setPage] = useState<string>("0");
  const [listResort, setListResort] = useState<any>();
  const [totalPages, setTotalPages] = useState<any>();

  useEffect(() => {
    const getList = async () => {
      const list = await axios.get(
        `https://holiday-swap.click/api/v1/resorts?pageNo=${page}&pageSize=9`
      );
      setListResort(list.data);
      setTotalPages(list.data?.totalPages);
    };
    getList();
  }, [page]);

  const handleChangePage = async (pageNo: any) => {
    setPage(pageNo);
  };

  return (
    <Fragment>
      <div className="bg-white px-[50px] flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-20 py-[30px]">
          {listResort?.content?.map((item: any) => (
            <CardListResort key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center mb-7">
        <Pagination totalPages={totalPages} onPageChange={handleChangePage} />
      </div>
    </Fragment>
  );
};

export default ListResort;
