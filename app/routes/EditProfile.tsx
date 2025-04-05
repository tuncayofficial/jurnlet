import React, { useState } from 'react';
import PP from "../assets/jurnlet_logo.png";
import { FaArrowLeft, FaCrown, FaFeatherAlt, FaCamera } from "react-icons/fa";
import { PiStudent, PiChalkboardTeacher } from "react-icons/pi";
import { LuHandHeart } from "react-icons/lu";

const EditProfile: React.FC = () => {
  const [username, setUsername] = useState('abdullahtnz');
  const [email, setEmail] = useState('dazbix@gmail.com');
  const [phone, setPhone] = useState('6663629');
  const [profileImage, setProfileImage] = useState(PP); // state to manage profile image

  // Function to handle profile image change (for demonstration purposes)
  const handleProfileImageChange = () => {
    alert('Change profile image (this is where file picker logic will go)');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 relative">
      {/* Return Home */}
      <a href="/" className="absolute top-4 left-4 flex items-center text-gray-400 hover:text-white transition">
        <span className="mr-2"><FaArrowLeft /></span>
        <span className="hidden sm:inline text-sm">Return to Home</span>
      </a>

      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        {/* Header */}
        <h1 className="text-xl font-semibold text-center mb-6">Edit Profile</h1>
        
        {/* Profile Section */}
        <div className="flex items-center mb-6 relative">
          <div className="relative">
            <img src={profileImage} alt="Profile" className="w-20 h-20 rounded-full border-4 border-gray-700" />
            {/* Change Profile Image Icon */}
            <button
              onClick={handleProfileImageChange}
              className="absolute bottom-0 right-0 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-900 transition cursor-pointer"
            >
              <FaCamera />
            </button>
          </div>
          <div className="ml-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-900 text-white border border-gray-700 rounded-lg p-2 w-full focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Editable Fields */}
        <div className="space-y-4">
          <div>
            <label className="text-gray-400 text-sm">E-MAIL</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm">PHONE NUMBER</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-gray-900 text-white border border-gray-700 rounded-lg p-2 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
        
        <hr className="mt-4 border-gray-700" />

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-900 transition cursor-pointer">Save Changes</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;