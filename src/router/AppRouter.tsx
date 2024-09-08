import Main from '@/layouts/Main';
import About from '@/pages/About';
import Error from '@/pages/Error';
import Home from '@/pages/Home';
import Stat from '@/pages/Stat';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Main />
            </div>
          }
        >
          <Route path='/' index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/stats' element={<Stat />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
