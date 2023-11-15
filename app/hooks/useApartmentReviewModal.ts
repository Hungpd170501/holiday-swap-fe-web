import { create } from 'zustand';

interface AparmentReviewModalStore {
  isOpen: boolean;
  rating: any;
  onOpen: (rating: any) => void;
  onClose: () => void;
}

const useAparmentReviewModal = create<AparmentReviewModalStore>((set) => ({
  isOpen: false,
  rating: null,
  onOpen: (rating: any) => set({ isOpen: true, rating: rating }),
  onClose: () => set({ isOpen: false }),
}));

export default useAparmentReviewModal;
