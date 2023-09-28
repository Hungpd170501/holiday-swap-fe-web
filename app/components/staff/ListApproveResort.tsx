"use client";
import { SearchOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface DataType {
  key: string;
  name: string;
  type: string;
  address: string;
  notification: number;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    name: "Amanoi Resort",
    type: "Spa Resort",
    address: "Son Tra Peninsula, Danang.",
    notification: 1,
  },
  {
    key: "2",
    name: "Six Senses Con Dao",
    type: "Sea Resort",
    address: "Vo Nguyen Giap Street, Khe Dong, Danang.",
  },
  {
    key: "3",
    name: "Banyan Tree Lang Co",
    type: "Moutain Resort",
    address: " Long Beach, Cam Ranh, Khanh Hoa.",
    notification: 4,
  },
  {
    key: "4",
    name: "JW Marriott Phu Quoc Emerald Bay Resort & Spa",
    type: "Lake Resort",
    address: "Nhon Ly, Ninh Hai, Ninh Thuan.",
  },
  {
    key: "5",
    name: "Amanoi Resort",
    type: "Spa Resort",
    address: "Khem Beach, An Thoi, Phu Quoc, Kien ",
    notification: 2,
  },
  {
    key: "6",
    name: "Six Senses Con Dao",
    type: "Sea Resort",
    address: "Con Dao, Ba Ria - Vung Tau.",
  },
  {
    key: "7",
    name: "Banyan Tree Lang Co",
    type: "Moutain Resort",
    address: "Lang Co, Thua Thien-Hue.",
    notification: 5,
  },
  {
    key: "8",
    name: "JW Marriott Phu Quoc Emerald Bay Resort & Spa",
    type: "Lake Resort",
    address: " Long Beach, Cam Ranh, Khanh Hoa.",
  },
];

const ListApproveResort: React.FC = () => {
  const route = useRouter();

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

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
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
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
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
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
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      render: (text, record) => (
        <Link href="/staff/staffdetailresort">{text}</Link>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: "20%",
      ...getColumnSearchProps("type"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Notification",
      dataIndex: "notification",
      key: "notification",
      ...getColumnSearchProps("notification"),
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) => a.address.length - b.address.length,
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default ListApproveResort;
