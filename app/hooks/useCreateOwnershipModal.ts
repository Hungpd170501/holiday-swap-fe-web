import { create } from "zustand";

interface CreateOwnershipModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCreateOwnershipModal = create<CreateOwnershipModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreateOwnershipModal;
