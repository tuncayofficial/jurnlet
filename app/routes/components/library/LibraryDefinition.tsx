import React, { useState, useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router";
import axios from "axios";
import LoaderWatch from "../../../assets/lottie/Animation - 1742464304885.json";
import Notebook from "../../../assets/lottie/Notebook.json";
import { motion } from "framer-motion";

const Lottie = lazy(() => import("lottie-react"));


export default function LibraryDefinition() {
    const [definitions, setDefinitions] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    const { word } = useParams()

    useEffect(() => {
        const fetchDefinition = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/definition/${word}`);
                const data = response.data.limitedDefinitions

                if(Array.isArray(data) && data.length > 0){
                    setDefinitions(data);
                    setTimeout(() => setLoading(false), 1500);                   
                } else {
                    setDefinitions([])
                }

            } catch (error) {
                console.error("Error fetching definition:", error);
            }
        };

        fetchDefinition();
    }, []);

    return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-800 shadow-md">
        <div className="hidden sm:block w-60 h-60 absolute top-1 left-240">
            <Suspense fallback={<p className="text-white">Loading animation...</p>}>
                <Lottie animationData={Notebook} loop={true}/>
            </Suspense>
        </div>
    <h1 className="font-extrabold text-4xl text-white mb-8 -mt-6">{ word?.toUpperCase() }</h1>
    <ul className="flex flex-col justify-center items-center w-full max-w-md">
        {loading ?  (
                    <Suspense fallback={<p className="text-white">Loading animation...</p>}>
                        <Lottie animationData={LoaderWatch} loop={true} size = {1}/>
                    </Suspense>
                ): definitions.map((definition, index) => (
                    <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-lg font-semibold w-full shadow-lg bg-indigo-500 p-6 text-white mb-6 hover:bg-indigo-800 cursor-pointer transition-all"
                    key={index}
                >
                        {definition}
                    </motion.li>
        ))}
    </ul>
    </div>
    );
}