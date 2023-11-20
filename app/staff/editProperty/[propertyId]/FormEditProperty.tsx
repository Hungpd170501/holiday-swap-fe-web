/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import axios from 'axios';

interface FormDetailPropertyProps {
  propertyId: number;
}
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
const FormDetailProperty: React.FC<FormDetailPropertyProps> = ({ propertyId }) => {
  const [propertyDetail, setPropertyDetail] = useState<PropertyType>();
  const fetchPropertyDetail = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://holiday-swap.click/api/v1/properties/${propertyId}`,
      headers: {},
    };
    axios
      .request(config)
      .then((response) => {
        setPropertyDetail(response.data);
        setFileList(
          response.data.propertyImage.map((e: { id: number; link: string }) => {
            var result = {
              uid: e.id,
              name: 'image.png',
              status: 'done',
              url: e.link,
            };
            return result;
          })
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchPropertyDetail();
  }, []);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(
      newFileList.map((file) => {
        file.status = 'done';
        return file;
      })
    );
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <div>
        <div className="flex flex-row mb-14 ">
          <div className="mb-5">Property Image</div>
          <Upload
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            multiple
          >
            {uploadButton}
            {/* {fileList.length >= 8 ? null : uploadButton} */}
          </Upload>
          <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
        <div className="flex flex-row mb-14 ">
          <div className="mb-5">Property Name</div>
          <></>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default FormDetailProperty;
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
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
