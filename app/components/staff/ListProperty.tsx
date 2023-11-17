'use client';
import SelectRouterStaff from './SelectRouterStaff';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

import Highlighter from 'react-highlight-words';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table, Tag } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type {
  FilterConfirmProps,
  FilterValue,
  SorterResult,
  TablePaginationConfig,
} from 'antd/es/table/interface';

import axios from '@/app/libs/axios';
import { blue, red } from '@mui/material/colors';
export default function ListProperty() {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState<PropertyType[]>();
  const [resort, setResort] = useState<ResortType[]>();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
      showSizeChanger: true,
      showQuickJumper: true,
      defaultCurrent: 1,
    },
  });
  useEffect(() => {
    fetchProperties();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<PropertyType>
  ) => {
    setTableParams({
      pagination,
      filters,
      sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setProperties([]);
    }
  };
  const fetchProperties = () => {
    console.log('filters: ', tableParams.filters);
    let url = 'http://localhost:8080/api/v1/properties';
    let resortId = `?resortId={s}`;
    let propertyName = `&propertyName=${tableParams.filters?.propertyName ?? ''}`;
    let status = `&status=${tableParams.filters?.status ?? ''}`;
    let isDeleted = `&isDeleted=${tableParams.filters?.isDeleted ?? ''}`;
    let pageNo = `?pageNo=${
      tableParams.pagination?.current !== undefined ? tableParams.pagination.current - 1 : 0
    }`;
    let pageSize = `&pageSize=${tableParams.pagination?.pageSize ?? ''}`;
    let sortDirection = `&sortDirection=${
      tableParams.sorter?.order == 'ascend' ? 'asc' : 'desc' ?? ''
    }`;
    let sortBy = `&sortBy=${tableParams.sorter?.columnKey ?? ''}`;
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url
        .concat(pageNo)
        .concat(pageSize)
        .concat(sortBy)
        .concat(sortDirection)
        .concat(isDeleted)
        .concat(propertyName)
        .concat(status),
      headers: {},
    };

    setLoading(true);
    axios
      .request(config)
      .then((response) => {
        setLoading(false);
        console.log('content: ', response.data);
        setProperties(response.data.content);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: response.data.totalElements,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<PropertyType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            danger
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    // onFilter: (value, record) =>
    //   record[dataIndex]
    //     .toString()
    //     .toLowerCase()
    //     .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<PropertyType> = [
    // {
    //   title: 'id',
    //   dataIndex: 'id',
    //   key: 'id',
    //   sorter: true,
    // },
    {
      title: 'Property Name',
      dataIndex: 'propertyName',
      key: 'propertyName',

      ...getColumnSearchProps('propertyName'),
      sorter: true,
    },
    {
      title: 'Property Description',
      dataIndex: 'propertyDescription',
      key: 'propertyDescription',
    },
    {
      title: 'Is Deleted',
      dataIndex: 'isDeleted',
      key: 'isDeleted',
      filters: [
        {
          text: 'True',
          value: 'true',
        },
        {
          text: 'False',
          value: 'false',
        },
      ],
      // onFilter: (value: string, record) => record.address.indexOf(value) === 0,
      render: (isDeleted) => {
        let color = isDeleted == true ? 'red' : 'green';
        // if (tag === 'loser') {
        //   color = 'volcano';
        // }
        return (
          <Tag color={color} key={isDeleted}>
            {isDeleted.toString().toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filterMode: 'tree',
      filters: [
        {
          text: 'Active',
          value: 'ACTIVE',
        },
        {
          text: 'Deactivate',
          value: 'DEACTIVATE',
        },
        {
          text: 'No Longer In Business',
          value: 'NO_LONGER_IN_BUSINESS',
        },
      ],
      // onFilter: (value: string, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'Resort',
      dataIndex: 'resort',
      key: 'resort',
      render: (resort) => `${resort.resortName}`,
      sorter: true,
      filterMode: 'tree',
      filterSearch: true,
      filters: [
        {
          text: 'Active',
          value: 'ACTIVE',
        },
        {
          text: 'Deactivate',
          value: 'DEACTIVATE',
        },
        {
          text: 'No Longer In Business',
          value: 'NO_LONGER_IN_BUSINESS',
        },
      ],
    },
    {
      title: 'Action',
      render: (_, record) => (
        <Space size="middle">
          <a>Detail</a>
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className="mt-8 mb-10">
        <div>
          Staff {'> '}
          <span className="text-common">List property</span>
        </div>
      </div>
      <SelectRouterStaff />
      <div>
        <Table
          columns={columns}
          dataSource={properties}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={(pagination: any, filters: any, sorter: any) =>
            handleTableChange(pagination, filters, sorter)
          }
        />
      </div>
    </div>
  );
}
interface PropertyType {
  id: number;
  propertyName: string;
  propertyDescription: string;
  numberKingBeds: number;
  numberQueenBeds: number;
  numberSingleBeds: number;
  numberDoubleBeds: number;
  numberTwinBeds: number;
  numberFullBeds: number;
  numberSofaBeds: number;
  numberMurphyBeds: number;
  numberBedsRoom: number;
  numberBathRoom: number;
  roomSize: number;
  isDeleted: boolean;
  status: string;
  resortId: number;
  resort: {
    id: number;
    resortName: string;
    resortDescription: string;
    status: string;
    resortImages: [
      {
        id: number;
        resortId: number;
        link: string;
        deleted: boolean;
      }
    ];
    propertyTypes: [
      {
        id: number;
        propertyTypeName: string;
        propertyTypeDescription: string;
        deleted: boolean;
      }
    ];

    addressLine: string;
    locationFormattedName: string;
    locationDescription: string;
    locationCode: string;
    postalCode: string;
    latitude: number;
    longitude: number;
    deleted: boolean;
  };
  propertyType: {
    id: number;
    propertyTypeName: string;
    propertyTypeDescription: string;
    deleted: boolean;
  };
  propertyView: {
    id: number;
    propertyViewName: string;
    propertyViewDescription: string;
    deleted: boolean;
  };
  inRoomAmenityType: [
    {
      id: number;
      inRoomAmenityTypeName: string;
      inRoomAmenityTypeDescription: string;
      isDeleted: boolean;
      inRoomAmenities: [
        {
          id: number;
          inRoomAmenityName: string;
          inRoomAmenityDescription: string;
          inRoomAmenityLinkIcon: string;
          isDeleted: boolean;
          inRoomAmenityTypeId: number;
        }
      ];
    }
  ];
  propertyImage: [
    {
      id: number;
      propertyId: number;
      link: string;
      deleted: boolean;
    }
  ];
  rating: number;
}
interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  defaultCurrent?: number;
  pageSizeOptions?: string[] | number[];
  filters?: Record<string, FilterValue>;
  sorter?: SorterResult<PropertyType>;
}
type DataIndex = keyof PropertyType;
interface ResortType {}
