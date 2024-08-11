import { RootState } from '..';

export const selectTime = (state: RootState) => state.mode.timeMode;
