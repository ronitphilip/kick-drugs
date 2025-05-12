import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginAPI } from '../services/allApi';

const AdminAuth = () => {
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
    role: ''
  });
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
    if (emailError) {
      return toast.error('Check your email!');
    }
    if (!user?.password) {
      return toast.error('Please enter your password');
    }

    try {
      const result = await loginAPI(user);
      if (result.status === 200) {
        toast.success('Login success!');
        sessionStorage.setItem('user', JSON.stringify(result?.data?.user));
        sessionStorage.setItem('token', result?.data?.token);
        navigate('/admin/dashboard');
      }
    } catch (error) {
      toast.error('Something went wrong!');
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <div className="flex justify-center items-center min-h-[calc(100vh-88px)] px-4">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-6xl bg-green-50 border border-green-500 rounded-2xl p-6 sm:p-8 flex justify-center items-center">
          <div className="md:max-w-xl bg-white border border-green-500 rounded-xl p-6 sm:p-8 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-center">Admin Login</h1>
            <div>
              <input
                type="text"
                placeholder="Enter Email or Username"
                value={user?.email}
                onChange={handleEmailChange}
                autoComplete="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
              {emailError && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{emailError}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Enter Password"
                value={user?.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
              />
            </div>

            <div className="relative">
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-between w-full px-4 py-3 border border-gray-300 rounded-md text-gray-500 cursor-pointer text-sm sm:text-base"
              >
                <span>{user?.role || 'Choose Category (Admin, Super Admin)'}</span>
                <ChevronDown size={16} className="text-green-800" />
              </div>
              {showDropdown && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
                  {categories.map((item) => (
                    <li
                      key={item.toLowerCase()}
                      onClick={() => {
                        setUser({ ...user, role: item });
                        setShowDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-green-100 cursor-pointer text-sm sm:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 border-gray-300 rounded accent-green-500"
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

            <button
              onClick={handleLogin}
              type="button"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200 text-sm sm:text-base"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;