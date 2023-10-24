import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

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

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    console.log(permission);

    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          " BLmQDlFHNaqPD4qF1hr_9I9Nj0NhGMb48VRVvVWjwExBMqeB6DKahaipG5R5DvY9g3G360QF3MDF1RWzYGrnZmE24",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("current token", currentToken);
        } else {
          console.log("can not get token");
        }
      });
    } else {
      console.log("do not have commist");
    }
  });
}

requestPermission();
