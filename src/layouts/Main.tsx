import Footer from '@/components/wrapper/Footer';
import Header from '@/components/wrapper/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-between bg-stone-700 text-yellow-200 transition-all overflow-hidden'>
      <Header />

      <div className='h-[90%] py-4 md:py-6 border-y-2 border-yellow-200 overflow-y-auto'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
