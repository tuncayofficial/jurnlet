import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { motion } from "framer-motion";

const NavbarMobile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "2.5rem", transition: { duration: 0.3 } },
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-800 text-white shadow-xl z-50 md:hidden rounded-t-2xl">
      <div className="flex justify-around items-center py-2 px-4 sm:px-6 md:px-8">
        {/* Home Tab */}
        <button
          type="button"
          className={`flex flex-col items-center ${activeTab === "home" ? "text-indigo-500" : ""}`}
          onClick={() => handleTabClick("home")}
        >
          <span className="text-3xl">
            <FaHome />
          </span>
          <span className="text-xs sm:text-sm md:text-base">
            <strong>Home</strong>
          </span>
          {activeTab === "home" && (
            <motion.div
              className="absolute -bottom-1 h-1.5 bg-indigo-500 rounded-b"
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
            />
          )}
        </button>

        {/* Library Tab */}
        <button
          type="button"
          className={`flex flex-col items-center ${activeTab === "library" ? "text-indigo-500" : ""}`}
          onClick={() => handleTabClick("library")}
        >
          <span className="text-3xl">
            <IoLibrary />
          </span>
          <span className="text-xs sm:text-sm md:text-base">
            <strong>Library</strong>
          </span>
          {activeTab === "library" && (
            <motion.div
              className="absolute -bottom-1 h-1.5 bg-indigo-500 rounded-b"
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
            />
          )}
        </button>

        {/* Add New Tab */}
        <button
          type="button"
          className={`flex flex-col items-center ${activeTab === "newArticle" ? "text-indigo-500" : ""}`}
          onClick={() => handleTabClick("newArticle")}
        >
          <span className="text-3xl">
            <FaPlusSquare />
          </span>
          <span className="text-xs sm:text-sm md:text-base">
            <strong>New Article</strong>
          </span>
          {activeTab === "newArticle" && (
            <motion.div
              className="absolute -bottom-1 h-1.5 bg-indigo-500 rounded-b"
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
            />
          )}
        </button>

        {/* Quiz Tab */}
        <button
          type="button"
          className={`flex flex-col items-center ${activeTab === "quiz" ? "text-indigo-500" : ""}`}
          onClick={() => handleTabClick("quiz")}
        >
          <span className="text-3xl">
            <MdQuiz />
          </span>
          <span className="text-xs sm:text-sm md:text-base">
            <strong>Quizzes</strong>
          </span>
          {activeTab === "quiz" && (
            <motion.div
              className="absolute -bottom-1 h-1.5 bg-indigo-500 rounded-b"
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
            />
          )}
        </button>

        {/* Fav Tab */}
        <button
          type="button"
          className={`flex flex-col items-center ${activeTab === "favourites" ? "text-indigo-500" : ""}`}
          onClick={() => handleTabClick("favourites")}
        >
          <span className="text-3xl">
            <FaHeart />
          </span>
          <span className="text-xs sm:text-sm md:text-base">
            <strong>Favourites</strong>
          </span>
          {activeTab === "favourites" && (
            <motion.div
              className="absolute -bottom-1 h-1.5 bg-indigo-500 rounded-b"
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
            />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavbarMobile;
