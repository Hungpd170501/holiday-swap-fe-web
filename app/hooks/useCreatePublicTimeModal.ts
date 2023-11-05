import { create } from 'zustand';

interface CreatePublicTimeModalStore {
  isOpen: boolean;
  detailCoOwner: any;
  onOpen: (detailCoOwner: any) => void;
  onClose: () => void;
}

const useCreatePublicTimeModal = create<CreatePublicTimeModalStore>((set) => ({
  isOpen: false,
  detailCoOwner: null,
  onOpen: (detailCoOwner: any) => set({ isOpen: true, detailCoOwner: detailCoOwner }),
  onClose: () => set({ isOpen: false }),
}));

export default useCreatePublicTimeModal;
