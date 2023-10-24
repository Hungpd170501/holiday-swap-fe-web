"use client";

import React, { useEffect, useState } from "react";
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import Banner from "./components/banner/Banner";
import TopDestination from "./components/TopDestination";
import TopApartment from "./components/TopApartment";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { fetchToken, onMessageListener } from "./libs/firebaseConfig";

const HomePage = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setTokenFound] = useState(false);
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyD0uYWamp5ev2LzUWwXnFtc3JnBOfJK01w",
      authDomain: "notificationhotelswap.firebaseapp.com",
      projectId: "notificationhotelswap",
      storageBucket: "notificationhotelswap.appspot.com",
      messagingSenderId: "1010730984287",
      appId: "1:1010730984287:web:019494088a8add38284cea",
      measurementId: "G-HVNTSF2F9R",
    };

    // Initialize Firebase

    const firebase = initializeApp(firebaseConfig);

    const messaging = getMessaging();
    const fetchToken = (setTokenFound: any) => {
      return getToken(messaging, {
        vapidKey:
          "BLmQDlFHNaqPD4qF1hr_9I9Nj0NhGMb48VRVvVWjwExBMqeB6DKahaipG5R5DvY9g3G360QF3MDF1RWzYGrnZmE",
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log("current token for client: ", currentToken);
            setTokenFound(true);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
          } else {
            console.log(
              "No registration token available. Request permission to generate one."
            );
            setTokenFound(false);
            // shows on the UI that permission is required
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
          // catch error while creating client token
        });
    };
    const onMessageListener = () =>
      new Promise((resolve) => {
        onMessage(messaging, (payload) => {
          resolve(payload);
        });
      });

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
