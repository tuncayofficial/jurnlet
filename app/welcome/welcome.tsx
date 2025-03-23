import { useState, useEffect, lazy, Suspense } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import Card from "~/components/Card";
import logo from "../assets/jurnlet cover.png"
import Planet from "../assets/lottie/planet.json"
import Learner from "../assets/lottie/Learner.json"
import ArrowStraight from "../assets/lottie/Arrow_straight.json"
import HeroImage from "../assets/HERO_IMAGE_1-removebg-preview.png"
import Hero_Animation from "../assets/lottie/Hero_Animation.json"
import { useAuth } from "~/contexts/auth/auth";
import { doSignInWithGoogle, doSignOut } from "~/firebase/auth/authFunctions";
import { motion } from "framer-motion"
import { Navigate, useNavigate } from "react-router";


const Lottie = lazy(() => import("lottie-react"));

export function Welcome() {

  const authContext = useAuth();
  const { currentUser, userLoggedIn, loading } = authContext ?? {}
  const navigate = useNavigate()

  const onGoogleSignIn = (e : React.MouseEvent<HTMLButtonElement>) =>{
    return doSignInWithGoogle().catch(error =>{
      console.error(error)
    })
  }

  const parentVariants = {
    visible: {
      transition: {
        staggerChildren: 0.5, // This controls the delay between each child animation
        when: "beforeChildren", // "beforeChildren" ensures the parent animates first
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.5, // Optionally, set a stagger for hiding as well
      },
    },
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">

        { /** Intro */ }
        <section className="intro min-h-screen w-full flex flex-col items-center justify-center bg-blue-200 p-6 rounded-3xl">
          <div className="container max-w-4xl mx-auto text-center">
        {/* Logo */}
        <img 
          src={logo} 
          alt="Platform Logo"
          className="mt-12 md:mt-0 w-64 h-64 mx-auto mb-12 rounded-full shadow-md shadow-gray-800 transform animate-bounce transition-all duration-200"
        />

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl items-center justify-center font-extrabold text-gray-900 mb-4 leading-tight">
          <motion.div 
          className=""
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          >

            <motion.span onClick = {()=>{
              navigate("/library/discipline")
            }} variants={childVariants} className="text-indigo-700 mr-2 cursor-pointer hover:animate-pulse" >
              Discipline 
            </motion.span>
            
            <motion.span onClick = {()=>{
              navigate("/library/immerse")
            }} variants={childVariants} className="text-green-700 mx-2 cursor-pointer hover:animate-pulse" >
              immerse
            </motion.span>

            <motion.span variants={childVariants} onClick = {()=>{
              navigate("/library/communicate")
            }} className="text-amber-800 ml-2 cursor-pointer hover:animate-pulse" >
            communicate
            </motion.span>

          </motion.div>
        </h1>

        {/* Animation */}
        <Suspense fallback={<p className="text-gray-600 text-lg"></p>}>
          <div className="w-80 h-80 m-auto md:absolute md:top-100 md:right-10 md:w-150 md:h-80">
            <Lottie 
              animationData={Planet} 
              loop={true}
              className="drop-shadow-xl hover:animate-pulse"
            />
          </div>
        </Suspense>
        <div className="hidden md:block w-150 h-30 absolute p-6 bg-indigo-700 rounded-r-full left-0 top-106"></div>
        <Suspense fallback={<p className="text-gray-600 text-lg"></p>}>
          <div className="hidden w-100 h-50 m-auto md:block md:absolute md:top-32 md:left-32 md:w-80 md:h-80">
            <Lottie 
              animationData={Learner} 
              loop={true} 
              className="drop-shadow-xl hover:animate-pulse"
            />
          </div>
        </Suspense>
      </div>
    </section>
    <section>
      <div className="flex flex-col h-screen md:flex-row justify-between items-center transform-flat">
        <div className="hidden md:block relative px-6 m-auto right-60">
          <motion.img src = {HeroImage}  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')}/>
        </div>
        <div className="w-100 h-80 relative m-auto bg-gray-200 rounded-xl mx-4 p-6 shadow-xl z-10 perspective-dramatic translate-z-12 rotate-x-0  hover:scale-105 transition-all">
          <div className="flex flex-row items-start">
            <div className="p-1.5 rounded-full bg-red-500 mr-2"></div>
            <div className="p-1.5 rounded-full bg-yellow-500"></div>
            <div className="p-1.5 rounded-full bg-green-500 ml-2"></div>
          </div>
          <h1 onClick = {()=>{
              navigate("/library/dictionary")
            }} className="w-full font-extrabold text-3xl text-black text-center mt-20 tracking-wide">Get started with our enhanced <span className="text-blue-700 cursor-pointer hover:animate-pulse">dictionary</span>.</h1>


          <button onClick={onGoogleSignIn} className="font-semibold text-blue-700 text-xl absolute right-0 cursor-pointer bottom-0 pb-2 m-12
                          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-indigo-500 
                          after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">See library</button>
        </div>  
        <div className="hidden md:block w-205 h-80 absolute m-4 p-6 bg-indigo-700 rounded-l-full right-0 -bottom-190"></div>
        <Suspense fallback={<p className="text-gray-600 text-lg"></p>}>
          <div className="w-80 h-80 m-auto md:absolute md:top-283 md:right-20">
            <Lottie 
              animationData={Hero_Animation} 
              loop={true}
              className="drop-shadow-xl hover:animate-pulse"
            />
          </div>
        </Suspense>
      </div>
    </section>

        { /** Cards 
        <section className="cards">
        <div className="hidden md:flex items-center justify-center min-h-screen bg-white">
          <Card title = "Vocabulary Quiz" content="Try our native-level vocabulary quizzes, powered by JurnLet API." button="Learn More"/>
          <Card title = "Instructor Board" content="Read interesting articles from our best instructors over the world." button="Sign up"/>
          <Card title = "Journal Interface" content="Design your own journal dashboard with our special tools." button="Get started"/>
        </div>
        </section>
        */ }
    </div>
  );
}

