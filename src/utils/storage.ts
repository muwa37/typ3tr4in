import { StatState } from '@/types/store';

export const saveStatsToLocalStorage = (state: StatState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('trainerStats', serializedState);
  } catch (e) {
    console.error('failed to save in localStorage:', e);
  }
};

export const loadStatsFromLocalStorage = (): StatState | undefined => {
  try {
    const serializedState = localStorage.getItem('trainerStats');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error('failed to load from localStorage:', e);
    return undefined;
  }
};
