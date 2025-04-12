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
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center py-30 px-4 sm:px-6 lg:px-8 ">
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
          <button className="px-8 py-3 cursor-pointer md:text-xl bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-800 hover:scale-105 transition duration-300">
            Start Learning
          </button>
          </Link>
          <button className="px-8 py-3 bg-yellow-600 md:text-xl cursor-pointer  font-semibold rounded-full  hover:scale-105 transition duration-300 hover:bg-yellow-800">
            Join Us
          </button>
        </div>
        
      </section>
      

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative items-center justify-center">
  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 mb-12 animate-slide-up tracking-tight">
    What Makes Us <span className="text-indigo-600 bg-indigo-100/50 px-3 py-1 rounded-lg">Special</span>
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {[
      {
        title: "Interactive Lessons",
        desc: "Learn through immersive, fun experiences with us.",
        icon: "📚",
      },
      {
        title: "Expanded Dictionary",
        desc: "Master words by using our library which includes Oxford, Cambridge, and more.",
        icon: "🧠",
      },
      {
        title: "Supportive Events",
        desc: "Enhance your learning with our events, badges, and competitions.",
        icon: "🌍",
      },
      {
        title: "Real-Time Progress",
        desc: "Track your learning process with our analytical system.",
        icon: "📊",
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 cursor-pointer transition-all duration-400 text-center animate-fade-in bg-gradient-to-br from-gray-800 to-gray-900 hover:from-indigo-900 hover:to-gray-900"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        <span className="text-5xl drop-shadow-md">{feature.icon}</span>
        <h3 className="mt-5 text-xl font-bold text-white tracking-wide">{feature.title}</h3>
        <p className="mt-3 text-gray-300 leading-relaxed">{feature.desc}</p>
      </div>
    ))}
  </div>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-10 animate-slide-up mt-16 tracking-tight">
    Explore more about <span className="text-indigo-600 bg-indigo-100/50 px-3 py-1 rounded-lg">JurnLet</span>
  </h2>

  <button className="block text-xl cursor-pointer mx-auto px-10 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-2xl hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-200/50">
    Explore
  </button>
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










