import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any;
  token: string;
}

const initialState: AuthState = {
  user: [],
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<Partial<any>>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setSignOf: () => initialState,
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
