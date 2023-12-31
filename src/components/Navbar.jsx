import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar = ({ extraClassess }) => {
  return (
    <nav className={`text-primary w-full ${extraClassess}`}>
      <div className='navbar align-element '>
        <div className='navbar-start'>
          {/* Title */}
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center '
          >
            Hg
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal '>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          {/* CART LINK*/}
          <NavLink to='/contact' className='btn btn-primary  btn-md ml-4'>
            contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
