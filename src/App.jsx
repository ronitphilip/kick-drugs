import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AdminAuth from './pages/AdminAuth';
import AdminDashboard from './pages/AdminDashboard';
import AdminProfile from './pages/AdminProfile';
import { Toaster } from 'react-hot-toast';
import Pnf from './pages/Pnf';

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<AdminAuth />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/profile' element={<AdminProfile />} />
        <Route path='*' element={<Pnf />} />
      </Routes>
    </>
  )
}

export default App