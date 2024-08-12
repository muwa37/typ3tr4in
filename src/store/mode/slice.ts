import { TimeMode } from '@/types/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { timeMode: TimeMode } = {
  timeMode: 15,
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setTimeMode(state, action: PayloadAction<TimeMode>) {
      state.timeMode = action.payload;
    },
  },
});

export default modeSlice.reducer;

export const { setTimeMode } = modeSlice.actions;
