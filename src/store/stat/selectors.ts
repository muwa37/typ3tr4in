import { RootState } from '..';

export const selectLastAttemptStats = (state: RootState) =>
  state.stat.lastAttemptStats;
export const selectStats = (state: RootState) => state.stat;
