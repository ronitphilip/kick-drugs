import React from 'react';
import { Bell, ChevronDown, User } from 'lucide-react';

const AdminNav = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <div className="flex justify-between items-center p-4 sm:p-0">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Hi {user?.name?.split(' ')[0] || 'User'}!
        </h1>
      </div>
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="relative">
          <Bell size={18} className="text-gray-700 md:size-6 sm:size-24" />
          <span className="absolute top-0 right-0 h-2 w-2 sm:h-3 sm:w-3 bg-red-500 rounded-full"></span>
        </div>
        <div className="bg-orange-300 p-1 rounded-full">
          <User size={18} className="text-white md:size-5 sm:size-24" />
        </div>
        <span className="hidden sm:flex font-medium text-sm sm:text-base text-gray-700">
          {user?.email || 'user@example.com'}
        </span>
        <ChevronDown size={16} className="hidden sm:block ml-1 text-gray-700" />
      </div>
    </div>
  );
};

export default AdminNav;