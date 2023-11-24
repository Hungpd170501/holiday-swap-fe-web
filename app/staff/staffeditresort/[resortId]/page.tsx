import GetResortById from '@/app/actions/getResortById';
import UploadImageResortEdit from '@/app/components/staff/UploadImageResortEdit';
import requireAuth from '@/app/libs/requireAuth';
import React from 'react';
import InputAmenitiesType from './InputAmenitiesType';
import EditResort from './EditResort';
import GetAmenityResortType from '@/app/actions/getAmenityResortType';
import GetPropertyType from '@/app/actions/getPropertyType';

interface IParams {
  resortId: string;
}

export default async function StaffEditResort({ params }: { params: IParams }) {
  const resortDetail = await GetResortById(params);
  const amineties = await GetAmenityResortType();
  const propertyTypes = await GetPropertyType();

  return requireAuth(
    <div>
      <div className="">
        Dashboard {'>'} <span className="text-common">Update resort</span>
      </div>
      
      <EditResort resortDetail={resortDetail} amineties={amineties} propertyTypes={propertyTypes} />
    </div>,
    [3]
  );
}
