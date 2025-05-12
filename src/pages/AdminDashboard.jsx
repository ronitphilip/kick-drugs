import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import GenderChart from '../charts/GenderChart'
import RegistrationChart from '../charts/RegistrationChart'
import AdminNav from '../components/AdminNav'

const AdminDashboard = () => {

  return (
    <div className='grid grid-cols-6'>
      <AdminSideBar />
      <div className='col-span-5 p-8'>
        <AdminNav />
        <p className='text-sm'>Here is your analytics</p>
        
        <div className='border border-green-500 bg-green-50 rounded-xl mt-10 grid grid-cols-5 gap-4 px-4 py-15'>
          <div className='h-110 col-span-2 border border-green-500 rounded-xl p-3'>
            <GenderChart/>
          </div>
          <div className='h-110 col-span-3 border border-green-500 rounded-xl p-3'>
            <RegistrationChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard