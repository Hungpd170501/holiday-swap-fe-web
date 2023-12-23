import { create } from 'zustand';

interface RechargeStore {
  isRecharge: boolean;
  isBackBooking: boolean;
  bookingLink: any;
  onBookingLink: (bookingLink: any) => void;
  onRecharge: () => void;
  onRechargeReset: () => void;
  onBackBooking: () => void;
  onBackBookingReset: () => void;
}

const useRecharge = create<RechargeStore>((set) => ({
  isRecharge: false,
  isBackBooking: false,
  bookingLink: null,
  onBookingLink: (bookingLink: any) => set({ bookingLink: bookingLink }),
  onRecharge: () => set({ isRecharge: true }),
  onRechargeReset: () => set({ isRecharge: false }),
  onBackBooking: () => set({ isBackBooking: true }),
  onBackBookingReset: () => set({ isBackBooking: false }),
}));

export default useRecharge;
