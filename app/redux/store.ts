import { configureStore } from "@reduxjs/toolkit";
import apartmentForRentReducer from "./slices/searchApartmentForRentSlice";


export const store = configureStore({
  reducer: {
    apartmentForRent: apartmentForRentReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
