import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setCountIncrease: (state) => {
      state.count = state.count + 1;
    },
    setCountDecrease: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { setCountDecrease, setCountIncrease } = countSlice.actions;
export default countSlice.reducer;
