import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { LuUserCircle } from "react-icons/lu";
import { BiLogOut } from "react-icons/bi";
import { logout } from '../utils/auth';

import SearchBox from './SearchBox';
import { navLinks } from '../utils/constants';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { jwtDecode } from 'jwt-decode';

const NavBar = () => {
  const links = navLinks;
  const [activeLink, setActiveLink] = useState(null);

  const [menu, setMenu] = useState(false);

  const [userMenu, setUserMenu] = useState(false);

  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  let token = useSelector((state) => state.token);
  if(token) token = jwtDecode(token);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  }

  return (
    <nav className='flex justify-between items-center h-[100px] section__margin border-b'>
      <Link to='/'>
        <h1 className='text-[24px] font-bold'>Exclusive</h1>
      </Link>

      <div className='xl:flex gap-[48px] hidden'>
        {links.map((link, index) => (
          <Link key={index} to={link === 'Home' ? '/' : `/${link}`} onClick={() => handleLinkClick(index)}>
            <p className={`border-b-[1px] duration-500 ${activeLink === index ? 'border-black' : 'border-transparent'}`}>{link}</p>
          </Link>
        ))}
      </div>

      <div className='flex gap-[24px] items-center'>
        <SearchBox />
        <div className='flex gap-[16px]'>

          {
          isAuthenticated === false && (
                <Link to="/signup">
                  <LuUserCircle size={25} />
                </Link>
          )}
          
          {
            isAuthenticated && (
              <div className='relative w-[25px]'>
                <LuUserCircle size={25} onClick={() => {userMenu ? setUserMenu(false) : setUserMenu(true); if(menu) setMenu(false)}}/>
                {
                  userMenu && (
                    <div className='absolute flex flex-col z-10 bg-white border border-black p-[10px] w-[150px] gap-[.5rem] right-0 top-[50px]'>
                      <p className='col-span-3 text-center'>Hi, {token.firstName}</p>
                        <Link to='/wishlist' className='flex gap-[1rem]' onClick={() => handleLinkClick(null)}>
                          <IoMdHeartEmpty size={20} />
                          <p className='text-[14px] col-span-2 cursor-pointer'>My wishlist</p>
                        </Link>

                        <Link to='/cart' className='flex gap-[1rem]' onClick={() => handleLinkClick(null)}>
                          <IoCartOutline size={20}/>
                          <p className='text-[14px] col-span-2'>My cart</p>
                          </Link>

                        <Link to='/' className='flex gap-[1rem]' onClick={() => {handleLogOut(); handleLinkClick();}}>
                          <BiLogOut size={20}/>
                          <p className='text-[14px] col-span-2'>Log out</p>
                          </Link>
                    </div>
                  )
                }
              </div>
            )
          }

          {/*Mobile navbar*/}
          <div className='xl:hidden relative'>
            {
              menu ? <RxCross1 size={25} onClick={() => {setMenu(false)}}/>  : <RxHamburgerMenu size={25} onClick={() => {setMenu(true); setUserMenu(false)}}/>
            }
            {
              menu && (
                <div className='flex flex-col gap-[20px] absolute bg-white radius-[5px] p-[1.5rem] items-center justify-center right-0 top-[50px] border border-black z-20'>
                  {links.map((link, index) => (
                  <Link key={index} to={link === 'Home' ? '/' : `/${link}`} onClick={() => handleLinkClick(index)}>
                    <p className={`border-b-[1px] duration-500 ${activeLink === index ? 'border-black' : 'border-transparent'}`}>{link}</p>
                  </Link>
                  ))}
                </div>
              )
            }
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;