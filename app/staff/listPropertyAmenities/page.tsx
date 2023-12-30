import React from 'react';
import ListPropertyAmenities from './ListPropertyAmenities';
import requireAuth from '@/app/libs/requireAuth';

export const metadata = {
  title: 'List Property Amenity',
};

export default function ListPropertyAmenitiesPage() {
  return requireAuth(<ListPropertyAmenities />, [3]);
}
