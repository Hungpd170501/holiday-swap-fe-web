'use client';

import React, { useEffect, useState } from 'react';
import ClientOnly from './components/ClientOnly';
import Container from './components/Container';
import Banner from './components/banner/Banner';
import TopDestination from './components/TopDestination';
import TopApartment from './components/TopApartment';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, deleteToken, onMessage } from 'firebase/messaging';
import { fetchToken, onMessageListener } from './libs/firebaseConfig';

const HomePage = () => {
  const [notification, setNotification] = useState({ title: '', body: '' });
  const [isTokenFound, setTokenFound] = useState(false);
  const [currentToken, setCurrentToken] = useState<any>();

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyD0uYWamp5ev2LzUWwXnFtc3JnBOfJK01w',
      authDomain: 'notificationhotelswap.firebaseapp.com',
      projectId: 'notificationhotelswap',
      storageBucket: 'notificationhotelswap.appspot.com',
      messagingSenderId: '1010730984287',
      appId: '1:1010730984287:web:019494088a8add38284cea',
      measurementId: 'G-HVNTSF2F9R',
    };
    const firebase = initializeApp(firebaseConfig);

    const messaging = getMessaging();

    fetchToken(setTokenFound, messaging);
    onMessageListener(messaging)
      .then((payload: any) => {
        setNotification({
          title: payload.notification.title,
          body: payload.notification.body,
        });
        console.log('Check notification', payload);
      })
      .catch((err) => console.log('failed: ', err));
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
