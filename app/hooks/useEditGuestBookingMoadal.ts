import { create } from "zustand";

interface EditGuestBookingStore {
  isOpen: boolean;
  totalGuest: any;
  apartmentAllowGuest: any;
  onOpen: (totalGuest: any, apartmentAllowGuest: any) => void;
  onClose: () => void;
}

const useEditGuestBookingModal = create<EditGuestBookingStore>((set) => ({
  isOpen: false,
  totalGuest: null,
  apartmentAllowGuest: null,
  onOpen: (totalGuest: any, apartmentAllowGuest: any) =>
    set({
      isOpen: true,
      totalGuest: totalGuest,
      apartmentAllowGuest: apartmentAllowGuest,
    }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditGuestBookingModal;
