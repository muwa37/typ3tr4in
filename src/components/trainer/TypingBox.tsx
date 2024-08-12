import { selectTime } from '@/store/mode/selectors';
import { setTimeMode } from '@/store/mode/slice';
import { selectText } from '@/store/text/selectors';
import { setText } from '@/store/text/slice';
import { TimeMode } from '@/types/common';
import { timeMods } from '@/utils/consts';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../ui/CustomButton';

const TypingBox = () => {
  const dispatch = useDispatch();
  const generatedText = useSelector(selectText);
  const selectedTimeMode = useSelector(selectTime);

  const [trainerText, setTrainerText] = useState('');

  useEffect(() => {
    setTrainerText(generatedText.text);
  });

  const onSelectTimeModeClick = (timeMode: TimeMode) => {
    dispatch(setTimeMode(timeMode));
    dispatch(setText());
  };
  const onGenerateNewTextClick = () => {
    dispatch(setText());
  };

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div className='max-w-[1000px] h-2/3 m-auto overflow-hidden '>
        <div className='w-full flex items-center justify-between py-2'>
          <div className=' flex items-center justify-start'>
            <h2 className='pr-2 italic text-red-300'>select time mode: </h2>
            <ul className='flex'>
              {timeMods.map((timeMode) => (
                <li>
                  <CustomButton
                    onClickFn={() => onSelectTimeModeClick(timeMode)}
                    buttonText={timeMode.toString()}
                    isActive={timeMode === selectedTimeMode}
                  />
                </li>
              ))}
            </ul>
          </div>
          <CustomButton
            onClickFn={onGenerateNewTextClick}
            buttonText='New text'
          />
        </div>

        <div className='text-3xl  h-[300px] flex flex-wrap '>
          {trainerText.split(' ').map((word) => (
            <span className='mr-1 pr-1'>
              {word.split('').map((char) => (
                <span>{char}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypingBox;
