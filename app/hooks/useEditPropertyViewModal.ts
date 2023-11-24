import { create } from 'zustand';

interface EditPropertyViewModalStore {
  isOpen: boolean;
  propertyView: any;
  onOpen: (propertyView: any) => void;
  onClose: () => void;
  isSuccess: boolean;
  onEditSuccess: () => void;
}

const useEditPropertyViewModal = create<EditPropertyViewModalStore>((set) => ({
  isOpen: false,
  isSuccess: false,
  propertyView: null,
  onOpen: (propertyView: any) => set({ isOpen: true, propertyView: propertyView }),
  onClose: () => set({ isOpen: false }),
  onEditSuccess: () => set({ isSuccess: true }),
}));

export default useEditPropertyViewModal;
