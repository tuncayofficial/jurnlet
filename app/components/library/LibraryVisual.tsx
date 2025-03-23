import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { useParams } from "react-router";
import axios from "axios";

import LibraryPlayerUK from "./LibraryPlayerUK";
import LibraryPlayerUS from "./LibraryPlayerUS";

import Notebook from "../../assets/lottie/Notebook.json"
const Lottie = lazy(() => import("lottie-react"));


export default function LibraryVisual() {

    const [definitions, setDefinitions] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const { word } = useParams(); 

    const getFontSize = (wordLength: number) => {
        if (wordLength <= 5) return "text-2xl"; 
        if (wordLength <= 8) return "text-xl"; 
        return "text-lg";
    };

    useEffect(() => {
        const fetchDefinition = async () => {
            if (!word) return;
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`http://localhost:3000/api/definition/${word}`);
                const data = response.data.limitedDefinitions;

                if (Array.isArray(data) && data.length > 0) {
                    setDefinitions(data);
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


    const displayWord = word || "Word"; 
    const fontSizeClass = getFontSize(displayWord.length);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-white">
            <div className="relative w-[300px] h-[300px] flex justify-center items-center">
                <div className={`w-32 h-32 p-4 -mb-4 ${definitions.length > 0 ? "bg-indigo-500" : "bg-red-500"} rounded-full flex justify-center items-center text-white font-bold shadow-lg`}>
                    <span className={fontSizeClass}>{displayWord.toUpperCase()}</span>
                </div>
            </div>
            <h2 className="text-black font-extrabold text-3xl mb-8 uppercase">Pronunciation</h2>
            <div className="flex flex-row m-2 justify-center items-center sm:m-2">
                <LibraryPlayerUK />
                <LibraryPlayerUS />
            </div>
        </div>
    );
}