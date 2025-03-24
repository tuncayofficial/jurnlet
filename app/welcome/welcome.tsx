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
import Arrow_Bottom from "../assets/lottie/Arrow Bottom.json"


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
        { /** Intro bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 */ }
        <section className="min-h-screen w-full flex flex-col bg-gray-900 items-center shadow-lg justify-center relative overflow-hidden md:rounded-b-full">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-25 w-96 h-96 bg-indigo-300 opacity-20 rounded-full blur-3xl "></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl "></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-8 mt-4 animate-fade-in">
          <img
            src={logo} // Replace with the actual path to the JurnLet logo
            alt="JurnLet Logo"
            className="w-32 h-32 sm:w-60 sm:h-60 mx-auto rounded-full animate-bounce"
          />
        </div>

        {/* Tagline bg-gradient-to-r from-indigo-600 to-purple-600 */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text  mb-6">
        <motion.div 
          className=""
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >

            <motion.span onClick = {()=>{
              navigate("/library/discipline")
            }} variants={childVariants} className="mr-2 text-white cursor-pointer hover:animate-pulse hover:text-indigo-500" >
              Discipline 
            </motion.span>
            
            <motion.span onClick = {()=>{
              navigate("/library/immerse")
            }} variants={childVariants} className="mx-2 text-white cursor-pointer hover:animate-pulse hover:text-indigo-500" >
              immerse
            </motion.span>

            <motion.span variants={childVariants} onClick = {()=>{
              navigate("/library/communicate")
            }} className="ml-2 text-white cursor-pointer hover:animate-pulse hover:text-indigo-600" >
            communicate
            </motion.span>

          </motion.div>

        </h1>

        {/* Call to Action Button bg-gradient-to-r from-indigo-600 to-purple-600 */}
        <a
          href="/signup"
          className="inline-block mt-2 scale-110 bg-indigo-500 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in"
        >
          Get Started
        </a>
      </div>

      {/* Illustrations */}

      <Suspense fallback={<p className="text-gray-600 text-lg"></p>}>
          <div className="w-80 h-80 m-auto md:absolute md:-top-5 md:right-10 md:w-150 md:h-80">
            <Lottie 
              animationData={Planet} 
              loop={true}
              className="drop-shadow-xl hover:animate-pulse"
            />
          </div>
      </Suspense>

      <Suspense fallback={<p className="text-gray-600 text-lg"></p>}>
          <div className="hidden w-100 h-50 m-auto md:block md:absolute md:top-25 md:left-32 md:w-80 md:h-80 z-10">
            <Lottie 
              animationData={Learner} 
              loop={true} 
              className="drop-shadow-xl hover:animate-pulse"
            />
          </div>
      </Suspense>

      <div className="hidden md:block w-120 h-25 absolute p-6 bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-600 rounded-r-full left-0 top-99 shadow-lg"></div>
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
        <div className="hidden md:block w-205 h-80 absolute m-4 p-6 bg-indigo-700 rounded-l-full right-0 -bottom-190 shadow-lg"></div>
        <div className="flex flex-col justify-center items-start  ">
            <div className="hidden md:block w-50 h-30  absolute p-6 bg-indigo-700 rounded-r-full left-0 -bottom-120 shadow-lg"></div>
            <div className="hidden md:block w-80 h-30 absolute p-6 bg-indigo-700 rounded-r-full left-0 -bottom-170 shadow-lg"></div>
            <div className="hidden md:block w-110 h-30 absolute p-6 bg-indigo-700 rounded-r-full left-0 -bottom-220 shadow-lg"></div>
        </div>
        <Suspense fallback={<p className="text-gray-600 text-lg"></p>}>
          <div className="w-80 h-80 m-auto md:absolute md:top-283 md:right-20">
            <Lottie 
              animationData={Hero_Animation} 
              loop={true}
              className="drop-shadow-xl hover:animate-pulse"
            />
          </div>
        </Suspense>

        <Suspense fallback={<p className="text-gray-600 text-lg"></p>}>
          <div className="hidden m-auto md:block md:absolute md:-bottom-200 md:left-[13%] md:w-80 md:h-80 z-10 rotate-180">
            <Lottie 
              animationData={Arrow_Bottom} 
              loop={false} 
              className="drop-shadow-xl hover:animate-pulse"
              style={{ width : "250px", height : "250px" }}  
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



        <Suspense fallback={<p className="text-gray-600 text-lg"></p>}>
          <div className="hidden w-100 h-50 m-auto md:block md:absolute md:top-32 md:left-32 md:w-80 md:h-80">
            <Lottie 
              animationData={Learner} 
              loop={true} 
              className="drop-shadow-xl hover:animate-pulse"
            />
          </div>
        </Suspense>

        <Suspense fallback={<p className="text-gray-600 text-lg"></p>}>
          <div className="w-80 h-80 m-auto md:absolute md:top-283 md:right-20">
            <Lottie 
              animationData={Hero_Animation} 
              loop={true}
              className="drop-shadow-xl hover:animate-pulse"
            />
          </div>
        </Suspense>

        <Suspense fallback={<p className="text-gray-600 text-lg"></p>}>
          <div className="w-80 h-80 m-auto md:absolute md:top-100 md:right-10 md:w-150 md:h-80">
            <Lottie 
              animationData={Planet} 
              loop={true}
              className="drop-shadow-xl hover:animate-pulse"
            />
          </div>
        </Suspense>
        */ }
    </div>
  );
}

