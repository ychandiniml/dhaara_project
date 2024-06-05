import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import notification from '../../assets/notification.png';
import header from '../../assets/Header.png';
import profile from '../../assets/profile.png';
import HamburgerIcon from '../../assets/hamburger.svg';
import dashboard from '../../assets/dashboard.png';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative">
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="md:hidden flex items-center space-x-4" onClick={toggleSidebar}>
             <img src={HamburgerIcon} alt='mySvgImage' className='w-8 h-8' />
             <img src={logo} alt="Logo"  />
          </button>
          <img src={logo} alt="Logo" className="hidden md:block w-8 h-8 rounded-full" />
          <div className="text-lg font-bold hidden md:block">kritsnam</div>
        </div>
        <div className="flex items-center space-x-4">
          <img src={notification} alt="Notification" className="w-8 h-8 rounded-full" />
          <img src={header} alt="Header" className="w-8 h-8 rounded-full" />
          <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </header>

      {sidebarOpen && (
        <div className="absolute top-full left-0 bg-gray-200 w-64 h-80 md:w-80 p-4 space-y-4 z-50" >
          <div className="flex items-center space-x-4">
            <img src={dashboard} alt="Dashboard Logo" className="w-8 h-8 rounded-full" />
            <div className="text-gray-800">Dashboard</div>
          </div>
          {/* Add more sidebar items here */}
          <div className="flex-1" onClick={toggleSidebar}></div>
        </div>
      )}
    </div>
  );
};

export default Header;

