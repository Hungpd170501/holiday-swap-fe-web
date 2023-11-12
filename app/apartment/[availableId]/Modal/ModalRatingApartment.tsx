import React, { useEffect, useState } from 'react';
import { Avatar, Modal, Progress, Rate, Select, Typography } from 'antd';
import { Button } from '@material-tailwind/react';
import dayjs from 'dayjs';
import Table, { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
const { Text, Title } = Typography;
import qs from 'qs';
interface DataType {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  login: {
    uuid: string;
  };
}
interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}
const columns: ColumnsType<DataType> = [
  {
    title: 'name',
    key: 'name',
    dataIndex: 'name',
    render: (_, { name }) => (
      <>
        <div>
          <div>
            <div>
              <div className="flex items-center justify-items-stretch border-b pb-1">
                <Avatar>U</Avatar>
                <div className="pl-2">
                  <div>
                    <Text className="text-xs">Kien</Text>
                  </div>
                  <div>
                    <Text style={{ fontSize: 8 }}>Sainte-Hélène, France</Text>
                  </div>
                </div>
              </div>
              <div className="py-1">
                <Rate style={{ fontSize: 10 }} allowHalf defaultValue={2.5} disabled />{' '}
                <Text>{dayjs().toISOString()}</Text>
              </div>
              <div>
                <Text style={{ fontSize: 8 }}>
                  Warm welcome, I recommend, easy to walk to restaurants and barsWarm welcome, I
                  recommend, easy to wa
                </Text>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
];
const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const ModalRatingApartment: React.FC = (props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });
  const fetchData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };
  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<DataType>
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outlined" size="md">
        Show all 39 reviews
      </Button>

      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={false}
      >
        <div style={{ height: '75vh' }} className="flex justify-around m-3 ">
          <div style={{ width: '30%' }} className="border rounded-md mr-8">
            <div>
              <div className="m-2 text-center">
                <p>4.97</p>
                <p>Guest favourite</p>
                <p>
                  One of the most loved homes on Airbnb based on ratings, reviews and reliability
                </p>
              </div>
            </div>
            <div>
              <p className="my-2">Overall rating</p>
              <div>
                <div className="flex">
                  <Text className="mr-2">5</Text>{' '}
                  <Progress percent={50} showInfo={false} strokeColor="black" size="small" />
                </div>
                <div className="flex">
                  <Text className="mr-2">4</Text>{' '}
                  <Progress percent={50} showInfo={false} strokeColor="black" size="small" />
                </div>
                <div className="flex">
                  <Text className="mr-2">3</Text>{' '}
                  <Progress percent={50} showInfo={false} strokeColor="black" size="small" />
                </div>
                <div className="flex">
                  <Text className="mr-2">2</Text>{' '}
                  <Progress percent={50} showInfo={false} strokeColor="black" size="small" />
                </div>
                <div className="flex">
                  <Text className="mr-2">1</Text>{' '}
                  <Progress percent={50} showInfo={false} strokeColor="black" />
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '70%' }} className="border rounded-md">
            <div className="m-2">
              <div className="flex justify-between">
                <Title>39 reviews</Title>
                <Select
                  className="rounded-lg"
                  placeholder="Select a person"
                  style={{ width: 150 }}
                  size={'large'}
                  options={[
                    { value: 'Most recent', label: 'Most recent' },
                    { value: 'Highest rated', label: 'Highest rated' },
                  ]}
                />
              </div>
              <div>
                <Table
                  columns={columns}
                  rowKey={(record) => record.login.uuid}
                  dataSource={data}
                  pagination={tableParams.pagination}
                  loading={loading}
                  onChange={handleTableChange}
                  showHeader={false}
                  scroll={{ y: 450 }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalRatingApartment;
