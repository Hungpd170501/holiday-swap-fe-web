import { create } from 'zustand';

interface EditPropertyViewModalStore {
  isOpen: boolean;
  propertyView: any;
  onOpen: (propertyView: any) => void;
  onClose: () => void;
}

const useEditPropertyViewModal = create<EditPropertyViewModalStore>((set) => ({
  isOpen: false,
  propertyView: null,
  onOpen: (propertyView: any) => set({ isOpen: true, propertyView: propertyView }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditPropertyViewModal;
