import React, { useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminNav from '../components/AdminNav'
import IDCardPreview from '../components/IDCardPreview'
import toast from 'react-hot-toast';
import { ChevronDown, Upload } from 'lucide-react';
import { registerAPI } from '../services/allApi';

const AdminProfile = () => {

  const [formData, setFormData] = useState({
    name: '',
    image: null,
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    district: '',
    panchayat: ''
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1 * 1024 * 1024) {
        toast.error('Image size must be less than 1MB!');
        return;
      }
      setFormData(prev => ({
        ...prev,
        image: file
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, image, dateOfBirth, phoneNumber, email, district, panchayat } = formData;

    if (!name || !image || !dateOfBirth || !phoneNumber || !email || !district || !panchayat) {
      return toast.error('Please fill the form completely!');
    }

    const token = sessionStorage.getItem('token');

    if (!token) {
      return toast.error('Token not found!')
    }
    
    const header = {
      Authorization: `Bearer ${token}`
    };

    const userData = new FormData();
    userData.append('name', name);
    userData.append('image', image);
    userData.append('dateOfBirth', dateOfBirth);
    userData.append('phoneNumber', phoneNumber);
    userData.append('email', email);
    userData.append('district', district);
    userData.append('panchayat', panchayat);

    try {
      const result = await registerAPI(userData, header);
      if (result.status === 200) {
        toast.success('Profile registered successfully!');

        setFormData({
          name: '',
          image: null,
          dateOfBirth: '',
          phoneNumber: '',
          email: '',
          district: '',
          panchayat: ''
        });
        setImagePreview(null);
      } else {
        toast.error('Registration failed!');
      }
    } catch (err) {
      toast.error('Something went wrong!');
      console.log(err);
    }

  };

  return (
    <div className='grid grid-cols-6'>
      <AdminSideBar />
      <div className='col-span-5 px-8 pt-2'>
        <AdminNav />
        <p className='text-sm'>Kindly fill your details and make the complete.</p>
        <div className='border-2 border-green-500 bg-green-50 rounded-xl grid grid-cols-2 gap-4 mt-4'>
          <form className='py-5 px-8 space-y-4' onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1 font-bold">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Type Text here"
                className="w-full p-2 border border-gray-300 rounded bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1 font-bold">
                  Add Your Images <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center w-full p-2 border border-gray-300 rounded bg-white"
                    onClick={() => document.getElementById('image-upload').click()}
                  >
                    <Upload size={18} className='mr-2' />
                    Choose File
                  </button>
                  <input
                    id="image-upload"
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    className="hidden"
                    accept="image/*"
                  />
                </div>
                <p className="text-xs text-red-400 mt-1">Less than 1 Mb file</p>
              </div>

              <div>
                <label className="block text-gray-700 mb-1 font-bold">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <div>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded bg-white"
                    placeholder="Choose Date"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-bold">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91 | 6282600896"
                className="w-full p-2 border border-gray-300 rounded bg-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-bold">
                Email Id <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full p-2 border border-gray-300 rounded bg-white"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-bold">
                District <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
                >
                  <option value="">Select District</option>
                  <option value="Kottayam">Kottayam</option>
                  <option value="Ernakulam">Ernakulam</option>
                  <option value="Thrissur">Thrissur</option>
                  <option value="Kozhikode">Kozhikode</option>
                  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                </select>
                <div className="absolute right-2 top-2 text-gray-400 pointer-events-none">
                  <ChevronDown />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-bold">
                Panchayat <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="panchayat"
                  value={formData.panchayat}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded appearance-none bg-white"
                >
                  <option value="">Select Panchayat</option>
                  <option value="Kanjirappally">Kanjirappally</option>
                  <option value="Pathanamthitta">Pathanamthitta</option>
                  <option value="Erattupetta">Erattupetta</option>
                </select>
                <div className="absolute right-2 top-2 text-gray-400 pointer-events-none">
                  <ChevronDown />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md font-medium mt-4">
              Submit & Download
            </button>
          </form>
          <div>
            <div className="p-10">
              <div className='border-2 border-green-500 rounded-xl p-5'>
                <IDCardPreview
                  name={formData.name}
                  district={formData.district}
                  panchayat={formData.panchayat}
                  image={imagePreview}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile