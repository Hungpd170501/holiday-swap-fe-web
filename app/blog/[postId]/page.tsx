import React from 'react';
import Container from '../../components/Container';
import { FaHeart, FaRegComment, FaUser } from 'react-icons/fa6';
import { Image } from 'antd';
import GetPostById from '@/app/actions/getPostById';
import PostDetail from './PostDetail';
import GetCurrentUser from '@/app/actions/getCurrentUser';

interface IParams {
  postId: string;
}

export default async function DetailBlogPage({ params }: { params: IParams }) {
  const postDetail = await GetPostById(params);
  const currentUser = await GetCurrentUser();

  return <PostDetail postDetail={postDetail} currentUser={currentUser} />;
}
