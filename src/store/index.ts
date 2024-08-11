import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import modeSlice from './mode/slice';
import statSlice from './stat/slice';
import textSlice from './text/slice';

export const store = configureStore({
  reducer: { mode: modeSlice, stat: statSlice, text: textSlice },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
