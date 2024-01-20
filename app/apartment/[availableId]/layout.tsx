import ModalExchangeApartment from '@/app/components/modal/ModalExchangeApartment';
import React from 'react';

export default function ApartmentDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row pt-20">
      <div>
        <ModalExchangeApartment />
      </div>
      <main>{children}</main>
    </div>
  );
}
