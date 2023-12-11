import { apiSlice } from "@/api/apiSlice";
import authSlice, { AuthState } from "@/store/authSlice";
import { configureStore } from "@reduxjs/toolkit";

export type RootState = {
  auth: AuthState;
};

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
});
export { store };
