import CustomButton from '@/components/ui/CustomButton';
import CustomLi from '@/components/ui/CustomLi';
import PageTitle from '@/components/ui/PageTitle';
import { selectStats } from '@/store/stat/selectors';
import { clearStats } from '@/store/stat/slice';
import { formatPercentage } from '@/utils/helpers';
import { useDispatch, useSelector } from 'react-redux';

const Stat = () => {
  const dispatch = useDispatch();
  const stat = useSelector(selectStats);

  const onClearClick = () => {
    dispatch(clearStats());
  };

  return (
    <section className='flex flex-col w-full h-full items-center justify-evenly px-4'>
      <PageTitle pageTitle='Statistics' />

      <div className='flex flex-col lg:flex-row w-full h-full items-center justify-evenly lg:space-x-4 space-y-8 lg:space-y-0'>
        <div className='w-full lg:w-1/3 text-violet-300'>
          <h2 className='text-xl lg:text-2xl font-bold mb-3 text-center'>
            Last attempt stats
          </h2>
          <ul className='space-y-2'>
            <CustomLi
              liTitle='WPM'
              liText={stat.lastAttemptStats.WPM.toString()}
            />
            <CustomLi
              liTitle='Accuracy'
              liText={formatPercentage(stat.lastAttemptStats.accuracy)}
            />
          </ul>
        </div>

        <div className='w-full lg:w-1/3 text-fuchsia-300'>
          <h2 className='text-xl lg:text-2xl font-bold mb-3 text-center'>
            Summary WPM stats
          </h2>
          <ul className='space-y-2'>
            <CustomLi liTitle='Best WPM' liText={stat.bestWPM.toString()} />
            <CustomLi liTitle='Average WPM' liText={stat.avgWPM.toString()} />
            <CustomLi liTitle='Worst WPM' liText={stat.worstWPM.toString()} />
          </ul>
        </div>

        <div className='w-full lg:w-1/3 text-pink-300'>
          <h2 className='text-xl lg:text-2xl font-bold mb-3 text-center'>
            Summary Accuracy stats
          </h2>
          <ul className='space-y-2'>
            <CustomLi
              liTitle='Best Accuracy'
              liText={formatPercentage(stat.bestAccuracy)}
            />
            <CustomLi
              liTitle='Average Accuracy'
              liText={formatPercentage(stat.avgAccuracy)}
            />
            <CustomLi
              liTitle='Worst Accuracy'
              liText={formatPercentage(stat.worstAccuracy)}
            />
          </ul>
        </div>
      </div>

      <div className='w-full flex justify-center mt-8'>
        <CustomButton onClickFn={onClearClick} buttonText='Clear Stats' />
      </div>
    </section>
  );
};

export default Stat;
