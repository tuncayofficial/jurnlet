import React from 'react';
import { FaHome } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";

const NavbarMobile: React.FC = () => {
    return (
      <nav className="fixed border-t-1 rounded-t-2xl border-gray-800 bottom-0 left-0 w-full bg-gray-800 text-white shadow-2xl shadow-blue-800 z-10 md:hidden">
        <div className="flex justify-around items-center py-2 px-4 sm:px-6 md:px-8">
          {/* Home Tab */}
          <button type='button'>
          <div className="flex flex-col items-center relative">
            
            <span className='text-3xl'> <FaHome /></span>
            <span className="text-xs sm:text-sm md:text-base"><strong>Home</strong></span>
            
            {/* Green underline for active tab */}
            <div className="absolute -bottom-2 w-full h-1.5 bg-indigo-500 rounded-b"></div>
          </div>
          </button>
  
          {/* Library Tab */}<button type='button'>
          <div className="flex flex-col items-center">
            <span className='text-3xl'><IoLibrary /> </span>
            <span className="text-xs sm:text-sm md:text-base"><strong>Library</strong></span>
          </div>
          </button>
  
          {/* Add New Tab */}
          <button type='button'>
          <div className="flex flex-col items-center">
            <span className='text-3xl'><FaPlusSquare /> </span>
            <span className="text-xs sm:text-sm md:text-base"><strong>New Article</strong></span>
          </div>
          </button>
  
          {/* Quiz Tab */}
          <button type='button'>
          <div className="flex flex-col items-center">
            <span className='text-3xl'><MdQuiz /> </span>
            <span className="text-xs sm:text-sm md:text-base"><strong>Quizes</strong></span>
          </div>
          </button>
  
          {/* Fav tab */}
          <button type='button'>
          <div className="flex flex-col items-center">
            <span className='text-3xl'><FaHeart /> </span>
            <span className="text-xs sm:text-sm md:text-base"><strong>Favourites</strong></span>
          </div>
          </button>
        </div>
      </nav>
    )

}
export default NavbarMobile;