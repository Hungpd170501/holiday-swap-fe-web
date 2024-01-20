import { create } from 'zustand';

interface ExchangeApartmentModalStore {
  isOpen: boolean;
  ownershipUser: any;
  onOpen: (ownershipUser: any) => void;
  onClose: () => void;
}

const useExchangeApartmentModal = create<ExchangeApartmentModalStore>((set) => ({
  isOpen: false,
  ownershipUser: null,
  onOpen: (ownershipUser) => set({ isOpen: true, ownershipUser: ownershipUser }),
  onClose: () => set({ isOpen: false }),
}));

export default useExchangeApartmentModal;
