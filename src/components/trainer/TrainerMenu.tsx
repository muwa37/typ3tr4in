import { TimeMode } from '@/types/common';
import { timeMods } from '@/utils/consts';
import CustomButton from '../ui/CustomButton';

type Props = {
  countdown: number;
  onSelectTimeModeClick: (timeMode: TimeMode) => void;
  selectedTimeMode: TimeMode;
  onGenerateNewTextClick: () => void;
};

const TrainerMenu = ({
  countdown,
  onSelectTimeModeClick,
  selectedTimeMode,
  onGenerateNewTextClick,
}: Props) => {
  return (
    <div className='w-full flex items-center justify-between py-2'>
      <p className='border-red-300 border-2 size-12 rounded-full text-red-300 flex items-center justify-center italic'>
        {countdown}
      </p>
      <div className=' flex items-center justify-start'>
        <h2 className='pr-2 italic text-red-300'>select time mode: </h2>
        <ul className='flex'>
          {timeMods.map((timeMode) => (
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
      <CustomButton onClickFn={onGenerateNewTextClick} buttonText='New text' />
    </div>
  );
};

export default TrainerMenu;
