import { create } from 'zustand';

interface DeactiveApartmentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useDeactiveApartmentModal = create<DeactiveApartmentModalStore>((set) => ({
  isOpen: false,
  onOpen: () =>
    set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useDeactiveApartmentModal;
