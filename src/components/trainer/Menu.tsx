import { TimeMode, TrainerState } from '@/types/common';
import { timeMods } from '@/utils/consts';
import CustomButton from '../ui/CustomButton';

type MenuProps = {
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
}: MenuProps) => {
  return (
    <div className='w-full flex flex-col md:flex-row h-full md:h-1/2 items-center justify-evenly lg:justify-between py-2'>
      <div className='flex items-center justify-start'>
        <h2 className='hidden md:block px-2 italic text-red-300]'>
          select time mode:
        </h2>
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

      <div className='flex items-center w-1/2 md:w-1/4 justify-between'>
        <p
          className={`border-2 size-12 rounded-full flex items-center justify-center italic ${
            trainerState === 'run'
              ? ' border-violet-300 text-violet-300'
              : 'border-red-300 text-red-300'
          }`}
        >
          {timeLeft}
        </p>

        <CustomButton
          onClickFn={onGenerateNewTextClick}
          buttonText='new text'
        />
      </div>
    </div>
  );
};

export default Menu;
