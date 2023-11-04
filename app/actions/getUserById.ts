import axios from 'axios';

interface IParams {
  userId: any;
}

export default async function GetUserById(params: IParams) {
  try {
    const userDetail = await axios.get(`${process.env.API_URL}/users/${params}`);

    if (!userDetail) {
      return null;
    }

    return userDetail.data;
  } catch (error) {}
}
