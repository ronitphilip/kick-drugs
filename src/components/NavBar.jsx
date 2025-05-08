import React from 'react';
import { Bell, ChevronDown, User } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="bg-green-50 w-full py-4 px-6">
            <div className="mx-auto flex items-center justify-between">

                <img src={logo} alt="Kick Drugs Logo" className="h-12" />


                <div className="md:flex space-x-8">
                    <Link className="text-black font-medium">Menu 1</Link>
                    <Link className="text-black font-medium">Menu 2</Link>
                    <Link className="text-black font-medium">Menu 3</Link>
                    <Link className="text-black font-medium">Menu 4</Link>
                </div>

                <div className="flex flex-col items-end">
                    <div className="flex items-center">
                        <div className='flex items-center space-x-4'>
                            <div className="relative">
                                <Bell size={24} className="text-gray-700" />
                                <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
                            </div>

                            <div className="bg-orange-300 p-1 rounded-full">
                                <User size={24} className="text-white" />
                            </div>

                            <span className="font-medium">Login/Signup</span>
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