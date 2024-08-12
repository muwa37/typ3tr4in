import { LastAttemptStats } from '@/types/common';
import { StatState } from '@/types/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: StatState = {
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
    },
    modifyStats(state, action: PayloadAction<LastAttemptStats>) {
      state.lastAttemptStats = action.payload;

      state.attemptCount += 1;

      state.bestWPM =
        state.bestWPM === 0
          ? action.payload.WPM
          : action.payload.WPM > state.bestWPM && action.payload.WPM;

      state.avgWPM =
        state.avgWPM === 0
          ? action.payload.WPM
          : state.avgWPM + action.payload.WPM / state.attemptCount;

      state.worstWPM =
        state.worstWPM === 0
          ? action.payload.WPM
          : action.payload.WPM < state.worstWPM && action.payload.WPM;

      state.bestAccuracy =
        state.bestAccuracy === 0
          ? action.payload.accuracy
          : action.payload.accuracy > state.bestAccuracy &&
            action.payload.accuracy;

      state.avgAccuracy =
        state.avgAccuracy === 0
          ? action.payload.accuracy
          : state.avgAccuracy + action.payload.accuracy / state.attemptCount;

      state.worstAccuracy =
        state.worstAccuracy === 0
          ? action.payload.accuracy
          : action.payload.accuracy < state.worstAccuracy &&
            action.payload.accuracy;
    },
  },
});

export default modeSlice.reducer;

export const { clearStats, modifyStats } = modeSlice.actions;
