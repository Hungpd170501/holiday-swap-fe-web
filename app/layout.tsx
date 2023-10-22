import "./globals.css";
import { Poppins } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
import ModalLogin from "./components/modal/ModalLogin";
import ToasterProvider from "./providers/ToastProvider";
import GetCurrentUser from "./actions/getCurrentUser";
import Provider from "./components/Provider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import ModalDetailProperty from "./components/modal/ModalDetailProperty";
import ModalCreatePlan from "./components/modal/ModalCreatePlan";
import ModalCreateOwnership from "./components/modal/ModalCreateOwnership";
import ModalApartmentAmenities from "./components/modal/ModalApartmentAmenities";

const font = Poppins({
  subsets: ["latin"],
  weight: "500",
  preload: true,
});

export const metadata = {
  title: {
    default: "HolidaySwap",
    template: "%s | HolidaySwap",
  },
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await GetCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
          <Suspense fallback={<Loading />}>
            <Header currentUser={currentUser} />
            <ClientOnly>
              <ModalDetailProperty />
              <ModalLogin />
              <ModalCreatePlan />
              <ModalCreateOwnership />
              <ModalApartmentAmenities />
              <ToasterProvider />
            </ClientOnly>

            {children}
            <Footer />
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}
