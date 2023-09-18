import React from "react";
import { BsListUl } from "react-icons/bs";

export default function ChatHeader() {
  return (
    <div className="flex flex-row ">
      <div className="px-3 w-[292px]">
        <div className="flex flex-row items-center justify-between">
          <div className="py-2 text-common">All Message</div>
          <BsListUl size={25} color="blue" />
        </div>
      </div>
      <div>
        <div className="flex flex-row py-2 px-3 bg-white">
          <div className="mr-10">Convertation {">"}</div>
          <div className="mr-10">Pre-approval {">"}</div>
          <div>Finalization</div>
        </div>
      </div>
    </div>
  );
}
