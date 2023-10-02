"use client";

import useConversation from "@/app/hooks/useConverastion";
import clsx from "clsx";
import React, { useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import ConversationBox from "./ConversationBox";

interface ConversationListProps {
  initialItems: any;
}

export const conversations = [
  {
    conversationId: 1,
    name: "Phu Hung",
    messages: {
      messageId: 1,
      text: "Hello",
    },
  },
  {
    conversationId: 2,
    name: "Duc Hung",
    messages: {
      messageId: 1,
      text: "Hello new",
    },
  },
];

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems,
}) => {
  const [items, setItems] = useState(conversations);
  const { conversationId, isOpen } = useConversation();
  return (
    <aside
      className={clsx(
        `
                inset-y-0
                pb-20
                lg:pb-0
                lg:left-20
                lg:w-80
                lg:block
                overflow-y-auto
                border-r
                border-gray-200
            `,
        isOpen ? "hidden" : "block w-full left-0"
      )}
    >
      <div className="px-5">
        <div className="flex justify-between mb-4 pt-4">
          <div className="text-2xl font-bold text-neutral-800">Messages</div>
          <div className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition">
            <MdOutlineGroupAdd size={25} />
          </div>
        </div>
        {items?.map((item: any) => (
          <ConversationBox
            key={item.id}
            data={item}
            selected={conversationId === item.id}
          />
        ))}
      </div>
    </aside>
  );
};

export default ConversationList;
