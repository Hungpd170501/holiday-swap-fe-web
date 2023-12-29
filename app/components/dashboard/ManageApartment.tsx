/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
'use client';
import {
  Avatar,
  Card,
  Carousel,
  Image,
  Rate,
  Tag,
  Button,
  Table,
  Space,
  Pagination,
  Popconfirm,
  Empty,
} from 'antd';
import React, { useState, useEffect } from 'react';
import useCreatePublicTimeModal from '@/app/hooks/useCreatePublicTimeModal';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import GetApproveOwnershipById from '@/app/actions/getApproveOwnershipById';
import toast from 'react-hot-toast';
import { UserOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import ModalCoOwnerCalendar from '../modal/ModalCoOwnerCalendar';
import ModalViewImageContractCoOwner from '../modal/ModalViewImageContractCoOwner';
import getRatingByPropertyIdAndRoomId from '@/app/actions/getRatingByPropertyIdAndRoomId';
import GetAvailableTimeByCoOwnerId from '@/app/actions/getAvailableTimeByCoOwnerId';

interface ManageApartmentProps {
  detailCoOwner: any;
  propertyDetail: any;
  slug: any;
}
interface IPagination {
  current: number;
  pageSize: number;
  total: number;
}

const ManageApartment: React.FC<ManageApartmentProps> = ({
  detailCoOwner,
  propertyDetail,
  slug,
}) => {
  const [detail, setDetail] = useState(detailCoOwner);
  const [availableTime, setAvailableTime] = useState<any>();
  const [rating, setRating] = useState<any[]>([]);
  const [pageAvailableTime, setPageAvailableTime] = useState<IPagination>({
    current: 0,
    pageSize: 5,
    total: 0,
  });
  const [loadingTableAvailableTime, setLoadingTableAvailableTime] = useState<boolean>(false);

  const [isOpenTimePublic, setIsOpenTimePublic] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [switchActive, setSwitchActive] = useState(true);
  const createModalPublicTime = useCreatePublicTimeModal();
  const isCreated = createModalPublicTime.isCreated;
  const axiosAuthClient = useAxiosAuthClient();

  useEffect(() => {
    if (isCreated === true) {
      const getData = async () => {
        const detailCoOwner = await GetApproveOwnershipById({ slug });
        if (detailCoOwner) {
          setDetail(detailCoOwner);
          createModalPublicTime.onCreatedReset();
        }
      };
      getData();
    }
  }, [isCreated, createModalPublicTime]);

  const [isOpenTimePublicArr, setIsOpenTimePublicArr] = useState(
    new Array(detailCoOwner.timeFrames.length).fill(false)
  );

  const fetchAvailableTimeByCoOwnerId = async () => {
    setLoadingTableAvailableTime(true);
    var rs = await GetAvailableTimeByCoOwnerId({
      coOwnerId: slug,
      pageNo: pageAvailableTime.current,
      pageSize: 5,
      sortDirection: 'asc',
      sortBy: 'id',
    });
    setLoadingTableAvailableTime(false);
    setAvailableTime(rs.content);
    setPageAvailableTime({ current: rs.number, pageSize: rs.size, total: rs.totalElements });
  };
  const fetchRatingByPropertyIdAndRoomId = async () => {
    var rs = await getRatingByPropertyIdAndRoomId({
      propertyId: detail.property.id,
      roomId: detail.roomId,
      // pageNo: pageAvailableTime.current,
      // pageSize: 5,
      // sortDirection: 'asc',
      // sortBy: 'id',
    });
    setRating(rs.content);
    // setPageAvailableTime({ current: rs.number, pageSize: rs.size, total: rs.totalElements });
  };

  useEffect(() => {
    fetchAvailableTimeByCoOwnerId();
    fetchRatingByPropertyIdAndRoomId();
  }, [JSON.stringify(pageAvailableTime.current)]);

  // Function to toggle isOpenTimePublic for a specific index
  const toggleIsOpenTimePublic = (index: number) => {
    const updatedArr = [...isOpenTimePublicArr];
    updatedArr[index] = !updatedArr[index];
    setIsOpenTimePublicArr(updatedArr);
  };
  const confirm = (id: any) => {
    console.log(id);

    handleDeleteAvailableTime(id);
  };

  const handleDeleteAvailableTime = (id: string) => {
    if (id) {
      axiosAuthClient
        .delete(`available-times/${id}`)
        .then(async () => {
          toast.success('Delete public time successfully!');
          fetchAvailableTimeByCoOwnerId();
        })
        .catch((response) => {
          toast.error(response.response.data.message);
        })
        .finally(() => {
          setOpenModal(false);
        });
    }
  };
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
      render: (startTime: string) => {
        var date = new Date(startTime);
        return <b>{date.toLocaleDateString('en-GB')}</b>;
      },
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      key: 'endTime',
      render: (endTime: string) => {
        var date = new Date(endTime);
        return <b>{date.toLocaleDateString('en-GB')}</b>;
      },
    },
    {
      title: 'Price/Night',
      dataIndex: 'pricePerNight',
      key: 'pricePerNight',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Popconfirm
            title="Delete public time"
            description="Are you sure to delete this public time?"
            onConfirm={() => confirm(record.id)}
            okText="Yes"
            cancelText="No"
            okType="danger"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Image.PreviewGroup>
        <div className="py-3">
          <div className="flex flex-row gap-3 w-full">
            <div className="w-full">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Card
                    title={detail.property.propertyName}
                    extra={
                      <>
                        <Tag color="success">{detail.status}</Tag>
                        <ModalViewImageContractCoOwner image={detail.contractImages} />
                      </>
                    }
                  >
                    <Carousel autoplay>
                      {detail.property.propertyImages.map((e: any, i: number) => (
                        <Image key={i} src={e.link} />
                      ))}
                    </Carousel>

                    <Card bordered={false}>Resort: {detail.property.resort.resortName}</Card>
                    <Card bordered={false}>
                      <div>
                        Type: <Tag>{detail.type}</Tag>
                      </div>
                      <div>
                        Start : <Tag>{new Date(detail.startTime).getFullYear()}</Tag>
                      </div>
                      {detail.type == 'RIGHT_TO_USE' && (
                        <div>
                          End : <Tag>{new Date(detail.endTime).getFullYear()}</Tag>
                        </div>
                      )}
                      <div>
                        Apartment Id:<Tag> {detail.roomId}</Tag>
                      </div>
                      <div>
                        Week Number:
                        <div className="grid grid-cols-7">
                          {detail.timeFrames.map((w: any, i: number) => (
                            <Tag color="green" key={i}>
                              <div> {w.weekNumber}</div>
                            </Tag>
                          ))}
                        </div>
                      </div>
                    </Card>

                    <Card
                      title={'Review'}
                      bordered={false}
                      extra={rating.length > 0 ? <a href="#">View More</a> : <></>}
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {rating.length > 0 ? (
                          rating.slice(0, 2).map((e: any, i: number) => {
                            return (
                              <div key={i}>
                                <Card style={{ marginTop: 8 }}>
                                  <Meta
                                    avatar={
                                      e.user.avatar ? (
                                        <Avatar src={e.user.avatar} size={20} />
                                      ) : (
                                        <Avatar icon={<UserOutlined />} size={20} />
                                      )
                                    }
                                    title={e.user.userName}
                                    description={
                                      <Rate
                                        disabled
                                        defaultValue={e.rating}
                                        className="text-[7px]"
                                      />
                                    }
                                  />
                                  <div className="my-2">Review: {e.comment}</div>
                                </Card>
                              </div>
                            );
                          })
                        ) : (
                          <div>
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                          </div>
                        )}
                      </div>
                    </Card>
                  </Card>
                </div>
                <div className="col-span-2">
                  <Card>
                    {/* <Card title="Statistic" extra={<b>This year</b>}>
                      <div className="flex justify-between">
                        <Statistic
                          title="Booking"
                          value={11.28}
                          precision={2}
                          valueStyle={{ color: '#3f8600' }}
                          prefix={<ArrowUpOutlined />}
                          suffix="%"
                        />
                        <Statistic
                          title="Profit"
                          value={11.28}
                          precision={2}
                          valueStyle={{ color: '#3f8600' }}
                          prefix={<ArrowUpOutlined />}
                          suffix="%"
                        />
                        <Statistic
                          title="Booking"
                          value={11.28}
                          precision={2}
                          valueStyle={{ color: '#3f8600' }}
                          prefix={<ArrowUpOutlined />}
                          suffix="%"
                        />
                      </div>
                    </Card> */}
                    {/* <Card
                      style={{ marginTop: 16 }}
                      title="New booking"
                      extra={<a href="#">View More</a>}
                    >
                      <Row gutter={16}>
                        {arr.map((e: any, i: number) => {
                          return (
                            <Col span={6} key={i}>
                              <Card>
                                <Meta
                                  avatar={
                                    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                                  }
                                  title="User name"
                                  description="Price"
                                />
                                <div>time Book</div>
                                <div>time Book</div>
                              </Card>
                            </Col>
                          );
                        })}
                      </Row>
                    </Card> */}
                    <Card
                      style={{ marginTop: 16 }}
                      title="My public"
                      extra={
                        <ModalCoOwnerCalendar
                          coOwnerId={slug}
                          coOwner={detail}
                          fetchAvailableTimeByCoOwnerId={fetchAvailableTimeByCoOwnerId}
                        />
                      }
                    >
                      <div className="grid justify-items-center">
                        <Table
                          dataSource={availableTime}
                          columns={columns}
                          pagination={false}
                          className="w-full"
                          loading={loadingTableAvailableTime}
                        />
                        {pageAvailableTime?.total != 0 && (
                          <Pagination
                            defaultCurrent={1}
                            defaultPageSize={5}
                            total={pageAvailableTime?.total}
                            current={pageAvailableTime?.current + 1}
                            onChange={(number) => {
                              setPageAvailableTime({
                                ...pageAvailableTime,
                                current: number - 1,
                              });
                            }}
                            className="pt-2"
                          />
                        )}
                      </div>
                    </Card>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Image.PreviewGroup>
    </div>
  );
};

export default ManageApartment;
