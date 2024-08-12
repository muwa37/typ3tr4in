import { createSlice } from '@reduxjs/toolkit';
import { paragraph } from 'txtgen';

const initialState: { text: string } = {
  text: paragraph(1),
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText(state) {
      state.text = paragraph(1);
    },
  },
});

export default textSlice.reducer;

export const { setText } = textSlice.actions;
