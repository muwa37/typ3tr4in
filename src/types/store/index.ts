import { LastAttemptStats } from '../common';

export type StatState = {
  attemptCount: number;
  bestWPM: number;
  avgWPM: number;
  worstWPM: number;
  bestAccuracy: number;
  avgAccuracy: number;
  worstAccuracy: number;
  lastAttemptStats: LastAttemptStats;
};
