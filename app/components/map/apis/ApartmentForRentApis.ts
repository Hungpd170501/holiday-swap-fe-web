import AxiosClient from '@/app/libs/AxiosConfig';
import { Response } from '@/common/models';
import { ApartmentForRentResponse } from '@/app/components/map/type';

const ApartmentForRentApis = {
  getAll: (): Promise<ApartmentForRentResponse> => AxiosClient.get('/apartment-for-rent?guest=1&numberBedsRoom=1&numberBathRoom=1&pageNo=0&pageSize=100&sortBy=id&sortDirection=asc'),
};

export default ApartmentForRentApis;