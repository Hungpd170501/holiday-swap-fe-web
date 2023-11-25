import axios from 'axios';

interface IParams {
  postId: string;
}

export default async function GetPostById(params: IParams) {
  try {
    const { postId } = params;
    const post = await axios.get(`https://holiday-swap.click/api/post/get/${postId}`);

    if (!post) {
      return null;
    }

    return post.data;
  } catch (error) {}
}
