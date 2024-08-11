import CustomLi from '@/components/ui/CustomLi';
import { techNames } from '@/utils/consts';

const About = () => {
  return (
    <section className='flex flex-col w-full h-full items-center justify-evenly'>
      <h1 className='text-6xl font-extrabold'>about Typ3Tr4in</h1>
      <div className='h-full w-full flex flex-col items-center justify-evenly'>
        <h2 className='text-2xl font-bold'>
          This application can test and help you improve your typing speed
        </h2>
        <div className=' w-1/4 flex flex-col items-center justify-center'>
          <h2 className='text-3xl font-bold'>Tech stack:</h2>
          <ul className='flex flex-col items-center justify-start '>
            {techNames.map((techName) => (
              <CustomLi liTitle={techName} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
