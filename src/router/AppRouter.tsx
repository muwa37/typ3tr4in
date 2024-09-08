import Main from '@/layouts/Main';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('@/pages/Home'));
const About = React.lazy(() => import('@/pages/About'));
const Stat = React.lazy(() => import('@/pages/Stat'));
const Error = React.lazy(() => import('@/pages/Error'));

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
