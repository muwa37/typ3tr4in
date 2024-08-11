import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { timeMode: number } = {
  timeMode: 15,
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setTimeMode(state, action: PayloadAction<number>) {
      state.timeMode = action.payload;
    },
  },
});

export default modeSlice.reducer;

export const { setTimeMode } = modeSlice.actions;
