import { create } from 'zustand';

interface ExchangeApartmentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useExchangeApartmentModal = create<ExchangeApartmentModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useExchangeApartmentModal;
