import React from "react";
import SidebarChat from "./components/SidebarChat";
import GetConversations from "../actions/getConversations";
import ConversationList from "./components/ConversationList";

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await GetConversations();
  return (
    <SidebarChat>
      <ConversationList initialItems={conversations} />
      <div className="h-full">{children}</div>
    </SidebarChat>
  );
}
