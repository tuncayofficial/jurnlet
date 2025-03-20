import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { useParams } from "react-router";
import axios from "axios";

import LibraryPlayerUK from "./LibraryPlayerUK";
import LibraryPlayerUS from "./LibraryPlayerUS";

import Notebook from "../../../assets/lottie/Notebook.json"
const Lottie = lazy(() => import("lottie-react"));


export default function LibraryVisual() {

    const { word } = useParams(); 

    const getFontSize = (wordLength: number) => {
        if (wordLength <= 5) return "text-2xl"; 
        if (wordLength <= 8) return "text-xl"; 
        return "text-lg";
    };

    const displayWord = word || "Word"; 
    const fontSizeClass = getFontSize(displayWord.length);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-white">
            <div className="relative w-[300px] h-[300px] flex justify-center items-center">
                <div className="w-32 h-32 p-4 -mb-4 bg-indigo-500 rounded-full flex justify-center items-center text-white font-bold shadow-lg">
                    <span className={fontSizeClass}>{displayWord.toUpperCase()}</span>
                </div>
            </div>
            <h2 className="text-black font-extrabold text-3xl mb-8">Pronunciation</h2>
            <div className="flex flex-row m-2 justify-center items-center">
                <LibraryPlayerUK />
                <LibraryPlayerUS />
            </div>
        </div>
    );
}