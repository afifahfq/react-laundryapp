import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { BiUser } from 'react-icons/bi';
import { useStateContext } from '../contexts/ContextProvider';
import { UserProfile } from '.';
import { useLocation } from 'react-router-dom';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const location = useLocation();
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  const currLoc = (location.pathname).charAt(1).toUpperCase() + (location.pathname).slice(2);

  return (
    <div className="flex justify-between p-2 md:ml-3 md:mr-3 relative">

      <div className="flex items-center">
        <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
        {location.pathname == '/'? 
          <h2 className='text-xl ml-4'>Home</h2>
          : 
          (
            <h2 className='text-xl ml-4'>{currLoc}</h2>
          )
        }
      </div>

      <div className="flex">
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <div className="aspect-auto">
              <BiUser size={25} color='dark-gray'/>
            </div>
            <p>
              <span className="text-[#0099EE] font-medium underline ml-1 text-14">
                John Doe
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.userProfile && (
          <UserProfile />
        )}
      </div>

    </div>
  );
};

export default Navbar;
