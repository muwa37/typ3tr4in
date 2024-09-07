import navLogo from '@/assets/images/nav-logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='p-2 flex items-center'>
      <nav className='w-full h-full flex space-x-6 items-center justify-between'>
        <NavLink to='/' end>
          <div className='flex h-full items-center justify-center'>
            <div className='flex justify-center items-center w-1/2 h-full'>
              <img
                className='h-8 drop-shadow-2xl '
                src={navLogo}
                alt='nav-logo'
              />
            </div>
            <h4 className='text-xl font-semibold text-blue-300 pl-2'>
              Typ3Tr4in
            </h4>
          </div>
        </NavLink>
        <nav className='w-1/6 flex items-center justify-evenly'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'text-green-700' : 'hover:text-blue-300'
            }
            end
          >
            home
          </NavLink>
          <NavLink
            to='/stats'
            className={({ isActive }) =>
              isActive ? 'text-green-700' : 'hover:text-blue-300'
            }
          >
            stats
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? 'text-green-700' : 'hover:text-blue-300'
            }
            end
          >
            about
          </NavLink>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
