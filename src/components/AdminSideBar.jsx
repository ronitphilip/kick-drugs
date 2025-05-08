import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutGrid, Lightbulb, Package, FileText,
  Link, MessageSquare, Download, User, Settings, LogOut
} from 'lucide-react';
import logo from '../assets/logo.png';

const AdminSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split('/').pop();

  const menuItems = [
    { id: 'dashboard', path: 'dashboard', label: 'Dashboard', icon: <LayoutGrid size={18} /> },
    { id: 'menu02', path: 'menu02', label: 'Menu 02', icon: <Lightbulb size={18} /> },
    { id: 'menu03', path: 'menu03', label: 'Menu 03', icon: <Package size={18} /> },
    { id: 'menu04', path: 'menu04', label: 'Menu 04', icon: <FileText size={18} /> },
    { id: 'menu05', path: 'menu05', label: 'Menu 05', icon: <Link size={18} /> },
    { id: 'menu06', path: 'menu06', label: 'Menu 06', icon: <MessageSquare size={18} /> },
    { id: 'downloads', path: 'downloads', label: 'Downloads', icon: <Download size={18} /> },
  ];

  const bottomItems = [
    { id: 'profile', path: 'profile', label: 'My Profile', icon: <User size={18} /> },
    { id: 'settings', path: 'settings', label: 'Settings', icon: <Settings size={18} /> },
    { id: 'logout', path: '', label: 'Logout', icon: <LogOut size={18} /> },
  ];

  const handleItemClick = (item) => {
    if (item.id === 'logout') {
      sessionStorage.clear();
      navigate('/');
    } else {
      navigate(`/admin/${item.path}`);
    }
  };

  const renderNavItem = (item) => {
    const isActive = currentPath === item.path;
    return (
      <div
        key={item.id}
        onClick={() => handleItemClick(item)}
        className={`flex items-center space-x-3 p-3 text-sm rounded-md cursor-pointer transition-colors ${
          isActive ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-green-100'
        }`}
      >
        <span className={isActive ? 'text-white' : 'text-gray-500'}>{item.icon}</span>
        <span className="font-medium">{item.label}</span>
      </div>
    );
  };

  return (
    <div className="h-screen bg-yellow-50 w-64 flex flex-col justify-between shadow-md">
      <div className="p-4">
        <div className="pb-10 p-4">
          <img src={logo} alt="Kick Drugs Logo" className="h-12" />
        </div>
        <nav className="space-y-2">{menuItems.map(renderNavItem)}</nav>
      </div>
      <div className="px-4 py-4">
        <nav className="space-y-2">{bottomItems.map(renderNavItem)}</nav>
        <p className='text-center italic text-gray-600 pb-3'>ver 1.21</p>
      </div>
    </div>
  );
};

export default AdminSideBar;
