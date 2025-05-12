import React from 'react';
import AdminSideBar from '../components/AdminSideBar';
import GenderChart from '../charts/GenderChart';
import RegistrationChart from '../charts/RegistrationChart';
import AdminNav from '../components/AdminNav';

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSideBar />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <AdminNav />
        <p className="text-sm text-gray-600 md:mt-4">Here is your analytics</p>

        <div className="border border-green-500 bg-green-50 rounded-xl md:mt-16 p-4 sm:p-6 sm:mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="w-full border border-green-500 rounded-xl p-3 h-auto min-h-[300px] md:col-span-2">
            <GenderChart />
          </div>
          <div className="w-full border border-green-500 rounded-xl p-3 h-auto min-h-[300px] md:col-span-3 sm:p-0">
            <RegistrationChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;