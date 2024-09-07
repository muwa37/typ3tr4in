import { selectLastAttemptStats } from '@/store/stat/selectors';
import { formatPercentage } from '@/utils/helpers';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../ui/CustomButton';

type Props = {
  isActive: boolean;
  onModalCloseHandler: () => void;
};

const Modal = ({ isActive, onModalCloseHandler }: Props) => {
  const lastAttemptStats = useSelector(selectLastAttemptStats);
  const navigate = useNavigate();

  const handleCheckoutAllStatsClick = () => {
    navigate('/stats');
  };

  return (
    <div
      className={
        isActive
          ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5/6 w-3/4 border-2 p-3 rounded-xl bg-stone-700 border-red-300 '
          : 'hidden'
      }
    >
      <div className='absolute top-4 right-4'>
        <CustomButton buttonText='close' onClickFn={onModalCloseHandler} />
      </div>
      <div className='p-2 h-full w-full flex flex-col items-center justify-evenly'>
        <div className='h-2/3 flex flex-col items-center justify-evenly'>
          <h2 className='text-3xl font-bold'>Your attempt statistic!</h2>
          <h3 className='text-blue-300 text-2xl fort-semibold italic'>
            WPM:{lastAttemptStats.WPM}
          </h3>
          <h3 className='text-blue-300 text-2xl fort-semibold italic'>
            Accuracy:{formatPercentage(lastAttemptStats.accuracy)}
          </h3>
        </div>
        <CustomButton
          buttonText='checkout all stats'
          onClickFn={handleCheckoutAllStatsClick}
        />
      </div>
    </div>
  );
};

export default Modal;
