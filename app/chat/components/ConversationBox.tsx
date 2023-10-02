"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import clsx from "clsx";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import Avatar from "./Avatar";
import Image from "next/image";

interface ConversationBoxProps {
  data: any;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
  data,
  selected,
}) => {
  return (
    <div
      //   onClick={handleClick}
      className={clsx(
        `
                w-full
                relative
                flex
                items-center
                space-x-3
                hover:bg-neutral-100
                rounded-lg
                transition
                cursor-pointer
                p-3
                gap-y-3
            `,
        selected ? "bg-neutral-100" : "bg-white"
      )}
    >
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image alt="Avatar" src={"/images/placeholder.jpg"} fill />
      </div>
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center mb-1">
            <p className="text-md font-medium text-gray-900">{data.name}</p>
            {/* {lastMessage?.createdAt && (
              <p className="text-xs text-gray-400 font-light ">
                {format(new Date(lastMessage.createdAt), "p")}
              </p>
            )} */}
          </div>
          <p
            className={clsx(
              `
                            truncate
                            text-sm
                        `,
              data.messages.text ? "text-gray-500" : "text-black font-medium"
            )}
          >
            {data.messages.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;
