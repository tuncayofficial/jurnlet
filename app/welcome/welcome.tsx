import React, {lazy} from 'react';
import Logo from "../assets/mainpagelogo.png"
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { Link, Navigate, useNavigate } from "react-router";



const Lottie = lazy(() => import("lottie-react"));
const MainPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <main className="w-full min-h-screen bg-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-30 px-4 sm:px-6 lg:px-8 ">
        <img src={Logo} alt="" className='w-40 h-40 rounded-xl  mt-2' />
        <div className="absolute inset-0 -z-10 opacity-20 animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-indigo-400 to-purple-400 blur-3xl" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold  tracking-tight animate-slide-up mt-5">
          Learn <span className="text-indigo-500 ">Faster</span>, Speak <span className="text-indigo-500">Fluently</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl animate-fade-in delay-200">
          The modern platform revolutionizing language learning with interactive tools and community.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in delay-400">
          <Link to = "/signup">
          <button className="px-8 py-3 cursor-pointer bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-800 hover:scale-105 transition duration-300">
            Start Learning
          </button>
          </Link>
          <button className="px-8 py-3 bg-yellow-600  cursor-pointer  font-semibold rounded-full  hover:scale-105 transition duration-300 hover:bg-yellow-800">
            Join Us
          </button>
        </div>
        
      </section>
      

      {/* Features Section */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 bg-white relative">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-10 animate-slide-up">
          What Makes Us  <span className='text-indigo-500'> Special</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto cursor-pointer">
          {[
            {
              title: "Interactive Lessons",
              desc: "Learn through immersive, fun experiences with us.",
              icon: "📚",
            },
            {
              title: "Expanded Dictionary",
              desc: "Master words by using our library which includes OxFord, Cambridge etc.",
              icon: "🧠",
            },
            {
              title: "Supportive Events",
              desc: "Enhance your learning with our events, badges and competitions.",
              icon: "🌍",
            },
            {
              title: "Real-Time Progress",
              desc: "Track your learning process with our analytical system",
              icon: "📊",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center animate-fade-in hover:bg-gray-900"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <span className="text-4xl">{feature.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-6 animate-slide-up mt-12 ">
        <span className='text-indigo-500'>Fun</span> Fact:
        </h2>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-3 animate-slide-up">
        Messi can't speak in English because he hasn't discovered <span className='text-indigo-500'>JurnLet</span> yet!
        </h3>
        
      </section>
      

      {/* Stats Section */}
      

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="absolute inset-0 -z-10 animate-pulse opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-indigo-300 to-purple-300 blur-3xl" />
        </div>
        
        <h2 className="md:text-7xl text-3xl text-white font-extrabold max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
          Learn from anywhere you want.
        </h2>
        <button className="px-10 py-4 mx-2 bg-gradient-to-r cursor-pointer from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition duration-300 animate-fade-in">
           <span className='text-3xl'><IoLogoGooglePlaystore /></span>
        </button>
        <button className="px-10 py-4 mx-2 bg-gradient-to-r cursor-pointer from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition duration-300 animate-fade-in ">
          <span className='text-3xl'><IoLogoAppleAppstore /></span>
        </button>
        
      </section>
      

      {/* Footer Info */}
      <section className="py-auto px-4 sm:px-6 lg:px-8 bg-gray-900 text-center text-gray-600">
        <p>© 2025 JurnLet. All rights reserved.</p>
      </section>
    </main>
  );
};


export default MainPage;










