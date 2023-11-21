import React from 'react';
import GetPostUser from '../actions/getPostUser';
import PostBlog from './PostBlog';

export default async function PostBlogPage() {
  const post = await GetPostUser();
  return <PostBlog post={post} />;
}
