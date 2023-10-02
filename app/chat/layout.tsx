import React from "react";
import SidebarChat from "./components/SidebarChat";
import getConversations from "../actions/getConversations";
import ConversationList from "./components/ConversationList";

export default async function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  return (
    <SidebarChat>
      <ConversationList initialItems={conversations} />
      <div className="h-full">{children}</div>
    </SidebarChat>
  );
}
