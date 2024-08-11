import TypingBox from '@/components/trainer/TypingBox';
import PageTitle from '@/components/ui/PageTitle';

const Home = () => {
  return (
    <section className='flex flex-col w-full h-full items-center justify-evenly'>
      <PageTitle pageTitle='Typing Trainer' />
      <TypingBox />
    </section>
  );
};

export default Home;
