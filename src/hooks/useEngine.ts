import { selectTime } from '@/store/mode/selectors';
import { modifyStats } from '@/store/stat/slice';
import { TrainerState } from '@/types/common';
import { calculateAccuracy, calculateWPM, countErrors } from '@/utils/helpers';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCountdown from './useCountdown';
import useTypings from './useTypings';
import useWords from './useWords';

const useEngine = () => {
  const dispatch = useDispatch();
  const selectedTimeMode = useSelector(selectTime);

  const [trainerState, setTrainerState] = useState<TrainerState>('start');
  const [errors, setErrors] = useState<number>(0);

  const { words, updateWords } = useWords();
  const { timeLeft, startCountdown, resetCountdown } =
    useCountdown(selectedTimeMode);
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(
    trainerState !== 'end'
  );

  const isStarting = trainerState === 'start' && cursor > 0;
  const isWordsFinished = cursor === words.length;

  const reset = useCallback(() => {
    resetCountdown();
    resetTotalTyped();
    setTrainerState('start');
    setErrors(0);
    clearTyped();
    updateWords();
  }, [resetCountdown, resetTotalTyped, clearTyped, updateWords]);

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, Math.min(cursor, words.length));
    const newErrors = countErrors(typed, wordsReached);
    setErrors(prevErrors => prevErrors + newErrors);
    return newErrors;
  }, [typed, words, cursor]);

  useEffect(() => {
    if (isStarting) {
      setTrainerState('run');
      startCountdown();
    }
  }, [isStarting, startCountdown]);

  useEffect(() => {
    if (timeLeft <= 0 && trainerState === 'run') {
      setTrainerState('end');

      const newErrors = sumErrors();
      const currentErrors = errors + newErrors;

      dispatch(
        modifyStats({
          WPM: calculateWPM(selectedTimeMode, totalTyped),
          accuracy: calculateAccuracy(currentErrors, totalTyped),
        })
      );
    }
  }, [timeLeft, trainerState, sumErrors]);

  useEffect(() => {
    if (isWordsFinished) {
      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [clearTyped, isWordsFinished, updateWords, sumErrors]);

  return { trainerState, words, typed, errors, reset, timeLeft, totalTyped };
};

export default useEngine;
