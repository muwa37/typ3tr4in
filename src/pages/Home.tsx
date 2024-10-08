import Trainer from '@/components/trainer/Trainer';
import PageTitle from '@/components/ui/PageTitle';

const Home = () => {
  return (
    <section className='flex flex-col w-full md:h-1/2 items-center justify-evenly'>
      <PageTitle pageTitle='Typing Trainer' />
      <Trainer />
    </section>
  );
};

export default Home;
