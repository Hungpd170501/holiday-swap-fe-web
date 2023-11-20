import { authOptions } from '@/pages/api/auth/[...nextauth]';
import axios from 'axios';
import { getServerSession } from 'next-auth';

export default async function GetPostUser() {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.access_token;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };

    const post = await axios.get(`https://holiday-swap.click/api/post/get`, config);

    if (!post) {
      return null;
    }

    return post.data;
  } catch (error) {}
}
