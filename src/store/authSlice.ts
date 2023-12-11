import { RootState } from "@/store/reduxStore";
import { createSlice } from "@reduxjs/toolkit";

// define a type for the slice state
export type AuthState = {
  isAuthenticated: boolean;
  userData: any;
  userStatus: any;
  isAdmin: boolean;
};

const initialState: AuthState = {
  isAuthenticated: false,
  userData: {},
  userStatus: {},
  isAdmin: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      //Setting global variables for the user here after they login.
      state.isAuthenticated = true;
      state.userStatus = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
export const getUserStatusSelector = (
  state: RootState, // the global state type is defined in store.ts
) => state.auth.userStatus;
