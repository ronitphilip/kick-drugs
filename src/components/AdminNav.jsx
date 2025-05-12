import React from 'react'
import { Bell, ChevronDown, User } from 'lucide-react'

const AdminNav = () => {

    const user = JSON.parse(sessionStorage.getItem('user'))

    return (
        <div className='flex justify-between'>
            <div>
                <h1 className='text-3xl font-bold'>Hi {user?.name.split(' ')[0] || 'User'}!</h1>
            </div>
            <div className="flex items-center">
                <div className='flex items-center space-x-4'>
                    <div className="relative">
                        <Bell size={24} className="text-gray-700" />
                        <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
                    </div>

                    <div className="bg-orange-300 p-1 rounded-full">
                        <User size={24} className="text-white" />
                    </div>

                    <span className="font-medium">{user?.email || 'user@example.com'}</span>
                </div>
                <ChevronDown size={16} className="ml-1" />
            </div>
        </div>
    )
}

export default AdminNav