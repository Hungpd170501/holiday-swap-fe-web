'use client';

import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import CardListResort from '../components/listResort/CardListResort';
import axios from 'axios';
import { Pagination } from 'flowbite-react';
import { format } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface ListResortProps {
  listApartment?: any;
  resortId: any;
  dateRange: any;
  numberOfGuest: any;
  currentUser: any;
}

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(new Date().getTime() + 24 * 60 * 60 * 100000000),
  key: 'selection',
};

const ListResort: React.FC<ListResortProps> = ({
  listApartment,
  resortId,
  dateRange,
  numberOfGuest,
  currentUser,
}) => {
  const [page, setPage] = useState<number>(1);
  const [listResort, setListResort] = useState<any>();
  const [resortIdValue, setResortIdValue] = useState<any>();
  const [numberOfGuestValue, setNumberOfGuestValue] = useState<number>(0);
  const [initialDate, setInitialDate] = useState(initialDateRange);
  const [dateRangeNew, setDateRangeNew] = useState<any>(initialDateRange);
  const [totalPages, setTotalPages] = useState<any>();
  const { data: session } = useSession();

  const searchParams = useSearchParams();
  const resortIdParams = searchParams?.get('resortId');
  const dateRangeParamsSearch = searchParams?.get('dateRange');
  const numberOfGuestParams = searchParams?.get('numberOfGuest');
  const router = useRouter();
  const isMounted = useRef(false);

  // useEffect(() => {
  //   setDateRangeNew(dateRange);

  //   if (dateRangeParamsSearch) {
  //     dateRangeParams = JSON.parse(searchParams?.get('dateRange') ?? '');
  //   }
  // }, [dateRange, dateRangeParamsSearch]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (dateRangeParamsSearch) {
      const JSONDateRange = JSON.parse(dateRangeParamsSearch);
      const newDate = {
        key: 'selection',
        startDate: new Date(JSONDateRange.startDate),
        endDate: new Date(JSONDateRange.endDate),
      };
      setDateRangeNew(newDate);
    }
    if (resortIdParams) {
      setResortIdValue(resortIdParams);
    }

    if (numberOfGuestParams) {
      setNumberOfGuestValue(Number(numberOfGuestParams));
    }
  }, [resortIdParams, dateRangeParamsSearch, numberOfGuestParams]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://holiday-swap.click/api/v1/apartment-for-rent', {
        params: {
          resortId: resortIdValue,
          checkIn: format(dateRangeNew.startDate, 'yyyy-MM-dd'),
          checkOut: format(dateRangeNew.endDate, 'yyyy-MM-dd'),
          guest: numberOfGuestValue,
          pageNo: page - 1, // API uses zero-based indexing
          pageSize: 12, // Adjust as needed
          sortBy: 'startTime',
          sortDirection: 'asc',
        },
      });

      if (isMounted.current) {
        setListResort(response.data);
        setTotalPages(response.data.totalPages);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error as needed
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, resortIdValue, dateRangeNew, numberOfGuestValue]);

  return (
    <Fragment>
      <div className="bg-white px-[20px] flex flex-col items-center justify-center xl:px-[50px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-5 py-[30px] w-full">
          {listResort && listResort.content.length > 0 ? (
            listResort?.content?.map((item: any, index: number) => (
              <CardListResort key={index} data={item} />
            ))
          ) : (
            <div className="w-full md:col-span-2 lg:col-span-3 xl:col-span-4 col-span-1 h-[500px] text-3xl font-bold justify-center">
              Not have apartment. You can search more apartment
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center mb-7">
        {listResort && listResort.totalElements > listResort.pageable.pageSize ? (
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
