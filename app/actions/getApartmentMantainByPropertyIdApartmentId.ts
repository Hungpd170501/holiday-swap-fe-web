import axios from 'axios';
import { notFound } from 'next/navigation';

interface IParams {
  coOwnerId: number;
  pageNo: number;
  pageSize: number;
  sortDirection: 'asc' | 'desc';
  sortBy: string;
}

export default async function getApartmentMantainByPropertyIdApartmentId(
  propertyId: string,
  apartmentId: string
) {
  try {
    const apartmentMantain = await axios.get(
      `https://holiday-swap.click/api/co-owners/getListApartmentMaintain/29/123`
    );

    if (!apartmentMantain) {
      return null;
    }
    return apartmentMantain.data;
  } catch (error) {}
}
