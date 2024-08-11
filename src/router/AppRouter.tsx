import { Outlet, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
            main layout <Outlet />
          </div>
        }
      >
        <Route />
        <Route path='/' index element={<div>trainer</div>} />
        <Route path='/about' element={<div>about</div>} />
        <Route path='/stat' element={<div>stats</div>} />
        <Route path='*' element={<div>not found 404...</div>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
