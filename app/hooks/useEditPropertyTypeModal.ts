import { create } from 'zustand';

interface EditPropertyTypeModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useEditPropertyTypeModal = create<EditPropertyTypeModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditPropertyTypeModal;
