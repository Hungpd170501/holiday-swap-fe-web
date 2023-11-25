import { authOptions } from '@/pages/api/auth/[...nextauth]';
import axios from 'axios';
import { getServerSession } from 'next-auth';

export default async function GetListApartment() {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };
    const listApartment = await axios.get(
      `${process.env.API_URL}/apartment-for-rent?guest=1&numberBedsRoom=1&numberBathRoom=1&pageNo=0&pageSize=9&sortBy=id&sortDirection=asc`,
      config
    );

    if (!listApartment) {
      return null;
    }

    return listApartment.data;
  } catch (error) {}
}
