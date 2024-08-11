import PageTitle from '@/components/ui/PageTitle';

const Error = () => {
  return (
    <section className='flex flex-col w-full h-full items-center justify-evenly'>
      <PageTitle pageTitle='Error' />
      <h2 className='text-2xl font-bold mb-3 h-full flex items-center justify-center'>
        404... Page not exist...
      </h2>
    </section>
  );
};

export default Error;
