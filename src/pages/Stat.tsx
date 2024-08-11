import CustomButton from '@/components/ui/CustomButton';
import CustomLi from '@/components/ui/CustomLi';
import PageTitle from '@/components/ui/PageTitle';
import { selectStats } from '@/store/stat/selectors';
import { clearStats } from '@/store/stat/slice';
import { useDispatch, useSelector } from 'react-redux';

const Stat = () => {
  const dispatch = useDispatch();
  const stat = useSelector(selectStats);

  const onClearClick = () => {
    dispatch(clearStats());
  };

  return (
    <section className='flex flex-col w-full h-full items-center justify-evenly'>
      <PageTitle pageTitle='Statistics' />
      <div className='flex w-full h-full items-center justify-evenly'>
        <div>
          <h2 className='text-2xl font-bold mb-3'>Last attempt stats</h2>
          <ul>
            <CustomLi
              liTitle='WPM'
              liText={stat.lastAttemptStats.WPM.toString()}
            />

            <CustomLi
              liTitle='Accuracy'
              liText={stat.lastAttemptStats.accuracy.toString()}
            />
          </ul>
        </div>

        <div>
          <h2 className='text-2xl font-bold mb-3'>Summary WPM stats</h2>
          <ul>
            <CustomLi liTitle='Best WPM' liText={stat.bestWPM.toString()} />
            <CustomLi liTitle='Average WPM' liText={stat.avgWPM.toString()} />
            <CustomLi liTitle='Worst WPM' liText={stat.worstWPM.toString()} />
          </ul>
        </div>

        <div>
          <h2 className='text-2xl font-bold mb-3'>Summary Accuracy stats</h2>
          <ul>
            <CustomLi
              liTitle='Best Accuracy'
              liText={stat.bestAccuracy.toString()}
            />
            <CustomLi
              liTitle='Average Accuracy'
              liText={stat.avgAccuracy.toString()}
            />
            <CustomLi
              liTitle='Worst Accuracy'
              liText={stat.worstAccuracy.toString()}
            />
          </ul>
        </div>
      </div>

      <CustomButton onClickFn={onClearClick} buttonText='clear stats' />
    </section>
  );
};

export default Stat;
