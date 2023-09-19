import React from "react";
import ClientOnly from "../components/ClientOnly";
import RegisterBody from "../components/register/RegisterBody";

export const metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <ClientOnly>
      <RegisterBody />
    </ClientOnly>
  );
}
