import React, {lazy, Suspense} from "react";
import { Link } from "react-router"

import Error from "../../assets/lottie/Error.json"

const Lottie = lazy(() => import("lottie-react"));

function SearchError_mobile(){
    return(

        <div className=" min-h-[calc(100vh-2rem)] bg-gray-800 w-full md:hidden">
            <div className="flex items-center justify-center">
            <div className="animate-pulse py-12">
            <Suspense fallback={<p className="text-white">Loading animation...</p>}>
              <Lottie animationData={Error} loop={true} style = {{ width : "300px", height : "300px" }}/>
            </Suspense>     
            </div>
          </div>
            <div className="mx-auto w-auto px-20 mt-5 animate-pulse">
              <div className="text-center text-xl"> 
                <p><strong><span className="text-green-500">Congratulations! </span>You’ve discovered the mystical land of <span className="text-red-500">'Not Found'</span>. Sadly, Your item didn’t make it here — <Link  className="text-indigo-500 " to="">Try again</Link> before it files for missing status!</strong></p>
              </div>
            </div>
        </div>
    );
};
export default SearchError_mobile;