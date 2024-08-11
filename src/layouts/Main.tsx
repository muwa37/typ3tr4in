import Footer from '@/components/wrapper/Footer';
import Header from '@/components/wrapper/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-between bg-stone-700 text-yellow-200'>
      <Header />
      <div className='overflow-auto py-2 h-[85%] border-y-2 border-teal-800'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
