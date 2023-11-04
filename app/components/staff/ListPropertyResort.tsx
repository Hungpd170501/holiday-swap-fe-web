'use client';
import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  size: number;
  type: string;
  amenity: string;
  action: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Size',
    dataIndex: 'size',
  },
  {
    title: 'Property type',
    dataIndex: 'type',
  },
  {
    title: 'Amenity',
    dataIndex: 'amenity',
    width: 300,
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Property ${i}`,
    size: 32,
    type: `Property Luxury ${i}`,
    amenity: 'Microwave Oven, Bottled Water, Private Bathroom, Wi-Fi',
    action: 'Delete',
  });
}

const ListPropertyResort: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  const paginationConfig = {
    pageSize: 6, // Set the number of rows per page
  };
  return (
    <div>
      {/* <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div> */}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={paginationConfig} // Apply the pagination configuration
      />
    </div>
  );
};

export default ListPropertyResort;
