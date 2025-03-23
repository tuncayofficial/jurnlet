import React, { useState, useEffect, lazy, useRef, Suspense } from "react";
import { useParams } from "react-router";
import axios from "axios";
import LoaderWatch from "../../assets/lottie/Animation - 1742464304885.json";
import Notebook from "../../assets/lottie/Notebook.json";
import { motion } from "framer-motion";
import type { LottieComponentProps, LottieRefCurrentProps } from "lottie-react";

interface Definition {
    definition: string;
}
  
interface Meaning {
    definitions: Definition[];
}
  
interface Entry {
    meanings: Meaning[];
}
  
interface ResponseData {
    data: Entry[];
}

const Lottie = lazy(() => import("lottie-react"));

export default function LibraryDefinition() {
    const [definitions, setDefinitions] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const notebookRef = useRef<LottieRefCurrentProps | null>(null);

    const { word } = useParams();

    useEffect(() => {
        const fetchDefinition = async () => {
            if (!word) return;
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                const dataDefinitions = (response.data as Entry[]).flatMap((entry: Entry) =>
                    entry.meanings.flatMap((meaning: Meaning) =>
                      meaning.definitions.map((def: Definition) => def.definition)
                    )
                  ).slice(0, 5);

                if (Array.isArray(dataDefinitions) && dataDefinitions.length > 0) {
                    setDefinitions(dataDefinitions);
                    setTimeout(() => setLoading(false), 1500);  
                } else {
                    setDefinitions([]);
                }
            } catch (error) {
                console.error("Error fetching definition:", error);
                setError("Error fetching definition. Please try again.");
                setLoading(false);
            }
        };

        fetchDefinition();
    }, [word]);

    return (
        <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-800 shadow-md">
            <div className="hidden sm:block w-60 h-60 absolute top-16 left-240 cursor-pointer">
                <Suspense fallback={<p className="text-white">Loading animation...</p>}>
                    <Lottie
                        onComplete={() => {
                            notebookRef.current?.goToAndPlay(45, true);
                        }}
                        lottieRef={notebookRef}
                        animationData={Notebook}
                        loop={false}
                    />
                </Suspense>
            </div>
            <h1 className="font-extrabold text-4xl text-white mb-8 -mt-2">{word?.toUpperCase()}</h1>

            {/*{error && <p className="text-red-500 mb-4">{error}</p>}  Error message */}

            <ul className="flex flex-col justify-center items-center w-full max-w-md">
                {loading ? (
                    <Suspense fallback={<p className="text-white">Loading animation...</p>}>
                        <Lottie animationData={LoaderWatch} loop={true} size={1} />
                    </Suspense>
                ) : definitions.length > 0 ? (
                    definitions.map((definition, index) => (
                        <motion.li
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="rounded-lg font-semibold w-full shadow-lg bg-indigo-500 p-6 text-white mb-6 hover:bg-indigo-800 cursor-pointer transition-all scale-90 md:scale-100"
                            key={index}
                        >
                            {definition}
                        </motion.li>
                    ))
                ) : (
                    <motion.p initial={{ scale :0 }} animate={{ scale: 1 }} className="text-white font-bold bg-red-500 p-3 rounded-full">No definitions found.</motion.p>
                )}
            </ul>
        </div>
    );
}
