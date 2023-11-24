import { create } from 'zustand';

interface EditPropertyTypeModalStore {
  isOpen: boolean;
  propertyType: any;
  onOpen: (propertyType: any) => void;
  onClose: () => void;
  isSuccess: boolean;
  onEditSuccess: () => void;
}
interface IPropertyType {
  id: number;
  propertyTypeName: string;
  propertyTypeDescription: string;
  deleted: boolean;
}
const useEditPropertyTypeModal = create<EditPropertyTypeModalStore>((set) => ({
  isOpen: false,
  propertyType: null,
  onOpen: (propertyType: any) => set({ isOpen: true, propertyType: propertyType }),
  onClose: () => set({ isOpen: false }),
  isSuccess: false,
  onEditSuccess: () => set({ isSuccess: true }),
}));

export default useEditPropertyTypeModal;
