import { create } from 'zustand';

interface EditPropertyTypeModalStore {
  isOpen: boolean;
  propertyType: any;
  onOpen: (propertyType: any) => void;
  onClose: () => void;
}

const useEditPropertyTypeModal = create<EditPropertyTypeModalStore>((set) => ({
  isOpen: false,
  propertyType: null,
  onOpen: (propertyType: any) => set({ isOpen: true, propertyType: propertyType }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditPropertyTypeModal;
