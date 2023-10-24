import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

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
export const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
onBackgroundMessage(messaging, (payload: any) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  (self as any).registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

export default messaging;
