import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Image from "next/image";
import Footer from "../components/Footer";
import CardBlog from "../components/blogNews/CardBlog";
import SidebarBlogNews from "../components/blogNews/SidebarBlogNews";
import Provider from "../components/Provider";
import getCurrentUser from "../actions/getCurrentUser";

export default async function BlogNews() {
  const currentUser = await getCurrentUser();
  return (
    <>
      <div className="bg-white">
        <Header currentUser={currentUser} />
        <div className="bg-[#F5F5F7] h-[370px] w-full flex items-center justify-center ">
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl mt-10 ">
              Holiday<span className="text-common">Swap</span> News Blog
            </div>
            <div className="mt-4 text-gray-500">"Breaking News"</div>
          </div>
        </div>
        <Container className="mb-10">
          <div className="flex flex-row mt-10">
            <CardBlog />
            <SidebarBlogNews />
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
