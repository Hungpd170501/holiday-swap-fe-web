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
  TablePaginationConfig,
} from 'antd/es/table/interface';

import axios from '@/app/libs/axios';
export default function ListProperty() {
  const [properties, setProperties] = useState<DataType[]>([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const [tableParams,  setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
      showSizeChanger: true,
      showQuickJumper : true
    },
  });
  useEffect(() => {
    fetchProperties();
  }, []);
  const fetchProperties = () => {
    let url = 'https://holiday-swap.click/api/v1/properties';
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
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

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
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
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
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
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
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

  const columns: ColumnsType<DataType> = [
    {
      title: 'propertyName',
      dataIndex: 'propertyName',
      key: 'propertyName',
      // width: '20%',
      ...getColumnSearchProps('propertyName'),
    },
    {
      title: 'propertyDescription',
      dataIndex: 'propertyDescription',
      key: 'propertyDescription',
      ...getColumnSearchProps('propertyDescription'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'isDeleted',
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
      title: 'status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        {
          text: 'ACTIVE',
          value: 'ACTIVE',
        },
        {
          text: 'DEACTIVATE',
          value: 'DEACTIVATE',
        },
        {
          text: 'NO_LONGER_IN_BUSINESS',
          value: 'NO_LONGER_IN_BUSINESS',
        },
      ],
      // onFilter: (value: string, record) => record.address.indexOf(value) === 0,
    },
    {
      title: 'resortId',
      dataIndex: 'resortId',
      key: 'resortId',
    },
    {
      title: 'Action',
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
        <Table columns={columns} dataSource={properties} pagination={tableParams.pagination} />
      </div>
    </div>
  );
}
interface DataType {
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
  propertyType: {
    id: 0;
    propertyTypeName: 'string';
    propertyTypeDescription: 'string';
    deleted: true;
  };
  propertyView: {
    id: 0;
    propertyViewName: 'string';
    propertyViewDescription: 'string';
    deleted: true;
  };
  inRoomAmenityType: [
    {
      id: 0;
      inRoomAmenityTypeName: 'string';
      inRoomAmenityTypeDescription: 'string';
      isDeleted: true;
      inRoomAmenities: [
        {
          id: 0;
          inRoomAmenityName: 'string';
          inRoomAmenityDescription: 'string';
          inRoomAmenityLinkIcon: 'string';
          isDeleted: true;
          inRoomAmenityTypeId: 0;
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
  filters?: Record<string, FilterValue>;
}
type DataIndex = keyof DataType;
