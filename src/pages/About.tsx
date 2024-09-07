import CustomLi from '@/components/ui/CustomLi';
import PageTitle from '@/components/ui/PageTitle';
import { techNames } from '@/utils/consts';

const About = () => {
  return (
    <section className='flex flex-col w-full h-full items-center justify-evenly'>
      <PageTitle pageTitle='About Typ3Tr4in' />
      <div className='h-full w-2/3 flex flex-col items-center justify-evenly py-4'>
        <h2 className='text-xl md:text-2xl font-bold'>
          This application can test and help you improve your typing speed
        </h2>
        <div className='w-full md:w-1/4 flex flex-col items-center justify-center pt-2'>
          <h2 className='text-3xl font-bold'>Tech stack:</h2>
          <ul className='flex flex-col items-center justify-start '>
            {techNames.map(techName => (
              <CustomLi liTitle={techName} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
