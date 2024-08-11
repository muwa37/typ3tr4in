import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { time: number } = {
  time: 15,
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setTimeMode(state, action: PayloadAction<number>) {
      state.time = action.payload;
    },
  },
});

export default modeSlice.reducer;

export const { setTimeMode } = modeSlice.actions;
