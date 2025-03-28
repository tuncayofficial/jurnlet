import { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaFacebook, FaArrowLeft } from "react-icons/fa";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from "~/firebase/auth/authFunctions";
import { useNavigate } from "react-router";
import { motion } from "framer-motion"
// Icons
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successful, setSuccessful] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("Test message")
  const [error, setError] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleSignUp = async (email : string, password : string, confirmPassword : string) => {
    try {
      if (password !== confirmPassword) {
        setError(true);
        setErrorMessage("Invalid password confirmation.");
        return;
      }
  
      if (password.length < 8) {
        setError(true);
        setErrorMessage("Your password should be at least 8 characters.");
        return;
      }
  
      await doCreateUserWithEmailAndPassword(email, password);
  
      setError(false);
      setSuccessful(true);
  
      setEmail("");
      setPassword("");
      setConfirmPassword("");
  
      // Redirect after 1 second
      setTimeout(() => {
        window.location.href = "/account-settings";
      }, 1000);
    } catch (error) {
      setError(true);
      setErrorMessage("Couldn't create an account.");
    }
  };

  const handleGoogleSignUp = async() =>{
      try {
        await doSignInWithGoogle()
        setError(false)
        setSuccessful(true)
        setTimeout(() => {
          window.location.href = "/account-settings";
        }, 1000);
      } catch (error) {
        setError(true);
        setErrorMessage("Couldn't create an account.");
      }
  }
  

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-900 px-4 relative">
      {/* Signup Form Container */}
      <div className="w-full max-w-md rounded-2xl bg-gray-800 mt-15 p-8 shadow-xl relative">
        
        {/* Return Home (inside box, like in login) */}
                <a href="/" className="absolute top-4 left-6 text-gray-400 hover:text-white transition flex items-center mt-2">
          <FaArrowLeft  />
          <span className="hidden sm:inline text-sm ml-2">Return to Home</span>
        </a>
        <h2 className="mb-6 text-center text-2xl font-bold text-white mt-7">Join Our Magical World</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-300">Email</label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><FaEnvelope  /></span>
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
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><FaLock  /></span>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 pl-10 text-white outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-300">Confirm Password</label>
          <div className="relative mt-1">
           <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"> <FaLock  /></span>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 pl-10 text-white outline-none focus:border-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Signup Button */}
        <button onClick = {() =>{
          handleSignUp(email, password, confirmPassword)
        }} className="w-full rounded-lg bg-blue-600 p-3 font-medium text-white transition cursor-pointer hover:bg-blue-700">
          Sign Up
        </button>

        {/* OR Divider */}
        <div className="my-6 flex items-center text-gray-400">
          <div className="h-px flex-1 bg-gray-600"></div>
          <span className="px-4 text-sm">or continue with</span>
          <div className="h-px flex-1 bg-gray-600"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex gap-4">
          <button onClick={handleGoogleSignUp} className="flex w-full items-center justify-center cursor-pointer gap-2 rounded-lg bg-red-600 p-3 font-medium text-white transition hover:bg-red-700">
            <FaGoogle /> Google
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-lg cursor-pointer bg-blue-600 p-3 font-medium text-white transition hover:bg-blue-700">
            <FaFacebook /> Facebook
          </button>
        </div>

        {/* Already have an account? */}
        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account? <a href="/login" className="text-blue-400 hover:underline">Login</a>
        </p>
      </div>
      <div className="flex flex-col">
      { successful ?
      <motion.div
       initial={{ scale: 0 }} 
       animate={{ scale: 1 }}
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95 }}
       onHoverStart={() => console.log('hover started!')}
       className={`flex flex-row justify-center items-center m-8 bg-green-500 p-4 rounded-lg absolute right-5 top-20`}>
       <span className="mx-2 text-xl"><FaCheck /></span> <span className="mx-2 font-bold">Successfully created account!</span>
      </motion.div> : ""
      }
      { error ?
      <motion.div
       initial={{ scale: 0 }} 
       animate={{ scale: 1 }}
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95 }}
       onHoverStart={() => console.log('hover started!')}
       className={`flex flex-row justify-center items-center m-8 bg-red-500 p-4 rounded-lg absolute right-5 top-20`}>
       <span className="mx-2 text-xl"><ImCross /></span> <span className="mx-2 font-bold">{errorMessage}</span>
      </motion.div> : ""
      }
      </div>
    </div>
  );
}
