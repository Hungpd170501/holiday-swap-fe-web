'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { Input, theme } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MdStar } from 'react-icons/md';
import getListResortForRent from '../actions/getListResortForRent';
import { Pagination } from 'flowbite-react';
import getListApartmentForRent from '../actions/getListApartmentForRent';
import {
  CalendarOutlined,
  CaretRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import GallerySlider from './map/AnyReactComponent/GallerySlider';
interface IPageable {
  pageNo: number;
  pageSize: number;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
}
interface IPageableAparment {
  pageNo: number;
  pageSize: number;
  totalPages?: number;
}
interface IParams {
  locationName?: string;
  checkIn?: string;
  checkOut?: string;
  min?: number;
  max?: number;
  guest?: number;
  numberBedsRoom?: number;
  numberBathRoom?: number;
  listOfInRoomAmenity?: number[];
  listOfPropertyView?: number[];
  listOfPropertyType?: number[];
}

// interface CaroselResortAndApartmentProps {
//   listResort?: any;
// }

const CaroselResortAndApartment: React.FC = ({}) => {
  const route = useRouter();
  const [pageable, setPageable] = useState<IPageable>({
    pageNo: 0,
    pageSize: 5,
    sortBy: 'id',
    sortDirection: 'asc',
  });
  const [params, setParams] = useState<IParams>({
    locationName: undefined,
    checkIn: undefined,
    checkOut: undefined,
    min: undefined,
    max: undefined,
    guest: undefined,
    numberBedsRoom: undefined,
    numberBathRoom: undefined,
    listOfInRoomAmenity: undefined,
    listOfPropertyView: undefined,
    listOfPropertyType: undefined,
  });
  const [listResort, setListResort] = useState([]);
  const [listApartment1, setListApartment1] = useState([]);
  const [listApartment2, setListApartment2] = useState([]);
  const [listApartment3, setListApartment3] = useState([]);
  const [listApartment4, setListApartment4] = useState([]);
  const [listApartment5, setListApartment5] = useState([]);
  const [pageable1, setPageable1] = useState<IPageableAparment>({
    pageNo: 0,
    pageSize: 4,
  });
  const [pageable2, setPageable2] = useState<IPageableAparment>({
    pageNo: 0,
    pageSize: 4,
  });
  const [pageable3, setPageable3] = useState<IPageableAparment>({
    pageNo: 0,
    pageSize: 4,
  });
  const [pageable4, setPageable4] = useState<IPageableAparment>({
    pageNo: 0,
    pageSize: 4,
  });
  const [pageable5, setPageable5] = useState<IPageableAparment>({
    pageNo: 0,
    pageSize: 4,
  });

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  const handleRedirectApartmentDetail = (url: string) => {
    // newDateRange.setNew();
    route.push(url);
  };
  useEffect(() => {
    loadListResortAndApartment();
  }, []);
  const fetchListRsForRent = async () => {
    var rsFetchListResort = await getListResortForRent(pageable);
    setListResort(rsFetchListResort.content);
  };
  const fetchListApartment = async (resortId: number, index: number, pageNo: number) => {
    var rsFetchListApartment = await getListApartmentForRent(resortId, {
      pageNo: pageNo,
      pageSize: 4,
      sortBy: '',
      sortDirection: 'asc',
    });
    switch (index) {
      case 0:
        setListApartment1(rsFetchListApartment.content);
        setPageable1({
          ...pageable1,
          totalPages: rsFetchListApartment.totalPages,
          pageNo: rsFetchListApartment.number,
        });
        break;
      case 1:
        setListApartment2(rsFetchListApartment.content);
        setPageable2({
          ...pageable2,
          totalPages: rsFetchListApartment.totalPages,
          pageNo: rsFetchListApartment.number,
        });
        break;
      case 2:
        setListApartment3(rsFetchListApartment.content);
        setPageable3({
          ...pageable3,
          totalPages: rsFetchListApartment.totalPages,
          pageNo: rsFetchListApartment.number,
        });
        break;
      case 3:
        setListApartment4(rsFetchListApartment.content);
        setPageable4({
          ...pageable4,
          totalPages: rsFetchListApartment.totalPages,
          pageNo: rsFetchListApartment.number,
        });
        break;
      case 4:
        setListApartment5(rsFetchListApartment.content);
        setPageable5({
          ...pageable5,
          totalPages: rsFetchListApartment.totalPages,
          pageNo: rsFetchListApartment.number,
        });
        break;
      default:
        break;
    }
  };
  const loadListResortAndApartment = async () => {
    var rsFetchListResort = await getListResortForRent(pageable);
    setListResort(rsFetchListResort.content);
    rsFetchListResort.content.forEach((element: any, index: any) => {
      fetchListApartment(element.resort.id, index, 0);
    });
  };

  const showCalendar = () => {};

  return (
    <>
      {listResort?.map((element: any, index: number) => {
        {
          var listApartment: any = [];
          //default pageabble
          var pageable: IPageableAparment = { pageNo: 0, pageSize: 4 };
          switch (index) {
            case 0:
              listApartment = listApartment1;
              pageable = pageable1;
              break;
            case 1:
              listApartment = listApartment2;
              pageable = pageable2;
              break;
            case 2:
              listApartment = listApartment3;
              pageable = pageable3;
              break;
            case 3:
              listApartment = listApartment4;
              pageable = pageable4;
              break;
            case 4:
              listApartment = listApartment5;
              pageable = pageable5;
              break;
            default:
              break;
          }
        }
        return (
          <div key={index}>
            <div>
              <div className="w-full flex flex-row justify-end content-end p-4">
                <div className="mt-6 items-center">
                  <div className="h-4"></div>
                  <div className="cursor-pointer border-gray-400 rounded-l-xl">
                    <LeftOutlined className="p-3 h-10" />
                  </div>
                </div>
                <div className="mt-6 items-center">
                  <div className="h-4">Check In</div>
                  <div className=" cursor-pointer border border-gray-400">
                    <CalendarOutlined className="p-3" />
                    <input className="h-10 cursor-pointer rounded-r-lg" value="" />
                  </div>
                </div>
                <div className="mt-6 items-center">
                  <div className="h-4">Check Out</div>
                  <div className="cursor-pointer  border-y  border-r border-gray-400 ">
                    <CalendarOutlined className="p-3" />
                    <input className="h-10 cursor-pointer rounded-r-lg" value="" />
                  </div>
                </div>
                <div className="mt-6 items-center">
                  <div className="h-4"></div>
                  <div className="cursor-pointer border-gray-400 rounded-r-xl">
                    <RightOutlined className="p-3 h-10" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div>{/* <DateRangePicker /> */}</div>
              <div className="grid grid-cols-2 md:grid-cols-12 gap-3 h-[400px] p-4" key={index}>
                <Fragment>
                  <Link
                    href="#"
                    className=" border border-gray-300 rounded-md relative cursor-pointer col-span-2"
                  >
                    <Image
                      className="min-h-[348px] rounded-md "
                      src={element.resort.resortImages[0]?.link}
                      alt=""
                      fill
                    />

                    <div className="absolute bottom-0 text-white  w-full p-4">
                      <div className="text-[20px] uppercase">{element.resort.resortName}</div>
                      {/* <div className="text-common">exploration {'>'}</div> */}
                    </div>
                  </Link>
                  {/* {if(pageabble.totalPages)} */}
                  <div
                    className="relative border border-gray-300 rounded-md cursor-pointer"
                    onClick={() => {
                      var page = pageable.pageNo - 1;
                      fetchListApartment(element.resort.id, index, page);
                    }}
                  >
                    <LeftOutlined />
                  </div>
                  {listApartment?.map((element: any, index: number) => {
                    const startTime = new Date(element.availableTime.startTime);
                    const endTime = new Date(element.availableTime.endTime);
                    return (
                      <Link
                        key={index}
                        className=" relative border border-gray-300 rounded-md cursor-pointer hover:-translate-y-4 hover:duration-500 translate-y-0 duration-500 col-span-2 w-[250px]"
                        href={`/apartment/${element.availableTime.id}?propertyId=${element.coOwnerId.propertyId}&roomId=${element.coOwnerId.roomId}`}
                      >
                        <div>
                          <img
                            className="rounded-t-md h-[170px] w-[100%]"
                            src={element.property.propertyImage[0]?.link}
                            alt=""
                          />
                          <div className="px-3 py-2 ">
                            <div>
                              <div className="font-bold">{element.property.propertyName}</div>
                              <div className="text-[14px] py-1">
                                Owner:
                                <span className="text-gray-500">{element.user.fullName}</span>
                              </div>
                              <div className="text-[14px]">{startTime.toDateString()}</div>
                              <div className="text-[14px]">to</div>
                              <div className="text-[14px]">{endTime.toDateString()}</div>
                              <div>
                                {element.property.rating ? (
                                  <div className="flex flex-row items-center">
                                    <div>
                                      <MdStar color="orange" size={20} />
                                    </div>
                                    <div className="flex flex-row items-center gap-1 mt-1">
                                      <div className="text-[14px]">{element.property.rating}</div>
                                      {/* <div className="text-[13px] text-gray-500">(300+)</div> */}
                                    </div>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                            <div className="absolute bottom-0 py-3">
                              <div className="flex flex-row items-center">
                                <div>{element.availableTime.pricePerNight}</div>
                                <img
                                  className="w-[20px] h-[20px]"
                                  src="/images/coin.png"
                                  alt=""
                                />{' '}
                                <div className="text-[13px]"> /night</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  <div
                    className="relative border border-gray-300 rounded-md cursor-pointer"
                    onClick={() => {
                      var page = pageable.pageNo + 1;

                      fetchListApartment(element.resort.id, index, page);
                    }}
                  >
                    <RightOutlined />
                  </div>
                </Fragment>
              </div>
              <div className="flex justify-center">
                {/* <Pagination
                  currentPage={pageable.pageNo + 1}
                  onPageChange={(page: number) => {
                    // setCurrent(page);
                    fetchListApartment(element.resort.id, index, page);
                  }}
                  showIcons
                  totalPages={pageable.totalPages ? pageable.totalPages : 1}
                /> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CaroselResortAndApartment;
