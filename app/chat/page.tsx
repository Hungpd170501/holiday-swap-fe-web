import React from "react";
import ChatSidebar from "../components/chat/ChatSidebar";
import ChatContent from "../components/chat/ChatContent";
import ChatRightSidebar from "../components/chat/ChatRightSidebar";
import ChatHeader from "../components/chat/ChatHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Chat() {
  return (
    <div className="mt-[10px] px-8">
      <div className="bg-[#F5F5F7] h-[370px] w-full flex items-center justify-center ">
        <div className="text-5xl mt-10">Message</div>
      </div>

      <ChatHeader />
      <div className="flex flex-row w-full justify-between ">
        <div
          className="col-span-1"
          style={{ overflowY: "auto", maxHeight: "100vh", overflowX: "hidden" }}
        >
          <ChatSidebar />
        </div>
        <div
          className="col-span-1"
          style={{ overflowY: "auto", maxHeight: "100vh", overflowX: "hidden" }}
        >
          <ChatContent />
        </div>
        <div className="col-span-1">
          <ChatRightSidebar />
        </div>
      </div>
    </div>
  );
}
