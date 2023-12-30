import useAxiosAuth from '../hooks/useAxiosAuth';
import GetCurrentUser from './getCurrentUser';
import axios from 'axios';

export default async function GetOwnershipStaff() {
  try {
    const ownership = await axios.get(
      `https://holiday-swap.click/api/co-owners?pageNo=0&pageSize=8&sortDirection=desc`
    );

    if (!ownership) {
      return null;
    }

    return ownership.data;
  } catch (error) {}
}
