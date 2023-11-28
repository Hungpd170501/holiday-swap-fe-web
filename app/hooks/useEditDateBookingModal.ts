import { create } from 'zustand';

interface EditDateBookingStore {
  isOpen: boolean;
  dateRange: any;
  isSave: boolean;
  onSave: () => void;
  onSaveReset: () => void;
  onOpen: (dateRange: any) => void;
  onClose: () => void;
}

const useEditDateBookingModal = create<EditDateBookingStore>((set) => ({
  isOpen: false,
  dateRange: null,
  isSave: false,
  onOpen: (dateRange: any) => set({ isOpen: true, dateRange: dateRange }),
  onClose: () => set({ isOpen: false }),
  onSave: () => set({ isSave: true }),
  onSaveReset: () => set({ isSave: false }),
}));

export default useEditDateBookingModal;
