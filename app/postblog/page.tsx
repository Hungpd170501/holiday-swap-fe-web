import React from 'react';
import CardBlog from '../components/blogNews/CardBlog';
import SidebarBlogNews from '../components/blogNews/SidebarBlogNews';
import Container from '../components/Container';

export default function PostBlog() {
  return (
    <Container className="py-32 bg-white">
      <div className="flex flex-row gap-5 ">
        <CardBlog />
        <div className="sticky">
          <SidebarBlogNews />
        </div>
      </div>
    </Container>
  );
}
