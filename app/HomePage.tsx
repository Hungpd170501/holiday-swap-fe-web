"use client";

import React, { useEffect, useState } from "react";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import Banner from "./components/banner/Banner";
import TopDestination from "./components/TopDestination";
import TopApartment from "./components/TopApartment";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { fetchToken, onMessageListener } from "./libs/firebaseConfig";

const HomePage = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setTokenFound] = useState(false);
  useEffect(() => {
    fetchToken(setTokenFound);
    onMessageListener()
      .then((payload: any) => {
        setNotification({
          title: payload.notification.title,
          body: payload.notification.body,
        });
        console.log(payload);
      })
      .catch((err) => console.log("failed: ", err));
  }, []);
  return (
    <ClientOnly>
      <Container>
        <div className="pt-32 xl:px-9">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <Banner />
          </div>
          <TopDestination />
          <TopApartment />
        </div>
      </Container>
    </ClientOnly>
  );
};

export default HomePage;
