import { selectTime } from '@/store/mode/selectors';
import { setTimeMode } from '@/store/mode/slice';
import { TimeMode } from '@/types/common';

import useEngine from '@/hooks/useEngine';
import { selectLastAttemptStats } from '@/store/stat/selectors';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './Menu';
import Modal from './StatsModal';
import UserTypings from './UserTypings';
import Words from './Words';
import WordsContainer from './WordsContainer';

const Trainer = () => {
  const dispatch = useDispatch();
  const selectedTimeMode = useSelector(selectTime);
  const lastAttemptStats = useSelector(selectLastAttemptStats);

  const [isStatsModalActive, setIsStatsModalActive] = useState<boolean>(false);

  const { trainerState, words, typed, timeLeft, reset } = useEngine();

  const onSelectTimeModeClick = useCallback(
    (timeMode: TimeMode) => {
      if (timeMode !== selectedTimeMode) {
        dispatch(setTimeMode(timeMode));
        reset();
      }
    },
    [dispatch, selectedTimeMode, reset]
  );

  const onGenerateNewTextClick = useCallback(() => {
    reset();
  }, [reset]);

  const onStatsModalCloseHandler = () => {
    setIsStatsModalActive(false);
  };

  return (
    <section className='h-full flex flex-col justify-center items-center'>
      <Modal
        isActive={isStatsModalActive}
        onModalCloseHandler={onStatsModalCloseHandler}
        stats={lastAttemptStats}
      />

      <div className='max-w-[1000px] h-2/3 m-auto'>
        <Menu
          trainerState={trainerState}
          timeLeft={timeLeft}
          onSelectTimeModeClick={onSelectTimeModeClick}
          onGenerateNewTextClick={onGenerateNewTextClick}
          selectedTimeMode={selectedTimeMode}
        />
        <WordsContainer>
          <Words trainerText={words} />
          <UserTypings
            userInput={typed}
            words={words}
            className='absolute inset-0'
          />
        </WordsContainer>
      </div>
    </section>
  );
};

export default Trainer;
