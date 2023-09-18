import React from "react";
import Header from "../components/Header";
import Provider from "../components/Provider";
import getCurrentUser from "../actions/getCurrentUser";

export default async function Dashboard() {
  const currentUser = await getCurrentUser();

  return (
    <>
      <Header currentUser={currentUser} />
    </>
  );
}
