import { LastAttemptStats } from '@/types/common';
import { StatState } from '@/types/store';
import {
  loadStatsFromLocalStorage,
  saveStatsToLocalStorage,
} from '@/utils/storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: StatState = loadStatsFromLocalStorage() || {
  attemptCount: 0,
  bestWPM: 0,
  avgWPM: 0,
  worstWPM: 0,
  bestAccuracy: 0,
  avgAccuracy: 0,
  worstAccuracy: 0,
  lastAttemptStats: {
    WPM: 0,
    accuracy: 0,
  },
};

const modeSlice = createSlice({
  name: 'stat',
  initialState,
  reducers: {
    clearStats(state) {
      state.attemptCount = 0;
      state.bestWPM = 0;
      state.avgWPM = 0;
      state.worstWPM = 0;
      state.bestAccuracy = 0;
      state.avgAccuracy = 0;
      state.worstAccuracy = 0;
      state.lastAttemptStats.WPM = 0;
      state.lastAttemptStats.accuracy = 0;

      saveStatsToLocalStorage(state);
    },
    modifyStats(state, action: PayloadAction<LastAttemptStats>) {
      const { WPM, accuracy } = action.payload;

      state.lastAttemptStats = action.payload;

      state.attemptCount += 1;

      if (state.bestWPM === 0 || WPM > state.bestWPM) {
        state.bestWPM = WPM;
      }

      if (state.worstWPM === 0 || WPM < state.worstWPM) {
        state.worstWPM = WPM;
      }

      state.avgWPM =
        (state.avgWPM * (state.attemptCount - 1) + WPM) / state.attemptCount;

      if (state.bestAccuracy === 0 || accuracy > state.bestAccuracy) {
        state.bestAccuracy = accuracy;
      }

      if (state.worstAccuracy === 0 || accuracy < state.worstAccuracy) {
        state.worstAccuracy = accuracy;
      }

      state.avgAccuracy =
        (state.avgAccuracy * (state.attemptCount - 1) + accuracy) /
        state.attemptCount;

      saveStatsToLocalStorage(state);
    },
  },
});

export default modeSlice.reducer;

export const { clearStats, modifyStats } = modeSlice.actions;
