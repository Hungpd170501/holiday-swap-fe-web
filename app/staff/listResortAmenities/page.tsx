import requireAuth from '@/app/libs/requireAuth';
import React from 'react';
import ListResortAmenities from './ListResortAmenities';

export default function ListResortAmenitiesPage() {
  return requireAuth(<ListResortAmenities />, [3]);
}
