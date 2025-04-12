import React from 'react';
import PP from "../assets/J.png"
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { LuHandHeart } from "react-icons/lu";
import { FaFeatherAlt } from "react-icons/fa";
import { useAuth } from '~/contexts/auth/auth';
import { ppid } from 'process';
import { Link, Navigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { IoMdAlert } from "react-icons/io";
import { doSignOut } from '~/firebase/auth/authFunctions';



const AccountSettings: React.FC = () => {
  
  const authContext = useAuth();
  const { currentUser, userLoggedIn, loading } = authContext ?? {};

  const handleSignOut = async() =>{
    try {
        await doSignOut()
    } catch {
      throw new Error("Unable to sign out.")
    }
  }

  return userLoggedIn ? (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center md:p-4">
      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-24 h-24 bg-indigo-500/20 rounded-full animate-[float_6s_ease-in-out_infinite] top-10 left-10 blur-xl"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute w-32 h-16 bg-blue-500/20 rounded-lg animate-[float_8s_ease-in-out_infinite] bottom-20 right-20 blur-xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-16 h-16 bg-purple-500/20 rounded-full animate-[float_7s_ease-in-out_infinite] top-1/3 right-1/4 blur-xl"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-20 h-28 bg-indigo-600/20 rounded-lg animate-[float_9s_ease-in-out_infinite] bottom-1/4 left-1/4 blur-xl"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
      <div className="w-full h-screen md:h-full max-w-md bg-gray-800 md:rounded-lg shadow-lg md:p-8 p-6 items-center">
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
            <h2 className="text-lg md:text-xl font-semibold mb-1">{currentUser?.displayName}</h2>
            <div className="flex space-x-2 ">
              
              <div className="relative group flex items-center">
              {/* Icon */}
              <span className="text-yellow-500 cursor-pointer text-xl"><FaCrown /></span>
      
                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-3 py-1 text-sm text-white bg-gray-900 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  Owner
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
          <button className="hidden md:block ml-auto mb-6 bg-indigo-500 font-semibold text-white px-2 py-2 rounded-lg hover:bg-indigo-900 duration-200 cursor-pointer">
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
    <button className="bg-indigo-500 font-semibold text-white px-4 py-2 rounded-lg hover:bg-indigo-900 cursor-pointer duration-200">
      <Link to="/forgot-password">Change Password</Link>
    </button>
    <button onClick={()=> handleSignOut()} className="bg-red-500 font-semibold text-white px-6 py-2 rounded-lg hover:bg-red-900 cursor-pointer duration-200">
      Sign out
    </button>
    <button className="hidden bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-900 cursor-pointer duration-200">
      Save Changes
    </button>
  </div>
  <div className='edit-button block md:hidden absolute bottom-20 right-0 p-4 mr-4 rounded-full bg-indigo-500 text-lg shadow-lg'>
        <MdEdit color='white' fontSize="1.5em"/>
  </div>
 
</div>

      </div>
      <div className='hidden absolute bottom-10 mt-10 flex-row w-200 h-20 bg-gray-800 justify-between items-center rounded-lg'>
        <div className='flex flex-row items-center justify-center'>
        <IoMdAlert className='ml-4' fontSize="1.5em"/>
        <span className='px-4 py-2 text-lg'>You have made some changes in your profile!</span>
        </div>
        <button className="bg-green-700 text-white px-4 py-2 m-6 rounded-lg hover:bg-green-900 cursor-pointer duration-200">
            Save Changes
        </button>
       </div>
    </div>
  ) : <Navigate to="/signup" />
};

export default AccountSettings;