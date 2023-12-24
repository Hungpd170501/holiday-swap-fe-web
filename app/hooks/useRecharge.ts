import { create } from 'zustand';

interface RechargeStore {
  isRecharge: boolean;
  isBackBooking: boolean;
  bookingLink: any;
  isNewDateRange: boolean;
  onNewDateRange: () => void;
  onNewDateRangeReset: () => void;
  onBookingLink: (bookingLink: any) => void;
  onRecharge: () => void;
  onRechargeReset: () => void;
  onBackBooking: () => void;
  onBackBookingReset: () => void;
}

const useRecharge = create<RechargeStore>((set) => ({
  isRecharge: false,
  isBackBooking: true,
  bookingLink: null,
  isNewDateRange: false,
  onBookingLink: (bookingLink: any) => set({ bookingLink: bookingLink }),
  onNewDateRange: () => set({ isNewDateRange: true }),
  onNewDateRangeReset: () => set({ isNewDateRange: false }),
  onRecharge: () => set({ isRecharge: true }),
  onRechargeReset: () => set({ isRecharge: false }),
  onBackBooking: () => set({ isBackBooking: true }),
  onBackBookingReset: () => set({ isBackBooking: false }),
}));

export default useRecharge;
