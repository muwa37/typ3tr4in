import { selectTime } from '@/store/mode/selectors';
import { TrainerState } from '@/types/common';
import { countErrors } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useCountdown from './useCountdown';
import useTypings from './useTypings';
import useWords from './useWords';

const useEngine = () => {
  const selectedTimeMode = useSelector(selectTime);
  const [trainerState, setTrainerState] = useState<TrainerState>('start');
  const { words, updateWords } = useWords();
  const { timeLeft, startCountdown, resetCountdown } =
    useCountdown(selectedTimeMode);
  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(
    trainerState !== 'end'
  );
  console.log(timeLeft);

  const [errors, setErrors] = useState(0);

  const isStarting = trainerState === 'start' && cursor > 0;
  const isWordsFinished = cursor === words.length;

  const reset = () => {
    resetCountdown();
    resetTotalTyped();
    setTrainerState('start');
    setErrors(0);
    updateWords();
    clearTyped();
  };

  const sumErrors = () => {
    const wordsReached = words.substring(0, Math.min(cursor, words.length));
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  };

  useEffect(() => {
    if (isStarting) {
      setTrainerState('run');
      startCountdown();
    }
  }, [isStarting, startCountdown, cursor, selectedTimeMode]);

  useEffect(() => {
    if (timeLeft === 0 && trainerState === 'run') {
      setTrainerState('end');
      sumErrors();
    }
  }, [timeLeft, trainerState, sumErrors, selectedTimeMode]);

  useEffect(() => {
    if (isWordsFinished) {
      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [clearTyped, isWordsFinished, updateWords, sumErrors, selectedTimeMode]);

  return { trainerState, words, typed, errors, reset, timeLeft, totalTyped };
};

export default useEngine;
