import { create } from "zustand";

interface CreateOwnershipModalStore {
  isOpen: boolean;
  dataResort: any;
  currentUser: any;
  onOpen: (dataResort: any, currentUser: any) => void;
  onClose: () => void;
}

const useCreateOwnershipModal = create<CreateOwnershipModalStore>((set) => ({
  isOpen: false,
  dataResort: null,
  currentUser: null,
  onOpen: (dataResort: any, currentUser: any) =>
    set({ isOpen: true, dataResort: dataResort, currentUser: currentUser }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreateOwnershipModal;
