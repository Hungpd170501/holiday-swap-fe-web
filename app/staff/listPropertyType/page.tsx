import React from 'react';
import requireAuth from './../../libs/requireAuth';
import ListPropertyType from './ListPropertyType';
import GetPropertyTypeStaff from '@/app/actions/getPropertyTypeStaff';

export default async function ListPropertyTypePage() {
  const propertyTypes = await GetPropertyTypeStaff();
  return requireAuth(<ListPropertyType propertyTypes={propertyTypes} />, [3]);
}
