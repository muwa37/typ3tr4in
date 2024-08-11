import { RootState } from '..';

export const selectLastTryStats = (state: RootState) => state.stat.lastTryStats;
export const selectStats = (state: RootState) => state.stat;
