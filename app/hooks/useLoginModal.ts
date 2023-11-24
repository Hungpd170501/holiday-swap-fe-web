import { create } from 'zustand';

interface LoginModalStore {
  isOpen: boolean;
  isLogin: boolean;
  onOpen: () => void;
  onClose: () => void;
  onLogin: () => void;
}

const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  isLogin: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onLogin: () => set({ isLogin: true }),
}));

export default useLoginModal;
