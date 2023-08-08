import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import mainLogo from'../data/logo-belaundry.png';

import { useStateContext } from '../contexts/ContextProvider';
import { links } from '../data/dumps';

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 bg-light-gray';

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-med-blue">
      {activeMenu && (
        <>
          <div className="flex justify-evenly items-center mt-7 ml-2">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-2xl font-semibold text-white">
              <img className="w-1/4 aspect-auto" src={mainLogo} alt="" /> <span className='tracking-wider'>BeLaundry</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={ handleCloseSideBar }
                // style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray hover:text-gry-700 mt-4 block md:hidden"
              >
                {/* <MdOutlineCancel /> */}
              </button>
            </TooltipComponent>
          </div>

          <div className='m-4 pt-2 rounded-lg text-md text-white font-medium'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='flex items-center gap-4 ml-4 mt-5 pl-3 pt-3 rounded-lg text-md text-white font-medium'>
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.to}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    // style={({ isActive }) => ({
                    //   backgroundColor: isActive ? currentColor : '',
                    // })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>

        </>
      )}
    </div>
  )
}

export default Sidebar