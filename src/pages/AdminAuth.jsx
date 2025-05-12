import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {loginAPI} from '../services/allApi'

const AdminAuth = () => {

  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [user, setUser] = useState({
    'email': '',
    'password': '',
    'role': ''
  })
  const [emailError, setEmailError] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = ['Admin', 'Super Admin'];

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setUser({ ...user, email: val });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailPattern.test(val) ? '' : 'Invalid email format');
  };

  const handleLogin = async () => {
    if(emailError){
      return toast.error('Check your email!')
    }
    if ( !user?.password ) {
     return  toast.error('Please enter your password')
    }

    try {
      const result = await loginAPI(user);
      if(result.status === 200){
        toast.success('Login success!')
        sessionStorage.setItem('user',JSON.stringify(result?.data?.user));
        sessionStorage.setItem('token', result?.data?.token);
        navigate('/admin/dashboard')
      }
    } catch (error) {
      toast.error('Soemthing went wrong!');
      console.log(error);
    }
  };

  return (
    <div className="h-screen bg-white">
      <NavBar />

      <div className="flex justify-center items-center h-[calc(100%-88px)]">
        <div className='flex justify-center items-center w-300 h-150 rounded-2xl border border-green-500 bg-green-50'>
          <div className='flex flex-col justify-center w-150 h-120 rounded-xl border border-green-500 p-10 space-y-4 bg-white'>
            <h1 className='font-bold text-2xl'>Admin Login</h1>
            <div>
              <input
                type="text"
                placeholder="Enter Email or Username"
                value={user?.email}
                onChange={handleEmailChange}
                autoComplete="email"
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Enter Password"
                value={user?.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>

            <div className="relative">
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-between w-full px-4 py-3 border border-gray-200 rounded-md text-gray-500 cursor-pointer"
              >
                <span>{user?.role || 'Choose Category (Admin, Super Admin, etc)'}</span>
                <ChevronDown size={16} className="text-green-800" />
              </div>
              {showDropdown && (
                <ul className="absolute z-10 w-full bg-white border border-gray-200 mt-1 rounded-md shadow-md">
                  {categories.map((item) => (
                    <li
                      key={item.toLowerCase()}
                      onClick={() => {
                        setUser({...user, role: item});
                        setShowDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                  Remember Me
                </label>
              </div>
              <div>
                <a href="#" className="text-sm text-red-500 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button onClick={handleLogin} type="button" className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
