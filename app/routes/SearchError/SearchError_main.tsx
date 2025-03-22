import React, {lazy, Suspense} from "react";
import { Link } from "react-router"

import Error from "../../assets/lottie/Error.json"

const Lottie = lazy(() => import("lottie-react"));

function SearchError_main(){
return(
        <div className="h-screen bg-gray-800 w-full pt-30 hidden md:block ">
          <div className="flex items-center justify-center">
            <div className="animate-pulse p-0 m-0">
                <Suspense fallback={<p className="text-white">Loading animation...</p>}>
                    <Lottie animationData={Error} loop={true} style = {{ width : "400px", height : "400px" }}/>
                </Suspense>
            </div>
          </div>
            <div className="mx-auto w-auto mt-5 px-30 animate-pulse lg:px-80">
              <div className="text-center text-xl md:text-3xl"> 
                <p><strong><span className="text-green-500">Congratulations! </span>You’ve discovered the mystical land of <span className="text-red-500">'Not Found'</span>. Sadly, Your item didn’t make it here — <Link  className="text-indigo-500 " to="">Try again</Link> before it files for missing status!</strong></p>
              </div>
            </div>
        </div>
      

    );
};
export default SearchError_main;

/**
 *            <div>
              <p><strong>Congratulations! You’ve discovered the mystical land of 'Not Found.' Sadly, your item didn’t make it here—try again before it files for missing status!</strong></p>
              </div> 
 *  min-h-[calc(100vh-5rem)]
 *
 */