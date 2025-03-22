import { useState } from "react";
import { FaUser, FaLock, FaGoogle, FaFacebook, FaArrowLeft } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4">
      {/* Container */}
      <div className="w-full max-w-md rounded-2xl bg-gray-800 p-8 shadow-xl relative">
      
        {/* Return Home Arrow - Now at the absolute top of the page */}
        <a href="/" className="absolute top-6 left-6 flex items-center text-gray-400 hover:text-white transition">
          <span className="mr-2"><FaArrowLeft /></span>
          <span className="hidden sm:inline text-sm">Return to Home</span>
        </a>

{/* Login Container */}
<div className="w-full max-w-md rounded-2xl bg-gray-800 p-8 ">


        <h2 className="mb-6 text-center text-2xl font-bold text-white">Welcome to JurnLet World</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-300">Email</label>
          <div className="relative mt-1">
           <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"> <FaUser  /></span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 pl-10 text-white outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-300">Password</label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" ><FaLock /></span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 pl-10 text-white outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Forgot Password & Login Button */}
        <div className="mb-6 text-right text-sm">
          <a href="#" className="text-blue-400 hover:underline">Forgot password?</a>
        </div>
        
        <button className="w-full rounded-lg bg-blue-600 p-3 font-medium text-white transition hover:bg-blue-700">
          Login
        </button>

        {/* OR Divider */}
        <div className="my-6 flex items-center text-gray-400">
          <div className="h-px flex-1 bg-gray-600"></div>
          <span className="px-4 text-sm">or continue with</span>
          <div className="h-px flex-1 bg-gray-600"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex gap-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 p-3 font-medium text-white transition hover:bg-red-700">
            <FaGoogle /> Google
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 p-3 font-medium text-white transition hover:bg-blue-700">
            <FaFacebook /> Facebook
          </button>
        </div>

        {/* Signup Link */}
        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account? <a href="/signup" className="text-blue-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
    </div>
  );
}
