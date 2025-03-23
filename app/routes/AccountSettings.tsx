import React from 'react';
import PP from "../assets/JURNLET LOGOO.jpg"
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { LuHandHeart } from "react-icons/lu";
import { FaFeatherAlt } from "react-icons/fa";
import { useAuth } from '~/contexts/auth/auth';
import { ppid } from 'process';

const AccountSettings: React.FC = () => {
  
  const authContext = useAuth();
  const { currentUser, userLoggedIn, loading } = authContext ?? {};

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold curp">My Account</h1>
          
        </div>

        {/* Profile Section */}
        <div className="flex items-center mb-6">
          <div className="relative">
            <img
              src={currentUser?.photoURL ?? PP} // Replace with your profile image
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-gray-700"
            />
            
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{currentUser?.displayName}</h2>
            <div className="flex space-x-2 ">
              
              <div className="relative group flex items-center">
              {/* Icon */}
              <span className="text-yellow-500 cursor-pointer text-xl"><FaCrown /></span>
      
                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm text-white bg-gray-900 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  Student
                </div>
              </div>
              

              <div className="relative group flex items-center">
              {/* Icon */}
              <span className="text-blue-400 text-xl cursor-pointer"><PiStudent /></span>
      
                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm text-white bg-gray-900 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  Student
                </div>
              </div>
              
              <div className="relative group flex items-center">
              {/* Icon */}
              <span className="text-red-400 text-xl cursor-pointer"><PiChalkboardTeacher /></span>
      
                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm text-white bg-gray-900 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  Teacher
                </div>
              </div>

              
              <div className="relative group flex items-center">
              {/* Icon */}
              <span className="text-teal-600 cursor-pointer text-xl"><LuHandHeart /></span>
      
                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm text-white bg-gray-900 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  Supporter
                </div>
              </div>
              <div className="relative group flex items-center">
              {/* Icon */}
                <span className="text-white cursor-pointer text-basic">
                  <FaFeatherAlt />
                </span>
      
                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm text-white bg-gray-900 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  Special Member
                </div>
              </div>
            </div>
          </div>
          <button className="ml-auto mb-6 bg-indigo-500 text-white px-2 py-1.5 rounded-lg hover:bg-indigo-900 duration-200 cursor-pointer">
            Edit Profile
          </button>
        </div>

        {/* Profile Details */}
        <div className="space-y-4">
          

          {/* Kullanıcı Adı */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">USERNAME</p>
              <p className="text-white">{currentUser?.email?.split("@")[0]}</p>
            </div>
            
          </div>

          {/* E-posta */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">E-MAIL</p>
              <p className="text-white">
                {currentUser?.email}
              </p>
            </div>
            
          </div>

          {/* Telefon Numarası */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">PHONE NUMBER</p>
              <p className="text-white">
                6663629 
              </p>
            </div>
            
            
          </div>
        </div>
        <hr className='mt-3 text-gray-400' />

        {/* Password and 2FA Section */}
        <div className="mt-6">
  <h2 className="text-lg font-semibold">Password</h2>

  <div className="flex justify-between mt-2">
    <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-900 cursor-pointer duration-200">
      Change Password
    </button>
    <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-900 cursor-pointer duration-200">
      Save Changes
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default AccountSettings;