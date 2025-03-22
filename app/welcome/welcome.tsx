import { useState, useEffect, lazy, Suspense } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import Card from "~/components/Card";
import logo from "../assets/jurnlet cover.png"
import Planet from "../assets/lottie/planet.json"
import Learner from "../assets/lottie/Learner.json"
import ArrowStraight from "../assets/lottie/Arrow_straight.json"
import HeroImage from "../assets/HERO_IMAGE_1-removebg-preview.png"
import { useAuth } from "~/contexts/auth/auth";
import { doSignInWithGoogle, doSignOut } from "~/firebase/auth/authFunctions";


const Lottie = lazy(() => import("lottie-react"));

export function Welcome() {

  const authContext = useAuth();
  const { currentUser, userLoggedIn, loading } = authContext ?? {}

  const onGoogleSignIn = (e : React.MouseEvent<HTMLButtonElement>) =>{
    return doSignInWithGoogle().catch(error =>{
      console.error(error)
    })
  }
  

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">

        { /** Intro */ }
        <section className="intro min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-blue-200 p-6 rounded-3xl">
          <div className="container max-w-4xl mx-auto text-center">
        {/* Logo */}
        <img 
          src={logo} 
          alt="Platform Logo"
          className="mt-12 md:mt-0 w-64 h-64 mx-auto mb-12 rounded-full shadow-md shadow-gray-800 transform animate-bounce transition-all duration-200"
        />

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight ">
          <div className="">
            <span className="text-indigo-700">Discipline</span> <span className="text-green-700">immerse</span> <span className="text-amber-800">communicate</span>
          </div>
        </h1>

        {/* Animation */}
        <Suspense fallback={<p className="text-gray-600 text-lg">Loading...</p>}>
          <div className="w-80 h-80 m-auto md:absolute md:top-100 md:right-10 md:w-150 md:h-80">
            <Lottie 
              animationData={Planet} 
              loop={true}
              className="drop-shadow-xl hover:animate-pulse"
            />
          </div>
        </Suspense>

        <Suspense fallback={<p className="text-gray-600 text-lg">Loading...</p>}>
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
      <div className="flex flex-col h-screen md:flex-row justify-between items-center ">
        <div className="hidden md:block relative px-6 m-auto right-60">
          <img src = {HeroImage} />
        </div>
        <div className="w-100 h-80 m-auto bg-gray-200 rounded-xl mx-4 p-6 shadow-xl perspective-dramatic">
          <h1 className="w-full font-extrabold text-3xl text-black text-center mt-20">Get started with our enhanced dictionary.</h1>
          <button onClick={onGoogleSignIn} className="font-semibold text-indigo-500 text-xl absolute right-0 cursor-pointer bottom-0 pb-2 m-12
                          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-indigo-500 
                          after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">See library</button>
        </div>
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

