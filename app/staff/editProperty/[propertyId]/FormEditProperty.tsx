/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, InputNumber, Modal, Row, Select, Upload } from 'antd';
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
const FormEditProperty: React.FC<FormDetailPropertyProps> = ({ propertyId }) => {
  const [propertyDetail, setPropertyDetail] = useState<PropertyType>();
  // const [propertyDetailUpdate, setPropertyDetailUpdate] = useState<PropertyTypeUpdate>();
  const [propertyTypeList, setPropertyTypeList] = useState<PropertyTypeType[]>();
  const [propertyViewList, setPropertyViewList] = useState<PropertyViewType[]>();
  const [inRoomAmenityTypeList, setInRoomAmenityTypeList] = useState<InRoomAmenityTypeType[]>();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [listImageDelete, setListImageDelete] = useState<number[]>([]);
  const [listImageCreate, setListImageCreate] = useState<string[]>([]);
  const [formEditProperty] = Form.useForm();
  const onFinish = async (values: any) => {
    values = { ...values, listImageDelete: listImageDelete };
    var fileCreate = fileList.filter((file) => typeof file.uid !== 'number');
    console.log(values);
    console.log('fileList', fileCreate);
    let data = new FormData();
    fileCreate.map((file) => {
      if (file.originFileObj) {
        data.append('propertyImages', file.originFileObj);
      }
    });
    data.append(
      'propertyUpdateRequest',
      new Blob([JSON.stringify(values)], { type: 'application/json' })
    );
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `http://localhost:8080/api/v1/properties/${propertyId}`,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  // #region propertyImageFunc
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({
    file: newFileAdded,
    fileList: newFileList,
    event: e,
  }) => {
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
  // #endregion
  const filterOption = (input: string, option?: any) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

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
        // console.log(response.data);
        setPropertyDetail(response.data);
        setFileList(
          response.data.propertyImage.map((e: { id: number; link: string }) => {
            var result = {
              uid: e.id,
              status: 'done',
              url: e.link,
            };
            return result;
          })
        );
        formEditProperty.setFieldsValue(response.data);
        formEditProperty.setFieldsValue({
          propertyViewId: response.data.propertyView.id,
        });
        formEditProperty.setFieldsValue({
          propertyTypeId: response.data.propertyType.id,
        });
        formEditProperty.setFieldsValue({
          inRoomAmenities: response.data.inRoomAmenityType.flatMap((e1: any) =>
            e1.inRoomAmenities.map((e2: any) => e2.id)
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchPropertyView = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/v1/property-view/list',
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data);
        setPropertyViewList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchPropertyType = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/v1/property-types/list',
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data);
        setPropertyTypeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchInRoomAmenityType = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/v1/in-room-amenity-types/list',
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data);
        setInRoomAmenityTypeList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchPropertyDetail();
    fetchPropertyView();
    fetchPropertyType();
    fetchInRoomAmenityType();
  }, []);

  function handleRemove(file: UploadFile<any>): boolean | void | Promise<boolean | void> {
    setListImageDelete([...listImageDelete, Number(file.uid)]);
  }

  // function onActionUpload(): string | PromiseLike<string> {
  //   return new Promise((resolve, reject) => {
  //     // Your asynchronous code here, such as making an API call
  //     // resolve('/api/upload'); // Resolve with the upload URL on success
  //     // reject('Error uploading file'); // Reject with an error message on failure
  //   });
  // }

  return (
    <>
      <div>
        <Form
          name="formEditProperty"
          form={formEditProperty}
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          style={{ width: '100%' }}
          initialValues={propertyDetail}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={16}>
            <Col className="gutter-row" span={24}>
              <Form.Item<PropertyTypeUpdate>
                label="Property Name"
                name="propertyName"
                rules={[{ required: true, message: 'Please input your property name!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item<PropertyTypeUpdate>
                label="Property Description"
                name="propertyDescription"
                rules={[{ required: true, message: 'Please input your property description!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                label="Upload"
                name="listImageDelete"
                // rules={[{ required: true, message: 'Please input your property image!' }]}
              >
                <Upload
                  listType="picture-card"
                  // action={() => Promise.resolve(null)}
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  onRemove={handleRemove}
                  multiple
                >
                  {uploadButton}
                  {/* {fileList.length >= 8 ? null : uploadButton} */}
                </Upload>
                <Modal
                  open={previewOpen}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item<PropertyTypeUpdate>
                label="King Bed"
                name="numberKingBeds"
                // rules={[{ required: true, message: 'Please input your property description!' }]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item<PropertyTypeUpdate>
                label="Queen Bed"
                name="numberQueenBeds"
                // rules={[{ required: true, message: 'Please input your property description!' }]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item<PropertyTypeUpdate>
                label="Single Bed"
                name="numberSingleBeds"
                // rules={[{ required: true, message: 'Please input your property description!' }]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item<PropertyTypeUpdate>
                label="Double Bed"
                name="numberDoubleBeds"
                // rules={[{ required: true, message: 'Please input your property description!' }]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>{' '}
            <Col className="gutter-row" span={12}>
              <Form.Item<PropertyTypeUpdate>
                label="Twin Bed"
                name="numberTwinBeds"
                // rules={[{ required: true, message: 'Please input your property description!' }]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item<PropertyTypeUpdate>
                label="Full Bed"
                name="numberFullBeds"
                // rules={[{ required: true, message: 'Please input your property description!' }]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item<PropertyTypeUpdate>
                label="Murphy Bed"
                name="numberMurphyBeds"
                // rules={[{ required: true, message: 'Please input your property description!' }]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item<PropertyTypeUpdate>
                label="Sofa Bed"
                name="numberSofaBeds"
                // rules={[{ required: true, message: 'Please input your property description!' }]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item<PropertyTypeUpdate>
                label="Bed Room"
                name="numberBedsRoom"
                // rules={[{ required: true, message: 'Please input your property description!' }]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item<PropertyTypeUpdate>
                label="Bath Bed"
                name="numberBathRoom"
                // rules={[{ required: true, message: 'Please input your property description!' }]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <Form.Item<PropertyTypeUpdate>
                label="Size"
                name="roomSize"
                // rules={[{ required: true, message: 'Please input your property description!' }]}
              >
                <InputNumber min={0} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item<PropertyTypeUpdate>
            label="Property View"
            name="propertyViewId"
            // initialValue={propertyDetail?.propertyViewId}
            rules={[{ required: true, message: 'Please input your property property view!' }]}
          >
            <Select
              showSearch
              placeholder="Select property view"
              optionFilterProp="children"
              filterOption={filterOption}
              options={propertyViewList?.map((e) => ({
                value: e.id,
                label: e.propertyViewName,
              }))}
            />
          </Form.Item>
          <Form.Item<PropertyTypeUpdate>
            label="Property Type"
            name="propertyTypeId"
            rules={[{ required: true, message: 'Please input your property property type!' }]}
          >
            <Select
              showSearch
              placeholder="Select property type"
              optionFilterProp="children"
              filterOption={filterOption}
              options={propertyTypeList?.map((e) => ({
                value: e.id,
                label: e.propertyTypeName,
              }))}
            />
          </Form.Item>
          <Form.Item<PropertyTypeUpdate>
            label="Property In Room Amentity"
            name="inRoomAmenities"
            rules={[
              { required: true, message: 'Please input your property property in room amenity!' },
            ]}
          >
            <Select
              showSearch
              placeholder="Select property type"
              optionFilterProp="children"
              allowClear
              // defaultValue={propertyDetail?.inRoomAmenityType.map((e1) =>
              //   e1.inRoomAmenities.map((e2) => {
              //     e2.inRoomAmenityTypeId;
              //   })
              // )}
              filterOption={filterOption}
              mode="multiple"
              options={inRoomAmenityTypeList?.map((e) => ({
                label: e.inRoomAmenityTypeName,
                options: e.inRoomAmenities.map((element) => ({
                  label: element.inRoomAmenityName,
                  value: element.id,
                })),
              }))}
            />
          </Form.Item>

          {/* <Form.Item<PropertyTypeUpdate>
            label="Resort"
            name="resortId"
            rules={[{ required: true, message: 'Please input your property status!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<PropertyTypeUpdate>
            label="Status"
            name="status"
            rules={[{ required: true, message: 'Please input your property status!' }]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button danger htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default FormEditProperty;
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
  propertyTypeId: number;
  propertyType: {
    id: number;
    propertyTypeName: string;
    propertyTypeDescription: string;
    deleted: boolean;
  };
  propertyViewId: number;
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
  inRoomAmenities: [number];
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
interface PropertyTypeUpdate {
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
  propertyTypeId: number;
  propertyViewId: number;
  inRoomAmenities: [number];
  listImageDelete: [number];
}
interface PropertyViewType {
  id: number;
  propertyViewName: string;
  propertyViewDescription: string;
  deleted: boolean;
}
interface PropertyTypeType {
  id: number;
  propertyTypeName: string;
  propertyTypeDescription: string;
  deleted: boolean;
}
interface InRoomAmenityTypeType {
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
interface propertyImages {
  propertyImages: string[];
}
