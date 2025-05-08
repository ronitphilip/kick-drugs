import React from 'react'
import AdminSideBar from '../components/AdminSideBar'

const Pnf = () => {
    return (
        <div className='grid grid-cols-6'>
            <AdminSideBar />
            <div className='col-span-5'>
                Page not found!
            </div>
        </div>
    )
}

export default Pnf