import { selectTime } from '@/store/mode/selectors';
import { setTimeMode } from '@/store/mode/slice';
import { selectText } from '@/store/text/selectors';
import { setText } from '@/store/text/slice';
import { TimeMode } from '@/types/common';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TrainerMenu from './TrainerMenu';
import UserTypings from './UserTypings';
import Words from './Words';
import WordsContainer from './WordsContainer';

const TypingBox = () => {
  const dispatch = useDispatch();
  const generatedText = useSelector(selectText);
  const selectedTimeMode = useSelector(selectTime);

  const [trainerText, setTrainerText] = useState('');
  const [countdown, setCountdown] = useState(selectedTimeMode);

  useEffect(() => {
    setTrainerText(generatedText.text);
  }, []);

  const onSelectTimeModeClick = (timeMode: TimeMode) => {
    dispatch(setTimeMode(timeMode));
    dispatch(setText());
    setCountdown(timeMode);
    setTrainerText(generatedText.text);
  };
  const onGenerateNewTextClick = () => {
    dispatch(setText());
    setTrainerText(generatedText.text);
  };

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div className='max-w-[1000px] h-2/3 m-auto'>
        <TrainerMenu
          countdown={countdown}
          onSelectTimeModeClick={onSelectTimeModeClick}
          selectedTimeMode={selectedTimeMode}
          onGenerateNewTextClick={onGenerateNewTextClick}
        />
        <WordsContainer>
          <Words trainerText={trainerText} />
          <UserTypings
            userInput='However, as'
            words={trainerText}
            className='absolute inset-0'
          />
        </WordsContainer>
      </div>
    </div>
  );
};

export default TypingBox;
