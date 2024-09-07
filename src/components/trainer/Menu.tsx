import { TimeMode, TrainerState } from '@/types/common';
import { timeMods } from '@/utils/consts';
import CustomButton from '../ui/CustomButton';

type Props = {
  trainerState: TrainerState;
  timeLeft: number;
  onSelectTimeModeClick: (timeMode: TimeMode) => void;
  selectedTimeMode: TimeMode;
  onGenerateNewTextClick: () => void;
};

const Menu = ({
  trainerState,
  timeLeft,
  onSelectTimeModeClick,
  selectedTimeMode,
  onGenerateNewTextClick,
}: Props) => {
  console.log();
  return (
    <div className='w-full flex items-center justify-between py-2'>
      <p
        className={` border-2 size-12 rounded-full  flex items-center justify-center italic ${
          trainerState === 'run'
            ? ' border-blue-300 text-blue-300'
            : 'border-red-300 text-red-300'
        }`}
      >
        {timeLeft}
      </p>
      <div className=' flex items-center justify-start'>
        <h2 className='pr-2 italic text-red-300'>select time mode: </h2>
        <ul className='flex'>
          {timeMods.map(timeMode => (
            <li key={timeMode}>
              <CustomButton
                onClickFn={() => onSelectTimeModeClick(timeMode)}
                buttonText={timeMode.toString()}
                isActive={timeMode === selectedTimeMode}
              />
            </li>
          ))}
        </ul>
      </div>
      <CustomButton onClickFn={onGenerateNewTextClick} buttonText='new text' />
    </div>
  );
};

export default Menu;
