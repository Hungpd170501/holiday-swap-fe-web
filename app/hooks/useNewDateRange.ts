import { create } from 'zustand';

interface NewDateRangeStore {
  isNew: boolean;
  setNew: () => void;
  setNewReset: () => void;
}

const useNewDateRange = create<NewDateRangeStore>((set) => ({
  isNew: false,
  setNew: () => set({ isNew: true }),
  setNewReset: () => set({ isNew: false }),
}));

export default useNewDateRange;
