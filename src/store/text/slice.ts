import { createSlice } from '@reduxjs/toolkit';
import { paragraph } from 'txtgen';

const initialState: { text: string } = {
  text: paragraph(10),
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText(state) {
      state.text = paragraph(10);
    },
  },
});

export default textSlice.reducer;

export const { setText } = textSlice.actions;
