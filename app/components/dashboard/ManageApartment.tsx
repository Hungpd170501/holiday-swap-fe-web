'use client';
import { Image } from 'antd';
import React, { useState, useRef, Fragment } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import EditPublicTime from '../managementApartment/EditPublicTime';
import { BiBlock } from 'react-icons/bi';
import { Upload } from 'antd';
import useCreatePublicTimeModal from '@/app/hooks/useCreatePublicTimeModal';
import useEditApartmentModal from '@/app/hooks/useEditApartmentModal';
import { lastIndexOf } from 'lodash';
import { format } from 'date-fns';

interface ManageApartmentProps {
  detailCoOwner: any;
  propertyDetail: any;
}

const ManageApartment: React.FC<ManageApartmentProps> = ({ detailCoOwner, propertyDetail }) => {
  const imagesData = [
    {
      src: '/images/resort1.jpg',
      alt: 'destination 1',
    },
    {
      src: '/images/resortdetail1.jpg',
      alt: 'destination 2',
    },
    {
      src: '/images/resortdetail2.jpg',
      alt: 'destination 3',
    },
    {
      src: '/images/resortdetail3.jpg',
      alt: 'destination 4',
    },
    {
      src: '/images/resortdetail4.jpg',
      alt: 'destination 5',
    },
  ];
  const [detail, setDetail] = useState(detailCoOwner);
  const [images, setImages] = useState(imagesData);
  const imageInputRef = useRef(null);
  const createModalPublicTime = useCreatePublicTimeModal();
  const EditApartmentModal = useEditApartmentModal();
  const handleDeleteImage = (index: any) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);

      const updatedImages = [...images];
      updatedImages.push({ src: imageURL, alt: 'New Image' });
      setImages(updatedImages);
    }
  };

  return (
    <div>
      <Image.PreviewGroup>
        <div className="py-3">
          <div className="flex flex-row gap-3 w-full">
            <div className="w-[60%]">
              <div className="grid grid-cols-3 gap-3">
                {detail.contractImages.length === 1 ? (
                  <Fragment>
                    {detail.contractImages.map((item: any, index: number) => (
                      <Image
                        className="p-2 border-gray-300 border rounded-md"
                        key={item.id}
                        src={item.link}
                        width="100%"
                        height={500}
                        alt="contract image"
                      />
                    ))}
                  </Fragment>
                ) : (
                  <Fragment>
                    {detail.contractImages.map((item: any, index: number) => (
                      <Image
                        className="p-2 border-gray-300 border rounded-md"
                        key={item.id}
                        src={item.link}
                        width={200}
                        height={200}
                        alt="contract image"
                      />
                    ))}
                  </Fragment>
                )}
                {}
              </div>

              <div className="w-full py-5">
                <div className="border border-gray-500  rounded-md px-5">
                  <div className="py-2">
                    <div className="flex flex-row items-center justify-between gap-3 mb-3 mt-3">
                      <div className="text-[20px] ">Time frame</div>
                    </div>
                    {detail.timeFrames.map((item: any, index: any) => (
                      <div key={index} className="pb-4">
                        <div className="flex flex-row items-center gap-2">
                          <div className="">Week:</div>
                          <div className="flex flex-row items-center w-full justify-between">
                            <div className="text-common">{item.weekNumber}</div>
                          </div>
                        </div>

                        {item.availableTimes.map((available: any, index: number) => (
                          <div
                            key={index}
                            className="flex flex-col justify-center gap-2 ml-5 w-full"
                          >
                            <div className="w-full">
                              Time public:{' '}
                              <span className="text-common">
                                {format(new Date(available.startTime), 'dd/MM/yyyy')} -{' '}
                                {format(new Date(available.endTime), 'dd/MM/yyyy')}
                              </span>
                            </div>

                            <div className="w-full">
                              Status: <span className="text-common">{available.status}</span>
                            </div>

                            <div className="w-full">
                              Price/night:{' '}
                              <span className="text-common">{available.pricePerNight}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%] sticky">
              <div className="border border-gray-500  rounded-md px-5 sticky top-32">
                <div className="py-2">
                  <div className="flex flex-row items-center justify-between gap-3 mb-3 mt-3">
                    <div className="underline text-[20px] ">{propertyDetail?.propertyName}</div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="underline">Status:</div>
                    <div className="flex flex-row items-center w-full justify-between">
                      <div className="underline text-common">{detail.status}</div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-full justify-between py-4">
                    <div>
                      Resort: <span className="text-common">Phu Quoc Resort VIP</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-full justify-between py-4">
                    <div>
                      Type owner:{' '}
                      <span className="text-common">
                        {detail.type === 'DEEDED' ? 'Owner forever' : 'Owner a previod time'}
                      </span>
                    </div>
                  </div>
                  {detail.type === 'RIGHT_TO_USE' ? (
                    <div className="flex flex-row items-center w-full justify-between py-4">
                      <div>
                        Time owner:{' '}
                        <span className="text-common">
                          {new Date(detail.startTime).getFullYear()} -{' '}
                          {new Date(detail.endTime).getFullYear()}
                        </span>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="flex flex-row items-center w-full justify-between ">
                    <div>
                      Week number owner:{' '}
                      {detail.timeFrames.map((item: any, index: number) => (
                        <Fragment key={index}>
                          {item.weekNumber}
                          {index !== detail.timeFrames.length - 1 && ', '}
                        </Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-row items-center w-full justify-between py-4">
                    <div>
                      Apartment ID: <span className="text-common">{detail.id.roomId}</span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center w-full justify-center mt-4">
                    <button
                      onClick={() => createModalPublicTime.onOpen(detail)}
                      className="px-5 py-2 my-3 bg-common text-white rounded-md"
                    >
                      Create public time
                    </button>
                  </div>
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
