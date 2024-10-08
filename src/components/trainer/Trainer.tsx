import useEngine from '@/hooks/useEngine';
import { selectTime } from '@/store/mode/selectors';
import { setTimeMode } from '@/store/mode/slice';
import { TimeMode } from '@/types/common';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './Menu';
import StatsModal from './StatsModal';
import UserTypings from './UserTypings';
import Words from './Words';
import WordsContainer from './WordsContainer';

const Trainer = () => {
  const dispatch = useDispatch();
  const selectedTimeMode = useSelector(selectTime);

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

  const onStatsModalCloseClick = useCallback(() => {
    setIsStatsModalActive(false);
    reset();
  }, [reset]);

  useEffect(() => {
    if (trainerState === 'end') {
      setIsStatsModalActive(true);
    }
  }, [trainerState]);

  return (
    <section className='h-full flex flex-col justify-center items-center'>
      <div
        className={
          isStatsModalActive
            ? 'bg-black bg-opacity-50 fixed h-screen w-screen top-0 left-0'
            : 'hidden'
        }
      ></div>

      <StatsModal
        isActive={isStatsModalActive}
        onModalCloseClick={onStatsModalCloseClick}
      />

      {!isStatsModalActive && (
        <div className='max-w-[1000px] h-1/2 lg:h-2/3 md:m-auto'>
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
              className={'absolute inset-0'}
            />
          </WordsContainer>
        </div>
      )}
    </section>
  );
};

export default Trainer;
