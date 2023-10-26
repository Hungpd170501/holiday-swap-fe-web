import { create } from "zustand";

interface EditDateBookingStore {
  isOpen: boolean;
  dateRange: any;
  onOpen: (dateRange: any) => void;
  onClose: () => void;
}

const useEditDateBookingModal = create<EditDateBookingStore>((set) => ({
  isOpen: false,
  dateRange: null,
  onOpen: (dateRange: any) => set({ isOpen: true, dateRange: dateRange }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditDateBookingModal;
