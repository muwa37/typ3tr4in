import { selectTime } from '@/store/mode/selectors';
import { setTimeMode } from '@/store/mode/slice';
import { TimeMode } from '@/types/common';

import useEngine from '@/hooks/useEngine';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './Menu';
import UserTypings from './UserTypings';
import Words from './Words';
import WordsContainer from './WordsContainer';

const Trainer = () => {
  const dispatch = useDispatch();
  const selectedTimeMode = useSelector(selectTime);

  const { trainerState, words, typed, timeLeft, errors, reset, totalTyped } =
    useEngine();

  const onSelectTimeModeClick = (timeMode: TimeMode) => {
    dispatch(setTimeMode(timeMode));
    reset();
  };
  const onGenerateNewTextClick = () => {
    reset();
  };

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div className='max-w-[1000px] h-2/3 m-auto'>
        <Menu
          trainerState={trainerState}
          timeLeft={timeLeft}
          onSelectTimeModeClick={onSelectTimeModeClick}
          onGenerateNewTextClick={onGenerateNewTextClick}
          selectedTimeMode={selectedTimeMode}
        />
        <WordsContainer>
          <Words key={words} trainerText={words} />
          <UserTypings
            userInput={typed}
            words={words}
            className='absolute inset-0'
          />
        </WordsContainer>
      </div>
    </div>
  );
};

export default Trainer;
