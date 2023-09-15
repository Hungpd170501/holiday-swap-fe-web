import { useRouter } from "next/navigation";
import React from "react";

const ButtonLoginHeader = () => {
  const route = useRouter();
  return (
    <button
      onClick={() => route.push("/login")}
      className="px-5 py-2 bg-common hover:bg-sky-500 text-base text-white font-bold rounded-lg"
    >
      Login
    </button>
  );
};

export default ButtonLoginHeader;
