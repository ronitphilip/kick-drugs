import React, { useState } from 'react';
import { Bell, ChevronDown, User, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-green-50 w-full py-4 px-4 sm:px-6">
            <div className="mx-auto max-w-8xl flex items-center justify-between">
                {/* Logo */}
                <img src={logo} alt="Kick Drugs Logo" className="h-10 sm:h-12" />

                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div
                    className={`${isMenuOpen ? 'flex' : 'hidden'
                        } md:flex flex-col md:flex-row md:items-end absolute md:static top-18 left-0 w-full h-full md:w-auto bg-green-50 md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8 z-10`}
                >
                    <Link to="#" className="text-black font-medium text-sm sm:text-base hover:text-green-600">
                        Menu 1
                    </Link>
                    <Link to="#" className="text-black font-medium text-sm sm:text-base hover:text-green-600">
                        Menu 2
                    </Link>
                    <Link to="#" className="text-black font-medium text-sm sm:text-base hover:text-green-600">
                        Menu 3
                    </Link>
                    <Link to="#" className="text-black font-medium text-sm sm:text-base hover:text-green-600">
                        Menu 4
                    </Link>
                    {
                        isMenuOpen && (
                            <>
                                <div className="bg-orange-300 p-1 rounded-full w-8">
                                    <User size={24} className="text-white" />
                                </div>
                                <div className="relative p-1">
                                    <Bell size={24} className="text-gray-700" />
                                    <span className="absolute top-1 left-1 h-3 w-3 bg-red-500 rounded-full"></span>
                                </div>
                            </>
                        )
                    }
                </div>

                {/* User Section */}
                <div className="hidden md:flex flex-col items-end">
                    <div className="flex items-center">
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Bell size={24} className="text-gray-700" />
                                <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
                            </div>
                            <div className="bg-orange-300 p-1 rounded-full">
                                <User size={24} className="text-white" />
                            </div>
                            <span className="font-medium text-sm sm:text-base">Login/Signup</span>
                        </div>
                        <ChevronDown size={16} className="ml-1" />
                    </div>
                    <span className="text-xs text-black mt-2">Kindly login or signup to proceed</span>
                </div>

            </div>
        </div>
    );
};

export default NavBar;