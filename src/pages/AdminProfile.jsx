import React, { useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AdminNav from '../components/AdminNav'
import IDCardPreview from '../components/IDCardPreview'
import toast from 'react-hot-toast';
import { ChevronDown, Upload } from 'lucide-react';

const AdminProfile = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    image: null,
    dateOfBirth: '',
    phoneNumber: '',
    emailId: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, image, dateOfBirth, phoneNumber, emailId, district, panchayat } = formData;

    if (!fullName || !image || !dateOfBirth || !phoneNumber || !emailId || !district || !panchayat) {
      toast.error('Please fill the form completely!')
    } else {
      toast.success('Form submitted!')
      console.log(formData);
      setFormData({
        fullName: '',
        image: null,
        dateOfBirth: '',
        phoneNumber: '',
        emailId: '',
        district: '',
        panchayat: ''
      })
    }
  };

  return (
    <div className='grid grid-cols-6'>
      <AdminSideBar />
      <div className='col-span-5 px-8 pt-2'>
        <AdminNav />
        <p className='text-sm'>Kindly fill your details and make the complete.</p>
        <div className='border-2 border-green-500 bg-green-50 rounded-xl grid grid-cols-2 gap-4 mt-8'>
          <form className='py-5 px-8 space-y-4' onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1 font-bold">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
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
                name="emailId"
                value={formData.emailId}
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
                  fullName={formData.fullName}
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